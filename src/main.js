require("jquery");
require("jquery-ui");

import * as angular from "angular";
import uiRouter from "angular-ui-router";
import HomeController from "./views/home/home.controller";
import timeline from "./components/timeline/timeline.directive";
import TimelineService from "./components/timeline/timeline.service";

console.log(HomeController.name);
export let app = angular.module("app", [
    'ui.router'
]);


app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: require('./views/home/home.html'),
        controller: HomeController.name,
        controllerAs: 'homeCtrl'
    });
    
    $urlRouterProvider.otherwise('/');
});


app.controller(HomeController.name, HomeController);
app.directive(timeline.name, timeline);
app.service(TimelineService.name, TimelineService);