'use strict';

var registrationModule = angular.module("RegistrationModule", ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/Registration', { templateUrl: '/templates/courses.html', controller: 'CoursesController' });
        $routeProvider.when('/Registration/Courses', { templateUrl: '/templates/courses.html', controller: 'CoursesController' });
        $routeProvider.when('/Registration/Instructors', { templateUrl: '/templates/instructors.html', controller: 'InstructorsController' });
        $routeProvider.when('/Registration/Students', { templateUrl: '/templates/students.html', controller: 'StudentsController' });
        $routeProvider.when('/Registration/vendordata', { templateUrl: '/templates/vendordata.html', controller: 'VendorController' });
        $routeProvider.when('/Registration/materialbom', { templateUrl: '/templates/materialbom.html', controller: 'MaterialBOMController' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
    );