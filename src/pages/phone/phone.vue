<template>
  <view :class="['flex-col', styles['page']]">
    <view :class="['flex-row', styles['group']]">
      <!-- <view :class="['flex-col', 'items-start', styles['header']]">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004434234997126.png"
          :class="[styles['image']]" @tap="onClickImage" />
      </view> -->
      <view :class="['flex-col', 'items-start', styles['text-wrapper']]">
        <text :class="[styles['text']]">登录您的账户</text>
      </view>
      <view :class="['flex-col', styles['group_1']]">
        <view :class="['justify-between', styles['section_1']]">
          <view :class="['flex-row']">
            <input :class="[styles['text_1']]" type="number" placeholder="账号" v-model="info.phone" />
          </view>
        </view>
        <view :class="['justify-between', styles['section_1']]">
          <view :class="['flex-row']">
            <input :class="[styles['text_1']]" type="password" placeholder="密码" v-model="info.password" />
          </view>
        </view>
        <view :class="['flex-col', 'items-center', styles['button']]" @tap="onClickView_5">
          <text :class="[styles['text_2']]">确认</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import styles from "./phone.module.scss";
import { login } from "../../servers/api/login";

export default {
  components: {},
  data() {
    return {
      styles,
      info: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    onClickImage() {
      Taro.navigateBack();
    },
    onClickView_5() {
      // Taro.navigateTo({ url: '/pages/sms/sms' });
      if (this.info.phone == "" || this.info.password == "") {
        Taro.showToast({
          title: "参数不能为空！",
          icon: "error",
          duration: 2000,
        });

        return;
      }

      login({
        phone: this.info.phone,
        sms: this.info.password,
      })
        .then((res) => {
          console.log(res)
          Taro.setStorage({
            key: "phone",
            data: this.info.phone,
          });

          Taro.navigateBack();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>