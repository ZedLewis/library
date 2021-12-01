const addGame = document.getElementById('addGame')

// game class
class game {
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
  static displayGames() {
    const storedGames = [
      {
        title: 'Football Manager',
        gametime: '200',
        genre: 'Simulation'
      }
    ]
    const games = storedGames

    games.forEach((game) => UI.addGameToList(game))
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

// Event: Display game
document.addEventListener('DOMContentLoaded', UI.displayGames);

// Event: Add game
document.querySelector('#game-form').addEventListener('submit', (e) =>

 {
   e.preventDefault();
   const title = document.querySelector('#title').value;
   const gameTime = document.querySelector('#gameTime').value;
   const genre = document.querySelector('#genre').value;

   const gameEntry = new game(title, gameTime, genre);

   console.log(gameEntry);

   UI.addGameToList(gameEntry);
 })

// Event: Remove game
  
  function addGameToLibrary() {
    // do stuff here
  }

  addGame.addEventListener('click', () => {
      
      console.log("clicked")
    })
  