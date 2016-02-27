import angular from 'angular';
import registerComponents from './components';
if (ON_TEST) {
  require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

registerComponents(ngModule);
