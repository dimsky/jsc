/**
 * 打包配置默认选项
 */
define(function(require, exports, module){

	return {
		
		dir: './',					//重新指定合并后文件的存放目录,
		uglify: false,				//开启代码压缩
		
		all: {
			name: 'index.js',		//重新指定合并后的文件名
			create: true			//生成
		},
		
		js: {
			name: 'js.js',			//重新指定合并后的文件名
			create: false,			//不生成
			sort: function(arr){	//自定义排序
				return arr;
			}
		},
		
		tmpl: {
			name: 'tmpl.js',		//重新指定合并后的文件名
			create: false			//不生成
		}
		
	};
	
});