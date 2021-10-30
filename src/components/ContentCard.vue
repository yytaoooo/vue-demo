<template lang="">
  <div class='contentCardCon' @mouseover='hoverEvent($event)' @mouseout='outEvent($event)'>
    <div class='contentCardConHeader'>
      <div class='author'>{{content.author}}</div>
      <div class='date'>{{content.date}}</div>
      <div class='module' data-key="module">{{content.module}}</div>
    </div>
    <div class='contentCardConCon'>
      <div class='l'>
        <div class='title'>
          {{content.title}}
        </div>
        <div class='con'>
          {{content.content}}
        </div>
      </div>
      <div class='r'>
        <img :src='content.pic' />
      </div>


    </div>
    <div class='contentCardConFooter'>
      <div>
        <img :src='browseImg' />
        <span data-key="browse">32131</span>
      </div>
      <div>
        <img :src='likesImg' />
        <span data-key="likes">312</span>
      </div>
      <div>
        <img :src='commentImg' />
        <span data-key="comment">3</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },
  data() {
    return {
      browseImg: "browse.png",
      likesImg: "likes.png",
      commentImg: "comment.png",
    };
  },
  methods: {
    hoverEvent(e) {
      switch (e.target.getAttribute("data-key")) {
        case "browse":
          this.browseImg = "browse_act.png";
          e.target.style.color = "#007fff";
          break;
        case "likes":
          this.likesImg = "likes_act.png";
          e.target.style.color = "#007fff";
          break;
        case "comment":
          this.commentImg = "comment_act.png";
          e.target.style.color = "#007fff";
          break;
        case "module":
          e.target.style.color = "#007fff";
          break;
        default:
          break;
      }
    },
    outEvent(e) {
      e.target.removeAttribute("style");
      switch (e.target.getAttribute("data-key")) {
        case "browse":
          this.browseImg = "browse.png";
          break;
        case "likes":
          this.likesImg = "likes.png";
          break;
        case "comment":
          this.commentImg = "comment.png";
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.contentCardCon {
  padding: 20px;
  border-bottom: 1px solid #e2e2e2;

  &Header {
    display: flex;
    margin-bottom: 20px;

    div {
      margin-right: 20px;
    }
  }

  &Con {
    width: 700px;
    display: flex;
    margin-bottom: 20px;

    .l {
      flex: 1;

      .title {
        margin-bottom: 10px;
      }

      .con {
        font-size: 10px;
      }
    }

    .r {
      margin-left: 20px;

      img {
        width: 200px;
        height: 100px;
      }
    }
  }

  &Footer {
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      width: 100px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #f7f5f5;
  }
}
</style>