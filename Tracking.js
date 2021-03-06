var React = require('react');
var ReactNative = require('react-native');
var {
  AdSupportIOS,
  Dimensions,
} = ReactNative;


module.exports = {
  getAdvertisingId(cb) {
    AdSupportIOS.getAdvertisingId(function(advertisingId) {
      cb(null, advertisingId);
    }, cb);
  },
  device: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
};
