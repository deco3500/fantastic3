angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.subscription', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subscription.html',
        controller: 'subscriptionCtrl'
      }
    }
  })

  .state('menu.suggestedEvents', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/suggestedEvents.html',
        controller: 'suggestedEventsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.profile', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.runTonight', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/runTonight.html',
        controller: 'runTonightCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});