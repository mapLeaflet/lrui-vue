/*
 * npm 和  brew 目录放在上层, 是的下层所有项目都可以使用
 * npm 和  brew 目录 不能放在单独文件夹里, 必须和项目目录平级才能运行
 *
 * */

const gulp = require("gulp"),
    connect = require('gulp-connect'),//服务器
    Proxy = require('gulp-connect-proxy'),//服务器端口扩展

    path = require('path');


//获取党建路径的上层目录, 以便于找到 npm库
const str = path.dirname(__dirname);


//页面要用的公共js..用join路径拼接
const npm = path.join(str, 'leaflet/node_modules');
const bower = path.join(str, 'leaflet/bower_components');
const localModules = path.join(str, 'leaflet/local_modules');
const buildModulesPath = path.join(str, 'leaflet/build/modules');


//公共的js库 和css库
gulp.task('modules', function (cb) {



});


//静态服务器
gulp.task('connect', function () {
    connect.server({
        root: ['./'],
        port: 7070,
        livereload: true,
        middleware: function (connect, opt) {

            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
        // middleware:function (connect,opt) {
        //     return[Proxy2('/server',{
        //         target: 'http://220.197.219.235:8089/YHPC/oneScreen/titleNum',
        //         // cookieDomainRewrite: { "unchanged.domain": "unchanged.domain", "old.domain": "new.domain", "*": "" }
        //         changeOrigin: true,
        //     })]
        //
        //
        // }
    });
});


