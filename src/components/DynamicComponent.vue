<template lang="">
    <div>
        <button v-for="(btn, index) in btns" :key="btn" @click='cur = btn'>{{btn}}</button>
    </div>
    <div>
        <component :is="curComponent"></component>
    </div>
    <modal title='test' :btnConfig='btnConfig' @clickHandler='handleClick' v-if="showModal">
        <template v-slot:con>
            <div class='content'>
                <div>123</div>
                <label>
                    checked:<input type='checkbox' />
                </label>
            </div>
        </template>
    </modal>
    <a-button type="primary" @click='() => {this.showModal = true}'>Primary Button</a-button>
</template>
<script>
    import home from './home.vue'
    import page from './page.vue'
    import footer from './footer.vue'
    import modal from './modal.vue'
    export default {
        data() {
            return {
                cur: 'home',
                btns: ['home', 'page', 'footer'],
                btnConfig: [
                    {
                        text: '确定',
                        action: 'confirm'
                    },
                    {
                        text: '取消',
                        action: 'cancel'
                    }
                ],
                showModal: true
            }
        },
        computed: {
            curComponent() {
                return this.cur
            },
        },
        methods: {
            handleClick(action) {
                console.log('action', action);
                if(action == 'cancel') {
                    this.showModal = false
                }
            }
        },
        components: {
            home,
            page,
            footer
        },
    }
</script>
<style scoped>
    .content {
        width: 500px;
        height: 250px;
    }
</style>