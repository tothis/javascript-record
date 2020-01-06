require.config({
    // 设置的基本路径
    baseUrl: '/static/',

    // 为文件或文件夹设置一个映射关系
    paths: {
        'jquery': 'https://cdn.staticfile.org/jquery/3.3.1/jquery',
        'lib': '/js/lib', // 因为设置了baseUrl 所以这里的位置实际上是/static/js/lib

        // 为模块设置配置信息 在模块内可通过module.config()获取
        config: {
            'lib/moduleA': {
                label: 'moduleA'
            }
        }
    }
});

require(function(require, exports, module){
    // CommonJs形式的模块定义
    var label = module.config().label; // -->moduleA
});
