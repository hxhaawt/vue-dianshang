<template>
    <div>
        <div class="dialog-wrap">
            <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
            <transition name="drop">
                <div class="dialog-content"  v-if="isShow">
                    <p class="dialog-close" @click="closeMyself">x</p>
                    <!-- 接收父元素传递下来的 HTML 内容 -->
                    <slot>empty</slot>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    // 这是一个弹窗模块，
    // 如在主页中 点击注册或者登录或者关于等时候弹出

    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {

            }
        },
        methods: {
            closeMyself () {
                this.$emit('on-close')
            }
        }
    }
</script>

<style scoped>
    /* 在元素插入前应用，1秒后删除。（开始于进入状态） */
    .drop-enter {
        transform: translateY(-500px);
    }
    /* 在元素插入前应用，当transition/animation结束时移除 */
    .drop-enter-active {
        transition: all .5s ease;
    }

    /* 当离开的transition触发时正确应用，一秒后删除。（开始于离开状态） */
    /* .drop-leave {

    } */
    /* 当离开的transition触发时正确应用，当transition/animation结束时移除。 */
    .drop-leave-active {
        transition: all .3s ease;
    }
    .drop-leave-active {
        transform: translateY(-500px);
    }

    .dialog-wrap {
        position: fixed;
        width: 100%;
        height: 100%;
    }
    .dialog-cover {
        background: #000;
        opacity: .3;
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        /*bottom: 0;*/
        /*right: 0;*/

        width: 100%;
        height: 100%;
    }
    .dialog-content {
        width: 50%;
        position: fixed;
        max-height: 50%;
        overflow: auto;
        background: #fff;
        top: 20%;
        left: 50%;
        margin-left: -25%;
        z-index: 10;
        border: 2px solid #464068;
        padding: 2%;
        line-height: 1.6;
    }
    .dialog-close {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 20px;
        height: 20px;
        text-align: center;
        cursor: pointer;
    }
    .dialog-close:hover {
        color: #4fc08d;
    }
</style>



