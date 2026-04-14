const gulp = require("gulp");
const browserSync = require("browser-sync");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");

gulp.task("server", function () {
    browserSync.init({ server: { baseDir: "dist" } });
    gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
    return gulp
        .src("src/css/style.css")
        .pipe(autoprefixer({ overrideBrowserslist: ["last 2 versions"], cascade: false }))
        .pipe(gulp.dest("dist/css"))
        .pipe(rename({ suffix: ".min" }))
        .pipe(cleanCSS({ compatibility: '*', level: 1, rebase: false }))
        .pipe(gulp.dest("dist/css")) 
        .pipe(browserSync.stream());
});

gulp.task("html", function () {
    return gulp
        .src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

gulp.task("scripts", function () {
    return gulp
        .src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task("icons", function () {
    return gulp
        .src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task("images", function () {
    return gulp
        .src("src/img/**/*.{png,jpg,jpeg,gif,svg}")
        .pipe(
            imagemin([
                mozjpeg({ quality: 80, progressive: true }),
                pngquant({ quality: [0.65, 0.8], speed: 4 }),
                imagemin.svgo({ plugins: [{ removeViewBox: false }, { cleanupIDs: false }] }),
                imagemin.gifsicle({ interlaced: true }),
            ], { verbose: true, silent: false })
        )
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

gulp.task("watch", function () {
    gulp.watch("src/css/style.css", gulp.parallel("styles"));
    gulp.watch("src/*.html", gulp.parallel("html"));
    gulp.watch("src/js/**/*.js", gulp.parallel("scripts"));
    gulp.watch("src/icons/**/*", gulp.parallel("icons"));
    gulp.watch("src/img/**/*", gulp.parallel("images"));
});

gulp.task(
    "default",
    gulp.series(
        gulp.parallel("styles", "scripts", "html", "icons", "images"),
        gulp.parallel("watch", "server")
    )
);

gulp.task(
    "build",
    gulp.series("styles", "scripts", "html", "icons", "images")
);