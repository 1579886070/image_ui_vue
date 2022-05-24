<template>
  <view :class="['flex-col', styles['page']]">
    <view :class="['flex-row', styles['group']]">
      <view :class="['justify-end', styles['header']]">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491798815122945.png"
          :class="[styles['image']]"
        />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491798797548292.png"
          :class="[styles['image_1']]"
        />
      </view>
      <view :class="['flex-col', 'items-start', styles['section_1']]">
        <text :class="[styles['text']]">用户名</text>
        <text :class="[styles['text_1']]">5 members</text>
      </view>
      <view :class="['flex-col', styles['line-tabs']]">
        <view :class="['flex-col', styles['section_2']]">
          <view :class="['flex-row', styles['group_1']]">
            <text :class="[styles['text_2']]">点赞</text>
            <text :class="[styles['text_3']]">收藏</text>
            <text :class="[styles['text_4']]">下载</text>
          </view>
          <view :class="['flex-col', 'items-start', styles['divider']]">
            <view :class="[styles['section_3']]"><!--*--></view>
          </view>
        </view>
        <view :class="[styles['grid']]">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491785906585828.png"
            :class="[styles['grid-item']]"
            @tap="onClickImage_2"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491786148864800.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491787602498689.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491787983538813.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491788586474543.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491789893574670.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491789976166230.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491791022409908.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491791875804146.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491793720442481.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491793744875875.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491794329526222.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491796173762845.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491796225289226.png"
            :class="[styles['grid-item']]"
          />
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16530491796790553063.png"
            :class="[styles['grid-item']]"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import Taro from '@tarojs/taro';
  import styles from './me.module.scss';

  export default {
    components: {},
    data() {
      return {
        styles,
      };
    },
    methods: {
      onClickImage_2() {
        Taro.navigateTo({ url: '/pages/info/info' });
      },
    },
  };
</script>