/**
 * Created by liaohui1080 on 2017/8/29.
 */



(function (window, factory) {
    if (typeof exports === 'object') {
        console.log('CommonJS')
        module.exports = factory();


    } else if (typeof define === 'function') {
        console.log('amd or cmd')

        //cmd 调用这个
        define(function (require, exports, module) {

            module.exports=factory()
        });


        //amd调用这个
        define(factory);


    } else {
        console.log('LRcomponents原生')

        window.LRcomponents = factory();

    }
})(this, function () {


    return function (path) {


        var paths = path || './';

        return {
            'lr-list': 'url:' + paths + '/list/component.vue',
            'lr-search': 'url:' + paths + '/search/component.vue',
            'lr-search-card': 'url:' + paths + '/search_card/component.vue',
            'lr-search-card2': 'url:' + paths + '/search_card/component.vue',
            'lr-panel': 'url:' + paths + '/panel/component.vue',
        }
    };



});



