

angular.module('filters', []).filter('trustThisUrl', ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl(val);
  };
}]);



angular.module('cornpub')
  .factory('TVshowService', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/unsecure/tvshows/season/:id', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  })
  .factory('PreviewService', function ($resource, baseURL) {
    'use strict';
    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&q=:mediaName+trailer&key=AIzaSyCtNyLr6I_QJ5nxfO4LsJRP4Ko445wEoSI', {}, {
      get: { method: 'GET', params: {mediaName: '@mediaName'}}
    });
  })
  .filter('trustThisUrl', ['$sce', function($sce) {
    return function(val) {
      return $sce.trustAsResourceUrl(val);
    };
  }])
  .factory('TVshowServiceEpisodes', function($resource, baseURL){
     return $resource(baseURL + '/unsecure/tvshows/season/:id/episodes', {}, {
      get: { method: 'GET', params: {id: '@id'}}
    });
  });
