<template>
<view :class="['flex-col', styles['page']]">
  <view :class="['flex-row', styles['group']]">
    <view :class="['flex-col', 'items-start', styles['header']]">
      <image src="../../assets/16532004499499396936.png" :class="[styles['image']]" @tap="onClickImage" />
    </view>
    <view :class="['flex-col', 'items-start', styles['section_1']]">
      <text :class="[styles['text']]">验证码</text>
      <text :class="[styles['text_1']]">已经发送到 +86 962 047-09-02</text>
    </view>
    <view :class="['flex-col', styles['group_1']]">
      <view :class="['flex-row']">
        <text :class="[styles['text_2']]">3</text>
        <text :class="[styles['text_3']]">4</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004445851075114.png"
          :class="[styles['image_1'], styles['image_2']]"
        />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004445851075114.png"
          :class="[styles['image_1']]"
        />
      </view>
      <view :class="['flex-col', 'items-center', styles['text-wrapper']]">
        <text :class="[styles['text_4']]">再次发送</text>
      </view>
    </view>
  </view>
</view>
</template>

<script>
import Taro from '@tarojs/taro';
import styles from './sms.module.scss';

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
  },
};
</script>