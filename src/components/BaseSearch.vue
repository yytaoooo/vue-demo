<template lang="">
    <div class="con">
        <input @keyup.enter="$emit('searchHandler')" :placeholder='text' type='text' :value='input_val' @input='$emit("update:input_val", $event.target.value)' />
        <div class='pic' @click='$emit("searchHandler")'>
            <img src="../assets/search.png" />
        </div>
    </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
    },
    input_val: {
        type: String,
        default: ''
    }
  },
  emits: ['update:input_val', 'searchHandler']
};
</script>
<style lang="less" scoped>
.con {
  width: 100%;
  height: 40px;
  background-color: #e6dbdb;
  display: flex;
  align-items: center;
  position: relative;
  input {
    width: 100%;
    min-width: 150px;
    height: 100%;
    border: none;
    background-color: #e6dbdb;
    padding-left: 10px;
    font-size: 20px;
    &:focus {
      outline: 1px solid #007fff;
    }
  }
  .pic {
    background-color: #e6dbdb;
    z-index: 1;
    position: absolute;
    right: 0;
    img {
      width: 35px;
      height: 35px;
    }
    &:hover{
        cursor: pointer;
    }
  }
}
</style>