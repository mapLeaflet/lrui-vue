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

            module.exports=factory(window.Mock)
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


    });


});
