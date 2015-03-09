'use strict';

angular.module('eLibraryApp').factory('Repository', function() {
  var allBooks =  [ {'id':0,'type':'Buch','titel':'Titel0','isbn':123150,'autoren':'Autor0','auflage':'auflage','cover':'url','status':'verfügbar','kommentar':'kommentar', 'open': false},
    {'id':1,'type':'Buch','titel':'Titel1','isbn':765341,'autoren':'Autor1','auflage':'auflage','cover':'url','status':'nicht_verfügbar','kommentar':'kommentar', 'open': false},
    {'id':2,'type':'Buch','titel':'Titel2','isbn':123147150,'autoren':'Autor2','auflage':'auflage','cover':'url','status':'reserviert','kommentar':'kommentar', 'open': false},
    {'id':3,'type':'Buch','titel':'Titel3','isbn':123667150,'autoren':'Autor2','auflage':'auflage','cover':'url','status':'verliehen','kommentar':'kommentar', 'open': false},
    {'id':3,'type':'Buch','titel':'Titel4','isbn':12127150,'autoren':'Autor2','auflage':'auflage','cover':'url','status':'im_büro','kommentar':'kommentar', 'open': false}];


  var ownedBooks = [ {'id':0,'type':'Buch','titel':'Titel0','isbn':123150,'autoren':'Autor0','auflage':'auflage','cover':'url','status':'verfügbar','kommentar':'kommentar', 'open': false},
    {'id':1,'type':'Buch','titel':'Titel1','isbn':765341,'autoren':'Autor1','auflage':'auflage','cover':'url','status':'nicht_verfügbar','kommentar':'kommentar', 'open': false},
    {'id':2,'type':'Buch','titel':'Titel2','isbn':123147150,'autoren':'Autor2','auflage':'auflage','cover':'url','status':'reserviert','kommentar':'kommentar', 'open': false},
    {'id':3,'type':'Buch','titel':'Titel3','isbn':123667150,'autoren':'Autor2','auflage':'auflage','cover':'url','status':'verliehen','kommentar':'kommentar', 'open': false},
    {'id':3,'type':'Buch','titel':'Titel4','isbn':12127150,'autoren':'Autor2','auflage':'auflage','cover':'url','status':'im_büro','kommentar':'kommentar', 'open': false}];

  var rentedBooks = [ {'id':0,'type':'Buch','titel':'Titel0','isbn':123150,'autoren':'Autor0','auflage':'auflage','cover':'url','status':'verfügbar','kommentar':'kommentar', 'open': false},
    {'id':1,'type':'Buch','titel':'Titel1','isbn':765341,'autoren':'Autor1','auflage':'auflage','cover':'url','status':'verfügbar','kommentar':'kommentar', 'open': false},
    {'id':2,'type':'Buch','titel':'Titel2','isbn':123147150,'autoren':'Autor2','auflage':'auflage','cover':'url','status':'verfügbar','kommentar':'kommentar', 'open': false}];

  var user = {'benutzer_id':0,'email':'email@fhnw.ch','rolle':'User','vorname':'Max','nachname':'Muster','zimmer':'6.4H13','link':'url'};
  //var index = questionnaires.length;

  function findById(id) {
    var index = -1;
    ownedBooks.forEach(function(book, i) {
      if (book.id === id) {
        index = i;
        return;
      }
    });
    return index;
  }

  return {
    getAll : function() {
      return allBooks;
    },
    getOwned : function() {
      return ownedBooks;
    },
    getRented : function() {
      return rentedBooks;
    },
    getUser : function() {
      return user;
    },
    getOwnedById : function(id) {
      var index = findById(id);
      return ownedBooks[index];
    }
  };
});
