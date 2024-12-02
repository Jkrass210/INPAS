export const vendorJsOwlCarusel = () => {
  const modules = [
    'src/js/jquery-3.6.0.min.js',
    'src/js/owl.carousel.min.js',
  ];

  return app.gulp.src(modules)
    .pipe(app.gulp.dest('docs/js/'));
}