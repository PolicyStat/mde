var verb = require('verb')

verb.task('readme', function () {
  verb.src('doc/src/README.md')
    .pipe(verb.dest('.'))
})
