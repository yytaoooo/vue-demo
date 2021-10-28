<template lang="">
    <div>
        {{content.author}}：{{content.title}}
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: Object
        }
    }
}
</script>
<style lang="less">
    
</style>