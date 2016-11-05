import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import 'angular-material/angular-material.css';
import 'material-design-icons/iconfont/material-icons.css';

angular.module('app', [
    uiRouter,
    angularAnimate,
    angularAria,
    angularMaterial,
    Common,
    Components
  ])
  .config(($locationProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    //$locationProvider.html5Mode(true).hashPrefix('!');

    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '700',
        'hue-1': '100',
        'hue-2': '600',
        'hue-3': 'A100'
      })
      .accentPalette('green', {
        'default': '600', 
        'hue-1': '100', 
        'hue-2': '600',
        'hue-3': 'A100'
      })
      .backgroundPalette('grey', {
        'default': '300'
      });
  })

.component('app', AppComponent);
