<template lang="">
    <div class="mask">
        <div class="content">
            <div class="header">
                <p>{{title}}</p>
            </div>
            <div class="con" :style="{width:conWidth + 'px', height:conHeight + 'px'}">
                <slot name="con"></slot>
            </div>
            <div class="footer">
                <button v-for="(btn, index) in btnConfig" :key="btn.action" @click="this.$emit('clickHandler', btn.action)">{{btn.text}}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            conWidth: 0,
            conHeight: 0
        }
    },
    props: {
        title: {
            type: String
        },
        btnConfig: {
            type: Array,
        }
    },
    emits: ['clickHandler'],
    mounted() {
        this.conWidth = this.$slots.con()[0].el.offsetWidth
        this.conHeight = this.$slots.con()[0].el.offsetHeight
        console.log(this.$slots.con());
    },
}
</script>
<style>
    .content {
        width: auto;
        height: auto;
        background-color: #ffffff;
    }
    .mask {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .con {
        border-top: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        min-width: 500px;
        min-height: 100px;
    }
    .footer {
        display: flex;
        justify-content: center;
        margin: 10px 0px;
    }
    .footer button {
        margin-right: 10px;
    }
</style>