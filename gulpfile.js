var gulp = require('gulp');

gulp.task('js', function () {
   gulp.src(['\_js/app.js'])
       .pipe(concat('app-full.js'))
       .pipe(gulp.dest('\_includes/generated/'))
       .pipe(rename({ extname: '.min.js' }))
       .pipe(uglify())

       .pipe(insert.wrap('{ % raw %}', '{ % endraw %}'))

       .pipe(gulp.dest('\_includes/generated/'));
});