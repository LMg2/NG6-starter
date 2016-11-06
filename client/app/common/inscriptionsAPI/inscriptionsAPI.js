import angular from 'angular';
import inscriptionsAPIFactory from './inscriptionsAPI.factory';

let inscriptionsAPIModule = angular.module('inscriptionsAPI', [])

.factory('inscriptionsAPI', inscriptionsAPIFactory)

.name;

export default inscriptionsAPIModule;
