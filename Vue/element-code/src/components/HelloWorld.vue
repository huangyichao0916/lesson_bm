<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button 
    types="primary" 
    round 
    circle
    @click="doClick"
    >
      默认按钮
    </el-button>
  </div>
</template>

<script>
import ElButton from './ElButton';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    ElButton 
  },
  methods:{
    doClick(){
      console.log(123)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
