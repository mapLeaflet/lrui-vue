## lr-ui 




-----

demo: [地图组件组合](https://mapleaflet.github.io/lrui-vue/demo/map_component_group.html)
demo: [组件事例](https://mapleaflet.github.io/lrui-vue/)

----


#### 文件目录说明:
    +component 存放组件目录
        -LRcomponents.js  是引用所有的组件, 并且在设置的时候,可以修改默认引入路径
    +demo 存放演示文件
    +module demo文件里所依赖的文件
    +server_data 用mock.js 生成的演示数据




#### 组件调用事例:

    

    <script src="../module/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../module/vue.min.js"></script>
    <script src="../module/http-vue-loader/httpVueLoader.js"></script> 加载.vue单文件的 库
    <script src="../module/element-ui/lib/index.js"></script>  依赖的 elemUI库
    <script src="../component/LRcomponents.js"></script>  非必须,如果想一次引入所有的库,可以用这个,否则可以不用
    
        //设置 vue单文件加载器
        Vue.use(httpVueLoader); 
        new Vue({
            el: '#app',
            
            //一次加载所有的组件
            components: LRcomponents('../component'),  
            
            //单个组件加载
            components: {
            '组件名字': 'url:组件路径'
            }
    
        })