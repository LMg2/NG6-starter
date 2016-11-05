import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Championships from './championships/championships';
import Inscriptions from './inscriptions/inscriptions';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Championships,
  Inscriptions
])
  
.name;

export default componentModule;
