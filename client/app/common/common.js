import angular from 'angular';
import navbar from './navbar/navbar';
import championships from './championshipsFactory/championships';
import './common.scss';

let commonModule = angular.module('app.common', [
  navbar,
  championships
])

.name;

export default commonModule;
