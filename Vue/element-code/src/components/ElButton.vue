<template>
    <button
    @click="handleClick"
    class="el-button"
    :class="[
        type?'el-button--'+type:'',
        {
            'is-round':round,
        }
    ]"
    >
        <slot></slot>
    </button>
</template>

<script>

export default {
    data(){
        return{
            tit:'hello',
        }
    },
    props:{
        type:{
            type: String,
            default: 'default'
        },
        round:Boolean,
        circle:Boolean
    },
    created(){//组件挂载
        console.log(this.type)
        console.log(this.tit)
    },
    methods:{
        handleClick(event){
            console.log(123456)
        }
    }
}
</script>

<style lang="stylus">

</style>