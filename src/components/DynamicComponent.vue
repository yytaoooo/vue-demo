<template lang="">
    <div>
        <button v-for="(btn, index) in btns" :key="btn" @click='cur = btn'>{{btn}}</button>
    </div>
    <div>
        <component :is="curComponent"></component>
    </div>
</template>
<script>
    import home from './home.vue'
    import page from './page.vue'
    import footer from './footer.vue'
    export default {
        data() {
            return {
                cur: 'home',
                btns: ['home', 'page', 'footer']
            }
        },
        computed: {
            curComponent() {
                return this.cur
            }
        },
        components: {
            home,
            page,
            footer
        },
    }
</script>
<style lang="">

</style>