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
    const storedGames = Store.getGames();
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
    ` //this line is storing to local storage
    localStorage.setItem("game", JSON.stringify(game));
    list.appendChild(row);
  }

  // game row abbreiviation. Targetting parent element twice to reach tr, removing entire entry. 
  static deleteGame(gr) {
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

// changing name seems to stop faults (titles), but still not storing in local storage. 
class Store {
  static getGames() {
    let titles;
    if(localStorage.getItem('titles') === null) {
      titles = [];
    } else {
      titles = JSON.parse(localStorage.getItem('titles'));
    }
    return titles;
  }

  static addGame() {
    const games = Store.getGames();
    console.log(game) //ERROR - Stringify not working?
    localStorage.setItem('games', JSON.stringify(games));

    games.push(game);

    

  }

  static removeGame() {
    const games = Store.getGames();
    games.forEach()

  }
}

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
    //  alert('Please provide an input') - Decided not to use DOM to display error message
   } else {
    UI.addGameToList(gameEntry);
   }

   Store.addGame(game);

   // Clear fields 
   UI.clearFields();
 })

// Event: Remove game
document.querySelector('#gameList').addEventListener('click', (e) => {
  UI.deleteGame(e.target)
})
  
  function addGameToLibrary() {
    // do stuff here
  }

