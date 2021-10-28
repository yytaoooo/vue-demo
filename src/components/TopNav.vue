<template lang="">
    <div class='content'>
        <a href='https://www.baidu.com'>
            <img src='.././assets/logo.png'/>
        </a>
        <nav>
            <a v-for="(item, idx) in navs" :key="item.key" :href='item.path'>{{item.text}}</a>
        </nav>
        <div class='search'>
            <base-search text='探索' v-model:input_val='search_text' @searchHandler='search'></base-search>
        </div>
        <div class='btn'>
            <base-button text="创作者中心" @clickHandler='goCreator'></base-button>
        </div>
        <div class='btn'>
            <base-button text="登录" @clickHandler='login'></base-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      search_text: "",
      navs: [
        {
          key: "home",
          text: "首页",
          path: "https://www.baidu.com",
        },
        {
          key: "hot",
          text: "沸点",
          path: "",
        },
        {
          key: "news",
          text: "资讯",
          path: "",
        },
        {
          key: "activity",
          text: "活动",
          path: "",
        },
      ],
    };
  },
  methods: {
    login() {
      console.log("login");
    },
    search() {
      console.log("search", this.search_text);
    },
    goCreator() {
      console.log("go");
    },
  },
};
</script>
<style scoped lang='less'>
.content {
  width: calc(100% - 2 * 20px);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  nav {
    a {
      text-decoration: none;
      color: #000000;
      cursor: pointer;
      &:hover {
        color: #007fff;
      }
    }
  }
  a {
    margin-right: 20px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .search {
    width: 200px;
    height: 50px;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
  .btn {
    width: 100px;
    height: 50px;
    margin-right: 20px;
  }
}

</style>