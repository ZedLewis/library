// the constructor...
function gamePlayed(title, gametime, genre) {
    this.title = title
    this.gametime = gametime
    this.genre = genre
    this.gameInfo = function() {
      /* need to implement space in string */
      return ['You have played ' + genre + '' + title + ' for ' + gametime + ' hours.']
    }
    
  }

  const game1 = new gamePlayed('cod', '200', 'shooter')
  
  function addBookToLibrary() {
    // do stuff here
  }