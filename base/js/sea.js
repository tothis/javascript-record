seajs.config({
    // 设置路径 方便跨目录调用
    paths: {
        arale: 'https://a.alipayobjects.com/arale',
        jquery: 'https://a.alipayobjects.com/jquery'
    },
    // 设置别名 方便调用
    alias: {
        class: 'arale/class/1.0.0/class',
        jquery: 'jquery/jquery/1.10.1/jquery'
    },
    // 变量配置
    vars: {
        locale: 'zh-cn'
    },
    // 提前加载并初始化好指定模块 等到use时才用到
    preload: "a"
});
