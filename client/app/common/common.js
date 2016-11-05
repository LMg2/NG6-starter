import angular from 'angular';
import navbar from './navbar/navbar'

let commonModule = angular.module('app.common', [
  navbar
])

.name;

export default commonModule;
