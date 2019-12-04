'use strict';

var registrationModule = angular.module("RegistrationModule", ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/Registration', { templateUrl: '/templates/courses.html', controller: 'CoursesController' });
        $routeProvider.when('/Registration/Courses', { templateUrl: '/templates/courses.html', controller: 'CoursesController' });
        $routeProvider.when('/Registration/Instructors', { templateUrl: '/templates/instructors.html', controller: 'InstructorsController' });
        $routeProvider.when('/Registration/Students', { templateUrl: '/templates/students.html', controller: 'StudentsController' });
        $routeProvider.when('/Registration/AGgrid', { templateUrl: '/templates/AGgrid.html', controller: 'AGGridController' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
    );