<template>
    <div class="lr-list">


        <slot name="header" >
            <!--头部--> </slot>
        <ul class="list-group">

            <div v-if="searchShow" class="list-group-item">

                <input v-model="searchVal" class="form-control" type="text" :placeholder="placeholder">

            </div>


            <div class="list-group-item" v-if="items.length<=0">没有数据...</div>

            <slot v-for="item in itemsData" :row="item">

                <!--默认列表模板, 如果slot 没有内容,就显示默认的-->
                <div class="list-group-item">

                    <button type="button" v-on:click="itemClick(item)"
                            class="btn btn-link">
                        {{ item.name }}
                    </button>


                    <button type="button" v-on:click="itemIconClick(item)"
                            class="btn btn-link pull-right">
                        <i :class="item.icon"></i>
                    </button>
                </div>


            </slot>

        </ul>

        <slot name="foot" >
            <!--底部-->


        </slot>
    </div>
</template>

<script>
    module.exports = {
        props: {
            items: {
                type: Array,
                required: true
            },
            search: Boolean,
            placeholder:{
                type:String,
                default:'请输入...'
            }
        },


        data: function () {
            return {

                searchVal: ''
            }
        },

        methods: {


            itemClick:function (item) {

                this.$emit('item',item);
            },


            itemIconClick:function (item) {

                this.$emit('item-icon',item);
            }
        },

        computed: {

            //如果 props 的 search 等于true 就显示搜索框
            searchShow: function () {
                return this.search ? true : false;
            },

            //筛选搜索框输入的数据
            itemsData: function () {

                var searchVal = this.searchVal;
                var items = this.items;


                return items.filter(function (row) {

                    return String(row.name).indexOf(searchVal) != -1

                })
            },


        }
    }
</script>

<style  scoped>
    /*css 注意css 只作用域当前组件, 在写的时候注意名字 不要和其他组件重复, 推荐只用行内css*/
    .lr-list .list-group {

        margin-bottom: 0;
        border-radius: 0;
    }

    .lr-list .list-group .list-group-item {


        border-radius: 0;
        border-right: none;
        border-left: none;
    }


    .lr-list .list-group .btn {
        padding: 0;
    }

    .lr-list .list-group .list-group-item:hover {
        background: #f9f9f9
    }
</style>