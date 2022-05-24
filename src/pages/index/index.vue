<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <view class="btn">
      <nut-button type="primary" @click="sendRequest()">发送请求</nut-button>
    </view>
    <view class="btn">
      <nut-button type="primary" @click="sendRequest2()">发送请求post</nut-button>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { getResultData_servers, getResultData_servers2 } from '../../servers/servers'
export default {
  name: 'Index',
  components: {

  },
  methods: {
    sendRequest() {
      let params = "a=test"
      let b = {
        "a": "test2"
      }
      getResultData_servers(b).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

    },
    sendRequest2() {
      let b = {
        "a": "test2"
      }
      getResultData_servers2(b).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

    },
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
