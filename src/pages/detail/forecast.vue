<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>数据预测</h2>
            <p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    {{productTitle[0]}}:
                </div>
                <div class="sales-board-line-right">
                    <v-counter :max="100" :min="20"
                        @on-change="onParamChange('counter', $event)"
                    >
                    </v-counter>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    {{productTitle[1]}}:
                </div>
                <div class="sales-board-line-right">
                    <v-mul-chooser :selections="versionList"
                        @on-change="onParamChange('buyVersionArry', $event)"
                    >

                    </v-mul-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    {{productTitle[2]}}:
                </div>
                <div class="sales-board-line-right">
                    一年
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    {{productTitle[3]}}:
                </div>
                <div class="sales-board-line-right">
                    {{totalPrice}} 元
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">&nbsp;</div>
                <div class="sales-board-line-right">
                    <div class="button" @click="showPayDialog">
                        立即购买
                    </div>
                </div>
            </div>
        </div>
        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
                以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
                大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
                作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
                关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
        </div>

        <!-- 购买弹框，默认隐藏，点击 立即购买 时弹出 -->
        <my-dialog :is-show="isShowPayDialog"
            @on-close="hidePayDialog">
            <table class="buy-dialog-table">
                <tr>
                    <th v-for="(item, index) in productTitle"
                        :key="index"
                    >
                        {{ item }}
                    </th>

                </tr>
                <tr>
                    <td>{{ counter }}</td>
                    <td>
                        <span v-for="(item, index) in buyVersionArry"
                            :key="index"
                        >
                            {{ item.label}}
                        </span>
                    </td>
                    <td> 一年 </td>
                    <td>{{ totalPrice }}</td>
                </tr>
            </table>
            <h3 class="buy-dialog-title">请选择银行</h3>
            <bank-chooser @on-change="onChangeBanks"></bank-chooser>
            <div class="button buy-dialog-btn"
                 @click="confirmBuy">
                确认购买
            </div>
        </my-dialog>
        <!-- 等待付款弹窗 -->
        <check-order :is-show-check-dialog="isShowCheckOrder"
                     :order-id="orderId"
                     @on-close-check-dialog="hideCheckOrder"
        >

        </check-order>
    </div>
</template>

<script>
    import VCounter from '../../components/base/counter'
    import BankChooser from '../../components/bankChooser'
    import VMulChooser from '../../components/base/multiplyChooser'
    import Dialog from '../../components/base/dialog'
    import CheckOrder from '../../components/checkOrder'

    export default {
        components: {
            VCounter,
            VMulChooser,
            BankChooser,
            myDialog: Dialog,
            CheckOrder
        },
        data () {
            return {
                productTitle: [
                    '购买数量',
                    '媒介',
                    '有效时间',
                    '总价'
                ],
                isShowErrDialog: false, // 支付失败 标志
                isShowCheckOrder: false, // 是否显示 点击确认购买 之后的窗口
                buyVersionArry: [],     // 购买的媒介/版本 可以是多个 内部为对象格式
                counter: 20,    // 购买数量
                bankId: null,   // 银行ID,
                orderId: '',        // 后台 返回的购买id
                isShowPayDialog: false, // 显示购买窗口 标志
                // 媒介 列表
                versionList: [
                    {
                        label: '纸质报告',
                        value: 0
                    },
                    {
                        label: 'pdf',
                        value: 1
                    },
                    {
                        label: '页面报告',
                        value: 2
                    },
                    {
                        label: '邮件',
                        value: 3
                    }
                ]
            }
        },
        computed: {
            // 总价
            totalPrice()  {
                const versionPriceArr = [80, 30, 20, 10];
                let versionPriceTotal = 0;
                for(let i=0; i<this.buyVersionArry.length; i++) {
                    versionPriceTotal += versionPriceArr[ this.buyVersionArry[i].value ];
                }

                return 500 + (this.counter - 20) * 20 + versionPriceTotal;
            }
        },
        methods: {

            onParamChange (attr, val) {
                this[attr] = val;
            },

            // 显示购买弹窗
            showPayDialog() {
                this.isShowPayDialog = true;
            },
            // 隐藏购买窗口
            hidePayDialog() {
                this.isShowPayDialog = false;
            },
            // 监听选择银行时，返回的信息
            onChangeBanks(bankObj) {
                this.bankId = bankObj.id;
                console.log("bankId:", this.bankId);
            },

            // 关闭 点击确认购买 之后显示 的窗口
            hideCheckOrder () {
                this.isShowCheckOrder = false;
            },
            // 关闭 支付失败窗口
            hideErrDialog () {
                this.isShowErrDialog = false
            },

            // 处理点击 确认购买 按钮
            confirmBuy () {

                // 提交数据给后端
                let reqParams = {
                    // 只是 测试数据
                    counter: this.counter,
                    bankId: this.bankId
                };
                this.$http.post('/api/createOrder', reqParams)
                    .then((res) => {
                        this.orderId = res.data.orderId;
                        // 显示 等待付款 窗口
                        this.isShowCheckOrder = true;
                        // 关闭 购买窗口
                        this.isShowPayDialog = false;
                    }, (err) => {
                        // 关闭 购买窗口
                        this.isShowPayDialog = false;
                        // 显示支付失败窗口
                        this.isShowErrDialog = true;
                    })

            }
        },
         mounted () {
             this.buyVersionArry = [this.versionList[0]];
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
