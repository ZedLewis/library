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
        title: 'Football Manager',
        gametime: '200',
        genre: 'Simulation'
      }
    ]
    const games = storedGames

    games.forEach((book) => UI.addGameToList(book))
  }

  static addGameToList(game) {
    const list = document.querySelector('#gameList');

    const row = document.createElement('tr');

    row.innerHTML = `
     <td>${game.title}</td>
     <td>${game.gametime}</td>
     <td>${game.genre}</td>
    `
    
    list.appendChild(row);
  }
}

// Store class

// Event: Display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add book

// Event: Remove book


  // const game1 = new gamePlayed('cod', '200', 'shooter')
  
  function addBookToLibrary() {
    // do stuff here
  }

  addGame.addEventListener('click', () => {
      
      console.log("clicked")
    })
  