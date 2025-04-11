//importo axios
import axios from "axios"
//importo useEffect
import { useEffect } from "react";


//salvo in una variabile l'url dell'API che ho scelto (attrici)
const urlActresses = 'https://www.freetestapi.com/api/v1/actresses';

function App() {

  function fetchActresses() {
    axios.get(urlActresses)
      .then(response => console.log(response.data))
  }

  useEffect(fetchActresses, []);

  return (
    <>
      <h1>Attrici più famose di Hollywood</h1>

      <section>
        <h2>Nome Attrice</h2>
        <ul>
          <li>Nome:</li>
          <li>Anno di nascita:</li>
          <li>Nazionalità</li>
          <li>Biografia</li>
          <li>Immagine.jpg</li>
          <li>Riconoscimenti:</li>
        </ul>
      </section>
    </>
  )
}

export default App
