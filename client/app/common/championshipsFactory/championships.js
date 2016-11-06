import angular from 'angular';
import championshipsFactory from './championships.factory';

let championshipsModule = angular.module('championshipsFactory', [])

.factory('championshipsFactory', championshipsFactory)

.name;

export default championshipsModule;
