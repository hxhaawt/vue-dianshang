<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>数据统计</h2>
            <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品类型：
                </div>
                <div class="sales-board-line-right">
                    <v-chooser :selections="buyTypes"
                        @on-change="onParamChange('productType', $event)"
                    >
                    </v-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    适用地区：
                </div>
                <div class="sales-board-line-right">
                    <v-selection :selections="districts"
                        @on-change="onParamChange('region', $event)">
                    </v-selection>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right">
                    {{ validTime }}
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right">
                    {{ totalPrice }} 元
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
            <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

            <table class="sales-board-table">
                <tbody>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>安全安保</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>办公文教</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>彩票</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>车辆物流</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>成人用品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>出版传媒</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>电脑硬件</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>电子电工</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>房地产建筑装修</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>分类平台</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>服装鞋帽</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>箱包饰品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>化工原料制品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>机械设备</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>家庭日用品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>家用电器</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>教育培训</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>节能环保</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>金融服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>礼品</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>旅游住宿</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>美容化妆</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>母婴护理</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>农林牧渔</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>软件</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>商务服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>生活服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>食品保健品</label>
                        </div>
                    </td>
                </tr>
                <tr class="ui-table-row">
                    <td class="col-first">
                        <div class="intro-pic">
                            <label>手机数码</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>通讯服务设备</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>网络服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>医疗服务</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>游戏</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>运动休闲娱乐</label>
                        </div>
                    </td>
                    <td>
                        <div class="intro-pic">
                            <label>招商加盟</label>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <!-- 购买弹框，默认隐藏，点击 立即购买 时弹出 -->
        <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
            <table class="buy-dialog-table">
                <tr>
                    <th>产品类型</th>
                    <th>适用地区</th>
                    <th>有效时间</th>
                    <th>总价</th>
                </tr>
                <tr>
                    <td>{{ productType.label }}</td>
                    <td>{{ region.label }}</td>
                    <td>{{ validTime }}</td>
                    <td>{{ totalPrice }}</td>
                </tr>
            </table>
            <h3 class="buy-dialog-title">请选择银行</h3>
            <bank-chooser @on-change="onChangeBanks"></bank-chooser>
            <div class="button buy-dialog-btn" @click="confirmBuy">
                确认购买
            </div>
        </my-dialog>
        <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
            支付失败！
        </my-dialog>
        <!-- 等待付款窗口 -->
        <check-order :is-show-check-dialog="isShowCheckOrder"
                     :order-id="orderId"
                     @on-close-check-dialog="hideCheckOrder">

        </check-order>
    </div>
</template>

<script>
    import VSelection from '../../components/base/selection'
    import VChooser from '../../components/base/chooser'

    import BankChooser from '../../components/bankChooser'
    import CheckOrder from '../../components/checkOrder'
    import Dialog from '../../components/base/dialog'

    export default {
        components: {
            VChooser,
            VSelection,
            MyDialog: Dialog,
            BankChooser,
            CheckOrder
        },
        data () {
            return {
                isShowErrDialog: false, // 支付失败 标志
                isShowCheckOrder: false, // 是否显示 点击确认购买 之后的窗口
                isShowPayDialog: false, // 是否显示 购买弹框
                bankId: null,   // 银行ID,
                productType: {},    // 产品类型
                region: {},     // 适用地区
                validTime: '半年',  // 有效时间
                // totalPrice: '500',     // 总价
                orderId: '',        // 后台 返回的购买id
                buyTypes: [
                    {
                        label: '红色版',
                        value: 0
                    },
                    {
                        label: '绿色版',
                        value: 1
                    },
                    {
                        label: '紫色版',
                        value: 2
                    }
                ],
                districts: [
                    {
                        label: '北京',
                        value: 0
                    },
                    {
                        label: '上海',
                        value: 1
                    },
                    {
                        label: '广州',
                        value: 2
                    },
                    {
                        label: '天津',
                        value: 3
                    },
                    {
                        label: '武汉',
                        value: 4
                    },
                    {
                        label: '重庆',
                        value: 5
                    },
                ]
            }
        },
        computed: {
            // 总价
            totalPrice()  {
                return 500 + this.productType.value * 50 + this.region.value * 20;
            }
        },
        mounted () {
            this.productType =  this.buyTypes[0];
            this.region =  this.districts[0];
        },

        methods: {

            // 显示购买信息 弹窗
            showPayDialog() {
                this.isShowPayDialog = true;
            },
            // 关闭购买信息 窗口
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

            // 点击--更新当前需要的 地域、产品类型
            onParamChange(attr, value) {
                this[attr] = value;
            },

            // 处理点击 确认购买 按钮
            confirmBuy () {

                // 提交数据给后端
                let reqParams = {
                    // 只是 测试数据
                    busyType: this.productType.value,
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
    .buy-dialog-btn {
        margin-top: 20px;
    }
    .buy-dialog-title {
        font-size: 16px;
        font-weight: bold;
    }
    .buy-dialog-table {
        width: 100%;
        margin-bottom: 20px;
    }
    .buy-dialog-table td,
    .buy-dialog-table th{
        border: 1px solid #e3e3e3;
        text-align: center;
        padding: 5px 0;
    }
    .buy-dialog-table th {
        background: #4fc08d;
        color: #fff;
        border: 1px solid #4fc08d;
    }
    */
</style>
