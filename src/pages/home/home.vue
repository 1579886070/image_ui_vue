<template>
  <view :class="['flex-col', styles['page']]">
    <view :class="['flex-row', styles['group']]">
      <view :class="['justify-between', styles['header']]">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004434166149179.png"
          :class="[styles['image']]" @tap="onClickImage" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491798797548292.png"
          :class="[styles['image']]" />
      </view>
      <view :class="['flex-col', styles['group_1']]">
        <view :class="[styles['section_1']]">

        <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000"
          height="114">
          <nut-swiper-item>
            <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
          </nut-swiper-item>
        </nut-swiper>

        <!--*-->
        </view>
        <view :class="['flex-col', styles['group_2']]">
          <view :class="['flex-row', styles['group_3']]">
            <text :class="[styles['text']]">珍惜每一个</text>
            <text :class="[styles['text_1']]">当下</text>
          </view>
          <view :class="[styles['section_2']]">
            <!--*-->
          </view>
        </view>
      </view>
      <view :class="[styles['grid']]">
        <image v-for="item in listData" :src="item.cover" :class="[styles['grid-item']]" @tap="onClickImage_2(item.id)" />
      </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
import styles from './home.module.scss';
import { reactive, toRefs } from 'vue';
import { getList } from '../../servers/api/home'
export default {
  components: {},
  data() {
    return {
      styles,
      listData: []
    };
  },

  created() {
    this.sendList()
  },

  setup() {
    const state = reactive({
      page: 2,
    });
    return { ...toRefs(state) };
  },

  methods: {
    sendList() {
      getList().then(res => {
        console.log(res)
        this.listData = res
      }).catch(err => {
        console.log(err)
      })
    },
    onClickImage() {
      Taro.navigateTo({ url: '/pages/search/search' });
    },
    onClickImage_2(id) {
      Taro.navigateTo({ url: '/pages/info/info?id=' +  id});
    },
  },
};
</script>

<style lang="scss" scoped>
.nut-swiper-item {
  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
</style>
