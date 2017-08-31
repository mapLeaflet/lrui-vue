/**
 * Created by liaohui1080 on 2017/8/28.
 */



(function (window, factory) {
    if (typeof exports === 'object') {
        console.log('CommonJS')
        module.exports = factory(require('Mock'));


    } else if (typeof define === 'function') {
        console.log('amd or cmd')

        //cmd 调用这个
        define(function (require, exports, module) {

            module.exports = factory(window.Mock)
        });


        //amd调用这个
        define(factory(window.Mock));


    } else {
        console.log('原生')

        window.mockData = factory(window.Mock);

    }
})(this, function (Mock) {


    return new Mock.mock({

        'listData|1-10': [
            {
                'id|+1': 1,
                'name': /[a-z][a-z][a-z]/,
                'icon': 'glyphicon glyphicon-plus-sign'
            }
        ],


        'searchData': [
            {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
            {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
            {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
            {"value": "泷千家(天山西路店)", "address": "天山西路438号"},
            {"value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},
            {"value": "贡茶", "address": "上海市长宁区金钟路633号"},
            {"value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号"},
            {"value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号"},
            {"value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107"},
            {"value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号"},
            {"value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号"},
            {"value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号"},

        ]


    });


});
