<template>
  <div id="homebody">
    <el-row type="flex" justify="space-between">
      <el-col :lg="11" :md="9" :sm="9" :xs="24" class="leftContent">
        <div>
          <el-card v-for="item in contentlist" v-bind:key="item.id" shadow="hover" class="my-card">
            <el-row type="flex">
              <el-col :md="16" :sm="16">
                <div class="title">{{item.title}}</div>
                <div class="publishDate">
                  <i class="el-icon-date"></i>
                  {{item.date}}
                </div>
              </el-col>
              <el-col :md="8" :sm="8" class="contentImage">
                <el-image
                  v-if="item.url"
                  style="width: 150px; height: 130px; border-radius: 4px;"
                  :src="item.url"
                  :fit="fit"
                ></el-image>
                <el-image style="width: 150px; height: 130px; border-radius: 4px;" v-else>
                  <div slot="error">
                    <div class="el-image__error">未提供封面</div>
                  </div>
                </el-image>
              </el-col>
            </el-row>
            <el-button type="primary">阅读</el-button>
          </el-card>
        </div>
        <!-- // TODO:分页的跳转根据点击页码的不同达到更新获得不同数据 -->
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :pager-count="5"
          layout="prev, pager, next"
          :total="200"
        ></el-pagination>
      </el-col>
      <el-col :lg="5" :md="6" :sm="5" :xs="0">
        <div class="mycategories">
          <el-card class="categoriesCard">
            <div slot="header" class="clearfix">
              <span>不知道看什么点下面</span>
            </div>
            <div v-for="item in categoriesList" :key="item.id" class="categories-text item">
              <el-link><i class="el-icon-paperclip"></i> {{item.category}}</el-link>
            </div>
          </el-card>
        </div> 
      </el-col>
      <el-col :lg="7" :md="8" :sm="10" :xs="0">
        <!-- // TODO:右侧栏目的编写， -->
        <div class="calender">
          <el-calendar></el-calendar>
        </div>
      </el-col>
    </el-row>
    <footer class="copy-right">
      <span>©{{date}} Chinbor's Blog</span>
      <span>
        <el-link type="primary">蜀ICP备19032883号-1</el-link>
      </span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeBody",
  created() {
    // TODO:网络请求得到总数total(进行分页)和前10条数据(默认主页'/'展示第一页10条数据),
    // 因为只会调用一次，后续的请求都在watch中进行（可以观察路由的变化）
    // 需要得到 id(主键), title(文章标题), url(封面图片网络地址), date(发布日期)
    console.log("created");
  },
  watch: {
    // 为什么不用created，因为这个组件会被多次访问，但是created只会在第一次访问调用
    $route(to, from) {
      //监听路由是否变化
      let currentPage = parseInt(to.params.page);
      if (isNaN(currentPage)) {
        this.currentPage = 1;
      } else {
        this.currentPage = currentPage;
      }
      console.log(this.currentPage);
      // TODO:进行网络请求，根据当前页数进行请求，
      // 需要得到 id(主键), title(文章标题), url(封面图片网络地址), date(发布日期)
    }
  },
  data() {
    return {
      fit: "cover",
      date: new Date().getFullYear(),
      color: [
        'primary',
        'success',
        'warning',
        'danger',
        'info'
      ],
      currentPage: 0,
      contentlist: [
        {
          id: 1,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          id: 2,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url: ""
        },
        {
          id: 3,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          id: 4,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          id: 5,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          id: 6,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          id: 7,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          id: 8,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          id: 9,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          id: 10,
          title: "JavaScript数据结构与算法",
          date: "2020-05-09",
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        }
      ],
      categoriesList: [
        {
          id: 1,
          category: 'javascript' 
        },
        {
          id: 2,
          category: 'python'
        },
        {
          id: 3,
          category: 'c语言'
        },
        {
          id: 4,
          category: 'c++'
        }
      ]
    };
  },
  methods: {
    handleCurrentChange(currentPage) {
      // TODO:路由跳转
      if (currentPage !== 1) {
        this.$router.replace("/page/" + currentPage);
      } else {
        this.$router.replace("/");
      }
    },
    randomNum() {
      return this.color[Math.floor(Math.random() * 5)];
    }
  }
};
</script>

<style>
#homebody {
  margin-top: 100px;
}
.el-pagination {
  white-space: pre-wrap;
}

/* .el-pagination>.el-pager> li {
  margin: 0 1px;
} */
.my-card {
  /* border: 1px solid #ffffff; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
}
.title {
  font-size: 20px;
}
.publishDate {
  margin: 40px 0 35px 0;
  color: #909399;
}
.contentImage {
  display: flex;
  flex-direction: row-reverse;
}
.el-image__error {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #c0c4cc;
  vertical-align: middle;
  width: 150px;
  height: 130px;
}
.mycategories {
  /* background-color: #765432; */
  position: fixed;
  width: 18%;
  /* width: 100px;
  height: 100px; */
  /* width: 100px; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin-right: 10px;
}
/* .categoriesCard {
  color: #fff;
  background-color: #765432;
} */
.categories-text {
  font-size: 14px;
  margin-bottom: 5px;
}
.calender {
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin-right: 10px;
  /* left: 70%;
  right: 2%; */
  /* padding: 8px; */
  /* right: 1%; */
}
.el-calendar-table .el-calendar-day {
  height: auto;
}
.el-calendar__body {
  padding: none;
}
.copy-right {
  height: 20px;
  margin: 30px;
  text-align: center;
}
.copy-right > span {
  display: block;
  margin-bottom: 10px;
}
</style>