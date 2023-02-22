<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button class="search-btn" slot="title" type="info" size="small" round icon="search">搜索</van-button>
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 频道列表 -->
    <!--
      通过 v-model 绑定当前激活标签对应的索引值，默认情况下启用第一个标签
      通过 animated 属性可以开启切换标签内容时的转场动画
      通过 swipeable 属性可以开启滑动切换标签页
     -->
    <van-tabs class="channel-tabs" swipeable>
      <van-tab title="推荐">
        <van-cell class="article-item">
          <div slot="title" class="title van-multi-ellipsis--l2">千山万水、依山傍水、青山绿水、 </div>
          <div slot="label">
            <div class="cover-wrap">
              <div class="cover-item">
                <van-image class="cover-item-img" fit="cover" :src="img" />
              </div>
            </div>
            <div class="label-info-wrap">
              <span>温澜潮生</span>
              <span>评论</span>
              <span>{{ "2023-02-12" | relativeTime }}</span>
            </div>
          </div>
        </van-cell>
        <van-cell class="article-item">
          <div slot="title" class="title van-multi-ellipsis--l2">
            奇山异水、高山流水、跋山涉水、 </div>
          <div slot="label">
            <div class="cover-wrap">
              <div class="cover-item">
                <van-image class="cover-item-img" fit="cover" :src="img1" />
              </div>
            </div>
            <div class="label-info-wrap">
              <span>傲视范儿</span>
              <span>评论</span>
              <span>{{ "2023-02-14" | relativeTime }}</span>
            </div>
          </div>
        </van-cell>
        <van-cell class="article-item">
          <div slot="title" class="title van-multi-ellipsis--l2">山高水远、山光水色、山清水秀、 </div>
          <div slot="label">
            <div class="cover-wrap">
              <div class="cover-item">
                <van-image class="cover-item-img" fit="cover" :src="img2" />
              </div>
            </div>
            <div class="label-info-wrap">
              <span>阿桃狸子</span>
              <span>评论</span>
              <span>{{ "2023-02-14" | relativeTime }}</span>
            </div>
          </div>
        </van-cell>
        <van-cell class="article-item">
          <div slot="title" class="title van-multi-ellipsis--l2">山穷水尽、山重水复、山高水长。 </div>
          <div slot="label">
            <div class="cover-wrap">
              <div class="cover-item">
                <van-image class="cover-item-img" fit="cover" :src="img3" />
              </div>
            </div>
            <div class="label-info-wrap">
              <span>做我枕边人</span>
              <span>评论</span>
              <span>{{ "2023-02-23" | relativeTime }}</span>
            </div>
          </div>
        </van-cell>
        <van-cell class="article-item">
          <div slot="title" class="title van-multi-ellipsis--l2">崇山峻岭、连绵起伏、千山一碧、 </div>
          <div slot="label">
            <div class="cover-wrap">
              <div class="cover-item">
                <van-image class="cover-item-img" fit="cover" :src="img4" />
              </div>
            </div>
            <div class="label-info-wrap">
              <span>我有难以割舍的温柔*</span>
              <span>评论</span>
              <span>{{ "2023-02-18" | relativeTime }}</span>
            </div>
          </div>
        </van-cell>
        <van-cell class="article-item">
          <div slot="title" class="title van-multi-ellipsis--l2">悬崖峭壁、孤峰突起、千峰万仞。 </div>
          <div slot="label">
            <div class="cover-wrap">
              <div class="cover-item">
                <van-image class="cover-item-img" fit="cover" :src="img5" />
              </div>
            </div>
            <div class="label-info-wrap">
              <span>花环少女</span>
              <span>评论</span>
              <span>{{ "2023-02-19" | relativeTime }}</span>
            </div>
          </div>
        </van-cell>
        <van-cell class="article-item">
          <div slot="title" class="title van-multi-ellipsis--l2">风平浪静、水平如镜、碧波荡漾、</div>
          <div slot="label">
            <div class="cover-wrap">
              <div class="cover-item">
                <van-image class="cover-item-img" fit="cover" :src="img6" />
              </div>
            </div>
            <div class="label-info-wrap">
              <span>相思染红柯</span>
              <span>评论</span>
              <span>{{ "2023-02-22" | relativeTime }}</span>
            </div>
          </div>
        </van-cell>
        <van-cell class="article-item">
          <div slot="title" class="title van-multi-ellipsis--l2">微波粼粼、汹涌澎湃、惊涛骇浪。</div>
          <div slot="label">
            <div class="cover-wrap">
              <div class="cover-item">
                <van-image class="cover-item-img" fit="cover" :src="img7" />
              </div>
            </div>
            <div class="label-info-wrap">
              <span>只因爱他所以白了满头华发</span>
              <span>评论</span>
              <span>{{ "2023-02-23" | relativeTime }}</span>
            </div>
          </div>
        </van-cell>
      </van-tab>
      <van-tab :title="channel.name" v-for="(channel, index) in channels" :key="index">
        <!-- 文章列表 -->
        <article-list ref="article-list" :channel="channel" />
        <!-- 文章列表 -->
      </van-tab>
      <div slot="nav-right" class="placeholder"></div>
      <div slot="nav-right" class="hamburger-btn" @click="isChennelEditShow = true">
        <i class="iconfont  icon-fenlei"></i>
      </div>
    </van-tabs>
    <!-- /频道列表 -->

    <!-- 频道编辑弹出层 -->
    <van-popup v-model="isChennelEditShow" closeable close-icon-position="top-left" position="bottom"
      :style="{ height: '100%' }">
      <channel-edit :my-channels="channels" :active="active" @update-active="onUpdateActive" />
    </van-popup>
    <!-- /频道编辑弹出层 -->
  </div>
