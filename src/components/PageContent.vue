<template lang="">
    <div class='PageContentCon'>
        <div class='typeCon'>
            <div class='type' v-for="(item, index) in types" :key="item.key">{{item.text}}</div>
        </div>
        <div class='gap'></div>
        <div class='list'>
            <content-card v-for="(item, index) in contents" :key="item.id" :content="item"></content-card>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      types: [
        {
          key: "hots",
          text: "热门",
        },
        {
          key: "news",
          text: "最新",
        },
        {
          key: 'lists',
          text: '热榜'
        }
      ],
      contents: [
          {
              id: 1,
              author: 'z',
              title: '如何评价抖音前端开源的Semi Design?',
              content: '注意：对于很多元素来说，如果没有设置样式，轮廓是不可见的。因为样式（style）的默认值是 none。但 input 元素是例外，其样式默认值由浏览器决定',
              date: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
              module: '前端',
              pic: 'content_pic.jpg'
          },
          {
              id: 2,
              author: 'x',
              title: 'x say'
          }

      ]
    };
  },
};
</script>
<style lang="less" scoped>
.PageContentCon {
  height: 100%;
  background-color: #ffffff;

  .gap{
    width: 100%;
    height: 1px;
    background-color: #e2e2e2;
  }
  .typeCon {
    width: 500px;
    display: flex;
    padding: 20px;
    .type{
      margin-right: 20px;
      display: flex;
      align-items: center;
      position: relative;
      &::after{
        content: '';
        width: 1px;
        height: 15px;
        background-color: #e2e2e2;
        position: relative;
        left: 10px;
      }
      &:hover {
        cursor: pointer;
        color: #007fff;
      }
      &:last-child{
        &::after{
          content: none;
        }
      }
    }
  }
}
</style>