<script>
    module.exports = {
        props: {},


        data: function () {
            return {}
        },


        mounted: function () {


        },

        created: function (e) {

        },


        methods: {},

        computed: {}
    }
</script>


<template>
    <div class="lr-panel">

        <div class="panel panel-default">


            <slot name="header">啊上的发上的</slot>


            <slot></slot>

            <div class="panel-body" style="background: #20d8f0">
                <slot name="foot"></slot>
            </div>

        </div>

    </div>
</template>


<style scoped>
    /*css 注意css 只作用域当前组件, 在写的时候注意名字 不要和其他组件重复, 推荐只用行内css*/
    .lr-panel {

    }

    .lr-panel .panel-body {
        padding: 10px;

    }


</style>