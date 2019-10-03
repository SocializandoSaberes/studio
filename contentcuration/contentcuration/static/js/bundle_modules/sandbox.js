import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import Sandbox from '../sandbox/Sandbox.vue';

var VueIntl = require('vue-intl');

require('vuetify/dist/vuetify.min.css');
require('../../less/styles.less');

require('utils/translations');
const State = require('edit_channel/state');

var store = require('edit_channel/uploader/vuex/store');

Vue.use(VueIntl);
Vue.use(Vuetify, {
  rtl: window.isRTL,
  theme: {
    primary: colors.blue.base, // @blue-500
    primaryBackground: colors.blue.lighten5,
    greyBackground: colors.grey.lighten3,
    greenSuccess: '#4db6ac',
    topic: colors.grey.base,
    video: '#283593',
    audio: '#f06292',
    document: '#ff3d00',
    exercise: '#4db6ac',
    html5: '#ff8f00',
    slideshow: '#4ece90',
  },
});

window.preferences = {
  // license: 'Public Domain',
  // author: 'Default Author',
  //   provider: 'Default Provider',
  //   aggregator: 'Default Aggregator',
  copyright_holder: 'Default Copyright Holder',
  //   license_description: 'Default License Description',
  //   mastery_model: 'm_of_n',
  //   m_value: 2,
  //   n_value: 5,
};

State.openChannel({});

if (State.current_channel) {
  State.current_channel.fetch({ async: false });
}

// TODO: update this to use proper parent tree logic
State.currentNode = State.current_channel.get('main_tree');

new Vue({
  el: 'sandbox',
  store,
  ...Sandbox,
});
