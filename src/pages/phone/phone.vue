<template>
  <view :class="['flex-col', styles['page']]">
    <view :class="['flex-row', styles['group']]">
      <view :class="['flex-col', 'items-start', styles['header']]">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004434234997126.png"
          :class="[styles['image']]" @tap="onClickImage" />
      </view>
      <view :class="['flex-col', 'items-start', styles['text-wrapper']]">
        <text :class="[styles['text']]">请填写你的手机号码</text>
      </view>
      <view :class="['flex-col', styles['group_1']]">
        <view :class="['justify-between', styles['section_1']]">
          <view :class="['flex-row']">
            <image src="../../assets/16532004481996728026.png" :class="[styles['image_1'], styles['image_2']]" />
            <text :class="[styles['text_1']]">+86 962 04|</text>
          </view>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004445707820999.png"
            :class="[styles['image_1']]" />
        </view>
        <view :class="['flex-col', 'items-center', styles['button']]" @tap="onClickView_5">
          <text :class="[styles['text_2']]">确认</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
import styles from './phone.module.scss';

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
    onClickView_5() {
      Taro.navigateTo({ url: '/pages/sms/sms' });
    },
  },
};
</script>