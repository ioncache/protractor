var env = require('./environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,

  // Spec patterns are relative to this directory.
  suites: {
    okspec: 'suites/ok_spec.js',
    okmany: ['suites/ok_spec.js', 'suites/ok_2_spec.js'],
    failingtest: 'suites/always_fail_spec.js'
  },

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,
};
