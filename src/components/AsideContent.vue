<template lang="">
    <div>
        1
    </div>
    <div>
        2
    </div>
</template>
<script>
export default {
    created() {
        console.log('run');
        console.log(this.$route);
        console.log(this.$router);
    }
}
</script>
<style lang="less" scoped>
    div {
        width: 200px;
        background-color: #fff;
        margin-bottom: 20px;
    }
</style>