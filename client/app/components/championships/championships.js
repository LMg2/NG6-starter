import angular from 'angular';
import uiRouter from 'angular-ui-router';
import championshipsComponent from './championships.component';

let championshipsModule = angular.module('championships', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('app.championships', {
      url: '/championships',
      component: 'championships'
    });
})


.component('championships', championshipsComponent)

.name;

export default championshipsModule;
