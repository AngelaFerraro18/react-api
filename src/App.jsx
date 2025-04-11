//importo axios
import axios from "axios"
//importo useEffect e useState
import { useEffect, useState } from "react";
//importo il componente Card
import Card from "./components/Card";


//salvo in una variabile l'url dell'API che ho scelto (attrici)
const urlActresses = 'https://www.freetestapi.com/api/v1/actresses';

//salvo in una variabile l'url dell'API degli attori
const urlActors = 'https://www.freetestapi.com/api/v1/actors';

function App() {

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  function fetchActresses() {
    axios.get(urlActresses)
      .then(response => {
        console.log(response.data);
        return setActresses(response.data);
      })
  }

  function fetchActors() {
    axios.get(urlActors)
      .then(response => {
        console.log(response.data);
        return setActors(response.data);
      })
  }

  //per scrivere entrambe le funzioni uso la callback di useEffect
  useEffect(() => {
    fetchActors(),
      fetchActresses()
  }, []);

  return (
    <>
      <h1>Attrici e attori più famosi di Hollywood</h1>
      <main>
        {actresses.map(actress => <Card key={actress.id} name={actress.name}>
          <li>Nome: {actress.name}</li>
          <li>Anno di nascita: {actress.birth_year}</li>
          <li>Nazionalità: {actress.nationality}</li>
          <li>Biografia: {actress.biography}</li>
          <li>Riconoscimenti: {actress.awards}</li>
          <div>
            <img src={actress.image} alt={actress.name} />
          </div>
        </Card>)}

        {actors.map(actor => <Card key={actor.id} name={actor.name}>
          <li>Nome: {actor.name}</li>
          <li>Anno di nascita: {actor.birth_year}</li>
          <li>Nazionalità: {actor.nationality}</li>
          <li>Biografia: {actor.biography}</li>
          <li>Riconoscimenti: {actor.awards}</li>
          <div>
            <img src={actor.image} alt={actor.name} />
          </div>
        </Card>)}
      </main>
    </>
  )
}

export default App
