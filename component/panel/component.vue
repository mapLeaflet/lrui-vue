<script>
    module.exports = {
        props: {
            auto: Boolean,
        },


        data: function () {
            return {

                bodyHeight: 0


            }
        },


        mounted: function () {

            var self = this;


            //控制中间内容区域,自适应屏幕高度
            var bodyResize = function () {
                var windowHeight = window.innerHeight;
                var headerHeight = self.$refs.header.offsetHeight;
                var footHeight = self.$refs.foot.offsetHeight;


                self.bodyHeight = windowHeight - headerHeight - footHeight - 0;

                self.$refs.body.style.height = String(self.bodyHeight + 'px');

                self.$emit('body-height',self.bodyHeight)
                self.$emit('dom',self.$refs)

            };


            //如果 auto 存在, 就启用 body区域自适应屏幕
            if (this.auto) {


                window.onresize = function () {
                    bodyResize()
                };


                bodyResize();

            }


        },


        methods: {},

        computed: {},
        updated: function () {

        },
        destroyed: function () {

        }

    }
</script>


<template>
    <div class="lr-panel">

        <div class="panel panel-default">

            <div ref="header">
                <slot name="header"></slot>
            </div>

            <div ref="body" class="body" style="overflow-y: auto;">
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
        border-radius: 0;
        background: transparent;
        border: none;
    }

    .lr-panel .panel-body {
        padding: 10px;

    }

    .lr-panel .body {
        background: #ffffff;

    }


</style>