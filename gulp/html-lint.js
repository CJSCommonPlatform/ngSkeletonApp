'user strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ lazy: true });

module.exports = function(config, log){
  gulp.task('html-lint', function () {
    var options = {
      tmplext: 'tpl.html',
      customtags: [],
      customattrs: [],
      relaxerror: [
        "The “details” element is not supported properly by browsers yet. It would probably be better to wait for implementations.",
        "Bad value “{{direction.position}}” for attribute “start” on element “ol”: Expected a minus sign or a digit but saw “{” instead.",
        "Bad value “{{ direction.type === 'instruction' ? 'a' : 'i'}}” for attribute “type” on element “ol”.",
        "Bad value “suspectsData.length === 1” for attribute “open” on element “details”.",
        "The “summary” attribute on the “table” element is obsolete. Consider describing the structure of the “table” in a “caption”  element or in a “figure” element  containing the “table”; or, simplify the structure of the “table” so that no description is needed."
      ],
      reportCheckstylePath: 'reports/html-angular-validate-report-checkstyle.xml',
      reportpath: 'reports/html-angular-validate-report.json',
      emitError: true,
      reportFn:function(fileFailures){
        for (var i = 0; i < fileFailures.length; i++) {
          var fileResult = fileFailures[i];
          $.util.log(fileResult.filepath);
          for (var j = 0; j < fileResult.errors.length; j++) {
            var err = fileResult.errors[j];
            if (err.line !== undefined) {
              $.util.log('[line' +err.line +', col: ' + err.col +'] ' +err.msg);
            } else {
              $.util.log(err.msg);
            }
          }
        }
      }
    };
    gulp.src(config.globs.templatesApp)
      .pipe($.arialinter({
        level: 'AA'
      }))
      .pipe($.htmlAngularValidate(options));
  });

}
