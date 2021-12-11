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
     <td><button class="remove">X</button></td>
    `
    
    list.appendChild(row);
  }

  // game row abbreiviation. Targetting parent element twice to reach tr, removing entire entry. 
  static deleteBook(gr) {
      gr.parentElement.parentElement.remove();
  }

  // Used to clear fields once entry is submitted
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#gameTime').value = '';
    document.querySelector('#genre').value = '';
  }
}

// Store class

// Event: Display game
document.addEventListener('DOMContentLoaded', UI.displayGames);


addGame.addEventListener('click', (e) => {
   e.preventDefault();
   const title = document.querySelector('#title').value;
   const gameTime = document.querySelector('#gameTime').value;
   const genre = document.querySelector('#genre').value;

   const gameEntry = new game(title, gameTime, genre);

   // Check entry

   if(title === ''|| gameTime === '' || genre === '') {
     alert('Please provide an input')
   } else {
    UI.addGameToList(gameEntry);
   }

   // Clear fields 
   UI.clearFields();
 })

// Event: Remove game
document.querySelector('#gameList').addEventListener('click', (e) => {
  UI.deleteBook(e.target)
})
  
  function addGameToLibrary() {
    // do stuff here
  }

