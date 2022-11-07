function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/logo-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img
      src="./assets/logo-${player2}.svg"
      alt="Bandeira de ${player2}"/>
      </li>
  `
}

function createCard(date, day, games) {
  return ` 
  <div id="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
        </div>
  
  `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Logo NLW" />
      </header>
      <main id="cards">
        ${createCard(
          "24/11",
          "segunda",
          createGame("brazil", "08:00", "servia")
        )}
        ${createCard(
          "28/11",
          "segunda",
          createGame("suica", "16:00", "brazil")
        )}
        ${createCard(
          "02/12",
          "sexta",
          createGame("brazil", "13:00", "camaroes")
        )}
      </main>
      `
