var verb = require('verb')

verb.task('default', function () {
  verb.src('doc/src/README.md')
    .pipe(verb.dest('.'))
})
