<template>
    <div>
        <li>
            {{title}}
            <button @click="$emit('remove')">remove</button>
        </li>
    </div>
</template>
<script>
export default {
    props: ['title'],
    emits: ['remove']
}
</script>
<style>
    
</style>