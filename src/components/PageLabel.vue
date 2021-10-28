<template lang="">
    <div class='labelCon'>
        <div class='label' v-for="(item, index) in labels" :key="item.key">
            <div class='text' @mouseenter='toggleSub(index, $event)' @mouseleave='toggleSub(index, $event)'>{{item.text}}</div>
        </div>
        <div @mouseenter='showSub = true' @mouseleave='showSub = false' v-if="showSub" class='sub' :style="{left: offsetLeft + 'px'}">
                <div v-for="(i, index) in subLabels" :key="i.text" class='subLabel'>{{i.text}}</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      labels: [
        {
          key: "front",
          text: "前端",
          sub: [
            {
              text: "js",
            },
            {
              text: "css",
            },
          ],
        },
        {
          key: "back",
          text: "后端",
          sub: [
            {
              text: "java",
            },
            {
              text: "php",
            },
          ],
        },
      ],
      showSub: false,
      subLabels: [],
      offsetLeft: 0,
    };
  },
  methods: {
    toggleSub(index, e) {
      if (e.type == "mouseenter") {
        this.showSub = true;
        this.subLabels = this.labels[index].sub;
        this.offsetLeft = e.target.offsetLeft;
      }
      if (e.type == "mouseleave") {
        this.showSub = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.labelCon {
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  .label {
    margin-right: 20px;
    height: 50px;
    line-height: 50px;
    .text {
      &:hover {
        color: #007fff;
        cursor: pointer;
      }
    }
  }
  .sub {
    width: 200px;
    height: 150px;
    border: 1px solid #e2e2e2;
    position: absolute;
    top: 50px;
    padding: 20px;
    display: flex;
    box-shadow: 2px 2px 1px #f0f0f0, -2px -2px 1px #f0f0f0;
    &Label {
      text-align: center;
      line-height: 30px;
      height: 30px;
      background-color: #f0f0f0;
      border-radius: 10px;
      padding: 1px 10px;
      margin-right: 10px;
      &:hover {
        cursor: pointer;
        color: #007fff;
      }
    }
  }
}
</style>