<script>
    module.exports = {
        props: {
            body: {
                type:Boolean,
                default:true
            },
            bottom:Boolean,
            top:Boolean,

        },


        data: function () {
            return {

            }
        },


        mounted:function () {

            if(this.bottom){
                this.$refs.body.offsetTop=String(this.$refs.header.offsetHeight+'px')
            }else if(this.top){
                this.$refs.body.style.top=String(-(this.$refs.body.offsetHeight-1)+'px')
            }else{
                this.$refs.body.offsetTop=String(this.$refs.header.offsetHeight+'px')
            }

        },

        created:function (e) {

        },



        methods: {

        },

        computed: {

            //判断 显示那个 方向的 内容面板
            orientation:function () {
                if(this.bottom){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
</script>


<template>
    <div class="lr-search-card">

        <div class="panel panel-default">





            <div ref="header" class="panel-heading" style="background: #ffffff; padding: 5px;">
                <slot name="header" ></slot>
            </div>



            <!--orientation =true 就显示向下方向的面板-->
            <template v-if="orientation">

                <transition name="fade">
                    <div class="body bottom"  ref="body" v-show="body" >

                        <slot></slot>
                    </div>
                </transition>

            </template>


            <!--orientation =true 就显示向上方向的面板-->
            <template v-else>

                <transition name="fade">
                    <div class="body top" v-show="body" ref="body">
                        <slot></slot>
                    </div>
                </transition>

            </template>




        </div>

    </div>
</template>


<style scoped>
    /*css 注意css 只作用域当前组件, 在写的时候注意名字 不要和其他组件重复, 推荐只用行内css*/
    .lr-search-card {

        position: relative;
    }


    .lr-search-card .panel-default{
        margin: 0;
    }

    .lr-search-card .panel-body {
        /*border-top: 1px solid #ddd;*/
    }

    .lr-search-card .panel-heading {
        border-bottom: none;
    }

    .lr-search-card .body {
        position: absolute;
        left: 0;
        min-height: 50px;
        background: #ffffff;
        border: 1px solid #ddd;
        width: 100%;
    }



    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
    {
        opacity: 0
    }

</style>