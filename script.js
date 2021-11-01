const addGame = document.getElementById('addGame')

// Book class
class book {
  constructor(title, gametime, genre) {
    this.title = title
    this.gametime = gametime
    this.genre = genre
    this.gameInfo = function() {
      return ['You have played ' + genre + ' game ' + title + ' for ' + gametime + ' hours.']
    }
  }
}

// UI class
class UI {
  static displayBooks() {
    const storedGames = [
      {
        title: 'Football Manager';
        gametime: '200';
        genre: 'Simulation'
      }
    ]
    const games = storedGames

    games.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList(book) {
    const list = document.querySelector('#gameList')
  }
}

// Store class

// Event: Display book

// Event: Add book

// Event: Remove book


  const game1 = new gamePlayed('cod', '200', 'shooter')
  
  function addBookToLibrary() {
    // do stuff here
  }

  addGame.addEventListener('click', () => {
      
      console.log("clicked")
    })
  