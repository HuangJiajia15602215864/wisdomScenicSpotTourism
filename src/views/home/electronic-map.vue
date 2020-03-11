<template>
  <div>
    <div>this is a vue file called ulTransition.vue;</div>
    <hr />
    <div class="flex-div">
      <div class="div">
        <ul ref="ul" class="showall:true">
          <li v-for="i in testnum" :key="i">测试数据i</li>
        </ul>
      </div>
      <div>
        <button @click="toggle">收缩/放出</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  namespace: "ulTransition",
  data() {
    return {
      showli: false,
      testnum: 0,
      ulheight: 0
    };
  },
 
  mounted() {
    this.testnum = Math.ceil(Math.random() * 10 + 10);
    console.log(this.testnum);
 
    this.$nextTick(e => {
      console.log("开始了！");
      this.ulheight = this.$refs.ul.offsetHeight + "px";
      this.$refs.ul.style.height = this.ulheight;
    });
  },
  methods: {
    toggle() {
      if (this.showli) {
        this.$refs.ul.style.height = this.ulheight;
      } else {
        this.$refs.ul.style.height = 0;
      }
      this.showli = !this.showli;
    }
  }
};
</script>
<style scoped>
.flex-div {
  width: 100%;
  display: flex;
}
.flex-div .div {
  flex: 1;
  text-align: center;
  border:1px solid green;
}
li {
  width: 100px;
  background-color: #999;
  margin-top: 1px;
}
ul {
  background-color: #f2f2f2;
  transition: all 0.5s;
  overflow: hidden;
  border: 1px solid red;
}
</style>