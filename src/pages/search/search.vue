<template>
  <view :class="['flex-col', styles['page']]">
    <view :class="['flex-row', styles['group_1']]">
      <view :class="['flex-row', styles['header']]">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004434234997126.png"
          :class="[styles['image']]" @tap="onClickImage" />
        <view :class="['flex-col', 'items-start', styles['section_1']]">
          <view :class="[styles['group']]">
            <!-- <text :class="[styles['text']]">|</text> -->
            <input type="text" placeholder="Search" :class="[styles['text_1']]"/>
          </view>
        </view>
        <text :class="[styles['text_2']]">搜索</text>
      </view>
      <view>
        <text :class="[styles['text_3']]">今日共更新资源10张.....</text>
      </view>

      <view :class="[styles['grid']]">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772205522876.png"
          :class="[styles['grid-item']]" @tap="onClickImage_1" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772207548369.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772200602440.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772204289283.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772203665303.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772200202976.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772209744382.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772203559475.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491772202721361.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491777341084434.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491778346467352.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491779130013908.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491779839490781.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491780397205204.png"
          :class="[styles['grid-item']]" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491783855142637.png"
          :class="[styles['grid-item']]" />
      </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
import styles from './search.module.scss';

export default {
  components: {},
  data() {
    return {
      styles,
    };
  },
  methods: {
    onClickImage() {
      Taro.navigateBack();
    },
    onClickImage_1() {
      Taro.navigateTo({ url: '/pages/info/info' });
    },
  },
};
</script>