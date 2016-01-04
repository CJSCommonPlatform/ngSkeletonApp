//angular
//    .module('cpp-ui-spa-master.global.error-tracing',[
//    {
//      name:'cpp-ui-spa-master.global.error-tracing.traceError',
//      files:['app/components/global/error-tracing/error-tracing.service.js']
//    },
//    {
//      name:'cpp-ui-spa-master.global.error-tracing.exceptionHandler',
//      files:['app/components/global/error-tracing/error-handler.provider.js']
//    },
//    {
//      name:'cpp-ui-spa-master.global.error-tracing.errorLog',
//      files:['app/components/global/error-tracing/error-log.service.js']
//    }
//  ]);


angular
  .module('cpp-ui-spa-master.global.error-tracing',[
    'cpp-ui-spa-master.global.error-tracing.stacktraceService',
    'cpp-ui-spa-master.global.error-tracing.exceptionHandler',
    'cpp-ui-spa-master.global.error-tracing.errorLogService'
  ]);

