
exports.config = {
  baseUrl: 'http://0.0.0.0:9009',
  capabilities: {
    'browserName': 'chrome'
  },

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['**/*.prot.js']

};
