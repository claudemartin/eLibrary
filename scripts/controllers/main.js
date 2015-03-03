'use strict';

angular.module('eLibraryApp')
  .controller('AppCtrl', function ($scope, $modal) {
    $scope.loggedIn = false;
    $scope.openLoginModal = function() {
      var modalInstance = $modal.open({
        templateUrl: 'overlays/login.html',
        controller: 'LoginDialogCtrl as dialog'
      });

      modalInstance.result.then(function () {
        $scope.loggedIn = true;
        //  }, function (error) {
        //    // something went wrong!;
      });
    };
    $scope.logOut = function() {
      $scope.loggedIn = !$scope.loggedIn;
    };
  })
  .controller('LoginDialogCtrl', ['$modalInstance', function ($modalInstance) {
    var login = {'email':'','password':''};
    this.login = login;

    this.ok = function() {
      // check credentials
      $modalInstance.close();
    };

    this.cancel = function() {
      $modalInstance.dismiss();
    };

  }])
  .controller('MainCtrl', ['Repository', function (Repository) {
    this.extended = false;

    this.books = Repository.getAll();
  //.filter('extendedFilter', function() {
  //  return function(input) {
  //    var out = "";
  //    for (var i = 0; i < input.length; i++) {
  //      if (input[i].status)out = input.charAt(i) + out;
  //    }
  //    // conditional based on optional argument
  //    if (uppercase) {
  //      out = out.toUpperCase();
  //    }
  //    return out;
  //  };
  }])
  .controller('RegisterCtrl', function () {
  })
  .controller('UserCtrl', ['Repository', '$modal', function (Repository, $modal) {

    this.user = Repository.getUser();

    this.ownedBooks = Repository.getOwned();

    this.rentedBooks = Repository.getRented();
    //
    // put function openModal() into the controller as an alternative to add()


    this.openModal = function(id) {

      var modalInstance = $modal.open({
        templateUrl: 'overlays/editOwned.html',
        controller: 'EditOwnedDialogCtrl as dialog',
        resolve: {
          editId: function () {
            return id;
          }
        }
      });

      modalInstance.result.then(function () {
    //    QuestionnaireRepository.save(questionnaire);
    //  }, function (error) {
    //    // something went wrong!;
      });
    };


  }])
  .controller('EditOwnedDialogCtrl', ['$modalInstance', 'Repository', 'editId', function ($modalInstance, Repository, editId) {
    if (editId!= null) {
      var book = Repository.getOwnedById(editId);
      this.title = 'Buch bearbeiten';
    } else {
      var book =  {'id':0,'type':'Buch','titel':null,'isbn': null,'autoren':null,'auflage':null,'cover':'url','status':null,'kommentar':null, 'open': false};
      this.title = 'Neues Buch erstellen';

    }
    this.book = book;

    this.ok = function() {
      $modalInstance.close(book);
    };

    this.cancel = function() {
      $modalInstance.dismiss();
    };

  }])
  .controller('AdminCtrl', function () {

  });
