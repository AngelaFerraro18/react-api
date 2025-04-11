//importo axios
import axios from "axios"
//importo useEffect e useState
import { useEffect, useState } from "react";
//importo il componente Card
import Card from "./components/Card";


//salvo in una variabile l'url dell'API che ho scelto (attrici)
const urlActresses = 'https://www.freetestapi.com/api/v1/actresses';

function App() {

  const [actresses, setActresses] = useState([]);

  function fetchActresses() {
    axios.get(urlActresses)
      .then(response => {
        console.log(response.data);
        return setActresses(response.data);
      })
  }

  useEffect(fetchActresses, []);

  return (
    <>
      <h1>Attrici più famose di Hollywood</h1>

      {actresses.map(actress => <Card key={actress.id} name={actress.name}>
        <li>Nome: {actress.name}</li>
        <li>Anno di nascita: {actress.birth_year}</li>
        <li>Nazionalità: {actress.nationality}</li>
        <li>Biografia: {actress.biography}</li>
        <li>Riconoscimenti: {actress.awards}</li>
        <img src={actress.image} alt={actress.name} />
      </Card>)}

    </>
  )
}

export default App
