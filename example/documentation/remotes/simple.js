// Copyright IBM Corp. 2013,2017. All Rights Reserved.
// Node module: strong-remoting
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

'use strict';

// This helper adds methods to a module that we assume will be added to the remotes.
// TODO(schoon) - Make this _the_ API, not a "helper".
// TODO(schoon) - Document EVERYTHING
var helper = require('../../../').extend(module.exports);

/**
 * Returns a secret message.
 */
helper.method(getSecret, {
  returns: {name: 'secret', type: 'string'},
});
function getSecret(callback) {
  callback(null, 'shhh!');
}

/**
 * Takes a string and returns an updated string.
 */
helper.method(transform, {
  accepts: [{name: 'str',
    type: 'string',
    required: true,
    description: 'The value to update'}],
  returns: {name: 'str', type: 'string'},
  description: 'Takes a string and returns an updated string.',
});
function transform(str, callback) {
  callback(null, 'transformed: ' + str);
}
