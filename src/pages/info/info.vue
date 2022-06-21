<template>
  <view :class="['flex-col', styles['page']]">
    <view
      :style="{
        backgroundSize: 'cover',
        backgroundImage: 'url(' + info.cover + ')',
      }"
      :class="['flex-col', styles['section_1']]"
    >
      <image
        src="../../assets/16532004499499396936.png"
        :class="[styles['image']]"
        @tap="onClickImage"
      />
      <view :class="['justify-end', styles['group']]">
        <!-- <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004434235040860.png"
          :class="[styles['image_1']]"
        />
        <text :class="[styles['text']]">10</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6283a57c5a7e3f0310ea3d0b/6284a8255d73580011b2a7b0/16532004439295739642.png"
          :class="[styles['image_1']]"  @tap="openImage(info.cover)"
        />
        <text :class="[styles['text_1']]">122</text> -->
        <image
          src="../../assets/search.png"
          :class="[styles['image_1']]"
          @tap="openImage(info.cover)"
        />
        <image
          src="../../assets/delete.png"
          :class="[styles['image_1']]"
          @tap="statusImage(infoId)"
        />
      </view>
    </view>
    <view :class="['flex-col', styles['group_1']]">
      <view :class="['flex-col', 'items-start']">
        <text :class="[styles['text_2']]">{{ info.title }}</text>
        <text :class="[styles['text_3']]">{{ info.createTime }}</text>
      </view>
      <text :class="[styles['text_4']]">
        {{ info.content }}
      </text>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import styles from "./info.module.scss";
import { getInfo, statusInfo } from "../../servers/api/home";

export default {
  components: {
    infoId: "",
  },
  created() {
    // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
    // 而不是频繁地调用此 API
    this.$instance = Taro.getCurrentInstance();
  },
  mounted() {
    // 获取路由参数
    console.log(this.$instance.router.params); // 输出 { id: 2, type: 'test' }
    this.infoId = this.$instance.router.params.id;
    this.getData(this.infoId);
  },
  data() {
    return {
      styles,
      info: {},
      cover: "",
    };
  },
  methods: {
    statusImage(id) {
      try {
        var phone = Taro.getStorageSync("phone");
        if (phone != "15974242040") {
          Taro.showToast({
            title: "无权限操作！",
            icon: "error",
            duration: 2000,
          });

          return;
        }
      } catch (e) {
        // Do something when catch error
      }

      Taro.showModal({
        title: "确定删除内容吗",
        cancelText: "取消",
        confirmText: "确认",
        success(res) {
          if (res.confirm) {
            statusInfo("?id=" + id).then((res) => {
              Taro.navigateBack();
            });
          }
        },
      });
    },
    onClickImage() {
      Taro.navigateBack();
    },
    openImage(cover) {
      Taro.previewImage({
        current: cover,
        urls: [cover],
      });
    },

    getData(id) {
      let params = {
        id: id,
      };

      getInfo(params)
        .then((res) => {
          console.log(res);
          this.info = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>