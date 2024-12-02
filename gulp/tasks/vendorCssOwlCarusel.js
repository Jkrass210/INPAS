export const vendorCssOwlCarusel = () => {
  const modules = [
    'src/scss/owl.carousel.min.css',
    'src/scss/owl.theme.default.min.css',
  ];

  return app.gulp.src(modules)
    .pipe(app.gulp.dest('docs/css/'));
}