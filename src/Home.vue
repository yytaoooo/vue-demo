<template>
    <div class='page'>
        <top-nav />
        <div class='gap'></div>
        <page-label />
        <div class='gap'></div>
        <div class='pageCon'>
          <div>
            <page-content></page-content>
          </div>
          <div>
            <aside-content></aside-content>
          </div>
        </div>
    </div>
</template>
<script>
import TopNav from "./components/TopNav.vue";
import a from './utils/calc.js'

export default {
  created() {
    a(1, 2)
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.page {
  margin: 0 auto;
}
.gap {
  height: 1px;
  width: 100%;
  background-color: #e2e2e2;
}
.pageCon{
  background-color: #f0efef;
  height: calc(100vh - 50px - 100px - 1px * 2);
  display: flex;
  justify-content: center;
  padding: 20px;
  div{
    &:last-child {
      margin-left: 20px;
    }
  }
}
</style>