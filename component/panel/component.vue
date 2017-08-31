<script>
    module.exports = {
        props: {
            auto: Boolean
        },


        data: function () {
            return {

                bodyHeight: 0


            }
        },


        mounted: function () {


            var self = this;


            //控制中间内容区域,自适应屏幕高度
            function bodyResize() {
                var windowHeight = window.innerHeight;
                var headerHeight = self.$refs.header.offsetHeight;
                var footHeight = self.$refs.foot.offsetHeight;


                var bodyHeight = windowHeight - headerHeight - footHeight - 2;


                self.$refs.body.style.height = String(bodyHeight + 'px');
            }



            //如果 auto 存在, 就启用 body区域自适应屏幕
            if (this.auto) {


                window.onresize = function () {
                    bodyResize()
                };

                bodyResize();

            }


        },


        methods: {},

        computed: {}
    }
</script>


<template>
    <div class="lr-panel">

        <div class="panel panel-default">

            <div ref="header">
                <slot name="header">啊上的发上的</slot>
            </div>

            <div ref="body" style="overflow-y: auto">

                <slot></slot>
            </div>

            <div ref="foot">
                <slot name="foot"></slot>
            </div>

        </div>

    </div>
</template>


<style scoped>
    /*css 注意css 只作用域当前组件, 在写的时候注意名字 不要和其他组件重复, 推荐只用行内css*/
    .lr-panel {

    }

    .lr-panel .panel-default {
        margin: 0;
    }

    .lr-panel .panel-body {
        padding: 10px;

    }


</style>