import angular from 'angular';
import uiRouter from 'angular-ui-router';
import inscriptionsComponent from './inscriptions.component';

let inscriptionsModule = angular.module('inscriptions', [
  uiRouter
])

.component('inscriptions', inscriptionsComponent)

.name;

export default inscriptionsModule;
