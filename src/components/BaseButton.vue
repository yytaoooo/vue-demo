<template lang="">
        <button @click="$emit('clickHandler')">
            {{text}}
        </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
  emits: ["clickHandler"],
};
</script>
<style lang="less" scoped>
button {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #007fff;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #4594fc;
  }
}
</style>