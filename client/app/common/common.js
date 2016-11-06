import angular from 'angular';
import navbar from './navbar/navbar';
import championships from './championshipsFactory/championships';
import inscriptionsAPI from './inscriptionsAPI/inscriptionsAPI';
import './common.scss';

let commonModule = angular.module('app.common', [
  navbar,
  championships,
  inscriptionsAPI
])

.name;

export default commonModule;
