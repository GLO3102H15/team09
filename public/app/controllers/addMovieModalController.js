angular.module('cornpub')
  .controller('AddMovieModalCtrl', function ($scope, $uibModal, WatchlistMovieFactory, WatchlistsFactory) {

    $scope.addToWatchlist = function(movie) {
      var modalInstance = $uibModal.open({
        templateUrl: 'template/watchlist-select-modal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          movie: movie,
          watchlists: function () {
            return WatchlistsFactory.query();
          }
        }
      });

      modalInstance.result.then(function (selectedWatchlist) {
        WatchlistMovieFactory.create({
          id: selectedWatchlist.id
        }, movie, function (returnedWatchlist) {
          //confirmation to the user
        });
      });
    };
  })

  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, watchlists, movie) {

    $scope.movie = movie;
    $scope.watchlists = watchlists;
    $scope.selected = {
      watchlist: $scope.watchlists[0]
    };

    $scope.ok = function () {
      $uibModalInstance.close($scope.selected.watchlist);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });