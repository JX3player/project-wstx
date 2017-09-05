var gulp = require('gulp');

gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:/PHP/WWW/project-wstx/"))
	})
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/PHP/WWW/project-wstx/css/"))
})
gulp.task("img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:/PHP/WWW/project-wstx/img/"))
})
gulp.task("html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("D:/PHP/WWW/project-wstx/"))
})
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/PHP/WWW/project-wstx/js/"))
})
gulp.task("font",function(){
	gulp.src("font/**")
	.pipe(gulp.dest("D:/PHP/WWW/project-wstx/font/"))
})
gulp.task("php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:/PHP/WWW/project-wstx/php"))
})
gulp.task("sass",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:/phpStudy/WWW/project-wstx/"))
})
gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("images/**/*",["images"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("font/**",["font"]);
	gulp.watch("php/*.php",["php"]);
	gulp.watch("scss/*.scss",["sass"]);
})




