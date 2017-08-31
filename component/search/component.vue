

<script>
    module.exports = {
        props: {
            auto: Array
        },


        data: function () {
            return {

                searchVal: ''
            }
        },

        methods: {

            //显示搜索建议列表
            querySearch: function (queryString, cb) {
                var auto = this.auto;
                var results; //存储筛选后的建议列表的值

                //如果搜索文本框的值存在的话 就开始筛选数据
                if (queryString) {
                    results = auto.filter(function (auto) {

                        //返回筛选的数据
                        return auto.value.indexOf(queryString.toLowerCase()) === 0;
                    })
                }

                // 调用 callback 返回建议列表的数据
                cb(results);
            },

            //搜索建议选中行
            autoSelected: function (item) {


                this.$emit('auto-selected',item)
            },


            clear: function () {
//                console.log('清空')
                this.searchVal = '';

                this.$emit('clear')
            },

            search: function () {
//                console.log(this.searchVal);
                this.$emit('search',this.searchVal)
            },

            focus: function () {
//                console.log('ss');
                this.$emit('focus',this.searchVal)
            }

        },

        computed: {}
    }
</script>



<template>
    <div class="lr-earch">


        <div class="input-group">
            <div class="input-group-btn">
                <slot></slot>
            </div>


            <el-autocomplete
                    class="search-input"
                    v-model="searchVal"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    :trigger-on-focus="false"
                    @select="autoSelected"
                    @click.native="focus"
            ></el-autocomplete>


            <div class="input-group-btn">
                <button
                        @click="search"
                        class="btn btn-link search-btn"
                        type="button">
                    <i class="iconfont icon-sousuo-sousuo2"></i>
                </button>
                <button
                        @click="clear"
                        class="btn btn-link clear-btn"
                        type="button">
                    <i class="iconfont icon-close"></i>
                </button>
            </div>

        </div>


    </div>
</template>


<style scoped>
    /*css 注意css 只作用域当前组件, 在写的时候注意名字 不要和其他组件重复, 推荐只用行内css*/
    .lr-earch {
        padding: 0px 0px;

    }

    .input-group{
        margin: 0;
    }

    .lr-earch .btn {
        text-decoration: none;
        color: #a1a1a1;
    }

    .lr-earch .btn:hover {
        text-decoration: none;
        color: #3c9af8;
    }

    .lr-earch .clear-btn .iconfont{
        font-size: 13px;
        /*line-height: 20px;*/
    }


    .lr-earch .search-btn {
        border-right: 1px solid #e8e8e8;
    }

    .lr-earch .search-input {
        width: 100%;

    }

    .lr-earch .search-input .el-input__inner {

        height: 34px;
        line-height: 34px;
        border: none;
        border-radius: 0 !important;
        padding-left: 5px;
    }

</style>