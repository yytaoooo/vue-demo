<template lang="">
    <div class='PageContentCon'>
        <div class='typeCon'>
            <div v-for="(item, index) in types" :key="item.key">{{item.text}}</div>
        </div>
        
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
      ],
      contents: [
          {
              id: 1,
              author: 'z',
              title:"z say"
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
  padding: 20px;
  background-color: #ffffff;

  .typeCon {
    width: 500px;
    display: flex;
  }
}
</style>