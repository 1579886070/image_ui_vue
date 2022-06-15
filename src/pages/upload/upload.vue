<template>
  <view :class="['flex-col', styles['page']]">
    <view :class="['flex-col', styles['group']]">
      <view :class="['flex-col', 'items-start', styles['header']]">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004434234997126.png"
          :class="[styles['image']]" @tap="onClickImage" />
      </view>
      <view :class="['flex-col', styles['group_1']]">
        <view :class="['flex-col', 'items-start', styles['text-wrapper']]">
          <input placeholder="标题" maxlength="10" :class="[styles['text']]" v-model="title" />
        </view>
        <view :class="['flex-col', styles['text-wrapper_1']]">
          <textarea placeholder="内容" maxlength="200" v-bind:autoHeight="true" :class="[styles['text_5']]"
            v-model="content" />
        </view>
      </view>
      <view :class="['justify-between', styles['group_2']]">
        <image :src="imageUrl" :class="[styles['image_1']]" @tap="onClickImage_1" />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16550062778643267049.png"
          :class="[styles['image_2']]" @tap="onClickImage_2" />
      </view>
      <view :class="['flex-col', 'items-center', styles['button']]" @tap="onClickView_4">
        <text :class="[styles['text_2']]">确认</text>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import styles from "./upload.module.scss";
import { upload, add } from "../../servers/api/home";

export default {
  components: {},
  data() {
    return {
      imageUrl: "",
      styles,
      title: "",
      content: "",
    };
  },
  methods: {
    onClickImage() {
      Taro.navigateBack();
    },
    onClickImage_1() {
      if (this.imageUrl != "") {
        Taro.previewImage({
          current: this.imageUrl,
          urls: [this.imageUrl],
        });
      }
    },
    onClickImage_2() {
      // TODO 上传页面
      Taro.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
        success: (res) => {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          // this.imageUrl = tempFilePaths;

          upload(res.tempFilePaths[0])
            .then((res) => {
              this.imageUrl = JSON.parse(res.data).url;
            })
            .catch((err) => { });
        },
      });
    },
    onClickView_4() {
      if (this.imageUrl == "") {
        Taro.showToast({
          title: "请上传图片！",
          icon: "error",
          duration: 2000,
        });

        return;
      }

      add({
        title: this.title,
        content: this.content,
        cover: this.imageUrl,
      })
        .then((res) => {
          Taro.navigateBack();
        })
        .catch((err) => {
          Taro.showToast({
            title: "上传失败！",
            icon: "error",
            duration: 2000,
          });
        });
    },
  },
};
</script>

