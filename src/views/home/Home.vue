<template>
  <div id="home">
    <el-row type="flex" justify="space-between">
      <el-col :md="12" :sm="12" :xs="24" class="leftContent">
        <div>
          <el-card v-for='item in contentlist' v-bind:key="item.title" shadow="hover" class="my-card">
            <el-row type="flex">
              <el-col :md="16" :sm="16">
                <div class="title">{{item.title}}</div>
                <div class="publishDate">
                  <i class="el-icon-date"></i> {{item.date}}
                </div>
              </el-col>
              <el-col :md="8" :sm="8" class="contentImage">
                <el-image
                  v-if=item.url
                  style="width: 150px; height: 130px; border-radius: 4px;"
                  :src=item.url
                  :fit="fit"
                ></el-image>
                <el-image 
                  style="width: 150px; height: 130px; border-radius: 4px;"
                  v-else
                >
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
          :pager-count="5"
          layout="prev, pager, next" 
          :total="100"
        >
        </el-pagination>
      </el-col>

      <el-col :md="12" :sm="12" :xs="0">
        <!-- // TODO:右侧栏目的编写，搜索功能，同时列出所有搜索条目 -->
      </el-col>
    </el-row>
    <footer class='copy-right'>
        <span>©{{date}} Chinbor's Blog</span>
        <span><el-link type="primary">蜀ICP备19032883号-1</el-link></span>  
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      fit: "cover",
      date: new Date().getFullYear(),
      contentlist: [
        {
          title: '热爱三大是阿斯顿',
          date: '2019-5-22',
          url: ''
        },
        {
          title: '爱上大苏打三大三大撒旦',
          date: '2019-5-26',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          title: 'javascript的编写',
          date: '2019-5-29',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          title: '热爱三大是阿斯顿',
          date: '2019-5-22',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          title: '热爱三大是阿斯顿',
          date: '2019-5-22',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          title: '热爱三大是阿斯顿',
          date: '2019-5-22',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          title: 'javascript的编写',
          date: '2019-5-29',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
      ]
    };
  }
};
</script>

<style scoped>
#home {
  margin-top: 100px;
}
.el-pagination {
    white-space:pre-wrap;
}

/* .el-pagination>.el-pager> li {
  margin: 0 1px;
} */
.my-card {
  /* border: 1px solid #ffffff; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
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
  color: #C0C4CC;
  vertical-align: middle;
  width: 150px; 
  height: 130px;
}
.copy-right{
  height: 20px;
  margin: 30px;
  text-align: center;
}
.copy-right>span {
  display: block;
  margin-bottom: 10px; 
}
</style>