</template>

<script>
// import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list'
import { mapState } from 'vuex'
import ChannelEdit from '@/views/home/components/channel-edit'
import img from '@/assets/1.png'
import img1 from '@/assets/2.png'
import img2 from '@/assets/3.png'
import img3 from '@/assets/4.png'
import img4 from '@/assets/5.png'
import img5 from '@/assets/6.png'
import img6 from '@/assets/7.png'
import img7 from '@/assets/8.png'
import img8 from '@/assets/9.png'
import img9 from '@/assets/10.png'

// import { getItem } from '@/utils/storage'

export default {
  name: 'HomeIndex',
  components: {
    ArticleList,
    ChannelEdit
  },
  props: {},
  data () {
    return {
      img,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      active: 0,
      channels: [
        {
          id: 1,
          name: 'C#',
          list: []
        }, {
          id: 2,
          name: 'java',
          list: []

        }, {
          id: 3,
          name: 'phthon',
          list: []

        }, {
          id: 4,
          name: 'php',
          list: []

        },
        {
          id: 5,
          name: 'javascript',
          list: []

        },
        {
          id: 6,
          name: 'node.js',
          list: []

        }
      ], // 频道列表
      isChennelEditShow: false // 控制编辑频道弹出层的显示状态
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    this.$store.dispatch('getlist')
    this.channels.forEach((item, index) => {
      this.channels[index].list = this.$store.state.list
    })
    console.log(this.channels)
  },
  mounted () {
  },
  methods: {
    async loadChannels () {
    //   try {
    //     // const { data } = await getUserChannels()
    //     // this.channels = data.data.channels
    //     let channels = []

      //     if (this.user) {
      //       // 已登录，请求获取用户频道列表
      //       const { data } = await getUserChannels()
      //       channels = data.data.channels
      //     } else {
      //       // 未登录，判断是否有本地的频道列表数据
      //       const localChannels = getItem('TOUTIAO_CHANNELS')
      //       //    有，拿来使用
      //       if (localChannels) {
      //         channels = localChannels
      //       } else {
      //         //    没有，请求获取默认频道列表
      //         const { data } = await getUserChannels()
      //         channels = data.data.channels
      //       }
      //     }

      //     this.channels = channels
      //   } catch (err) {
      //     this.$toast('获取频道数据失败')
      //   }
      // },

      // onUpdateActive (index, isChennelEditShow = true) {
      //   // 更新激活的频道项
      //   this.active = index

    //   // 关闭编辑频道弹层
    //   this.isChennelEditShow = isChennelEditShow
    }
  }
}
</script>

<style scoped lang="less">
.icon-fenlei {
  font-size: 40px;
}

.home-container {
  .van-nav-bar__title {
    max-width: unset;
  }

  .search-btn {
    width: 440px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;

    .van-icon {
      font-size: 32px;
    }
  }

  /deep/ .channel-tabs {
    .van-tab {
      border-right: 1px solid #edeff3;
      min-width: 200px;
      font-size: 30px;
      color: #777777;
    }

    .van-tab--active {
      color: #333333;
    }

    .van-tabs__nav {
      padding-bottom: 0;
    }

    .van-tabs__line {
      bottom: 8px;
      width: 31px !important;
      height: 6px;
      background-color: #3296fa;
    }

    .placeholder {
      flex-shrink: 0;
      width: 66px;
      height: 82px;
    }

    .hamburger-btn {
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 82px;
      background-color: #fff;
      background-color: rgba(255, 255, 255, 0.902);

      i.toutiao {
        font-size: 33px;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 1px;
        height: 58px;
        background-image: url(~@/assets/gradient-gray-line.png);
        background-size: contain;
      }
    }
  }
}

.article-item {
  .title {
    font-size: 32px;
    color: #3a3a3a;
  }

  .van-cell__title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .van-cell__value {
    flex: unset;
    width: 232px;
    height: 146px;
    padding-left: 25px;
  }

  .right-cover {
    width: 100%;
    height: 146px;
  }

  .label-info-wrap span {
    font-size: 22px;
    color: #b4b4b4;
    margin-right: 25px;
  }

  .cover-wrap {
    display: flex;
    padding: 30px 0;

    .cover-item {
      flex: 1;
      height: 146px;

      &:not(:last-child) {
        padding-right: 4px;
      }

      .cover-item-img {
        width: 100%;
        height: 146px;
      }
    }
  }
}
</style>
