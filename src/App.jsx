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

  //creo una variabile per la lista di attori completa
  const [unifiedListActors, setUnifiedListActors] = useState([]);

  //creo una variabile dove salvo il valore della ricerca, impostato inizialmente vuoto
  const [search, setSearch] = useState('');

  function unifiedList() {
    if (search === '') {
      axios.get(urlActresses)
        .then(responseActresses => {
          axios.get(urlActors)
            .then(responseActors => {
              //salvo in delle variabili il valore delle liste relative alle attrici e agli attori presi dall'oggetto ottenuto in risposta
              const responseActressesList = responseActresses.data;
              const responseActorsList = responseActors.data;

              //creo un unico array con le liste degli attori
              const completeList = [...responseActressesList, ...responseActorsList];

              //vado a settare come array principale, l'array unico creato
              setUnifiedListActors(completeList);
            })
        })
    } else {
      //creo una variabile che sarà aggiunta al mio url di partenza che identificherà la querystring per permettere la ricerca per nome
      const queryString = `?search=${search}`;

      axios.get(urlActresses + queryString)
        .then(responseActresses => {
          axios.get(urlActors + queryString)
            .then(responseActors => {

              const responseActressesList = responseActresses.data;
              const responseActorsList = responseActors.data;

              //creo un array con le liste degli attori risultanti dalla ricerca
              const filteredList = [...responseActressesList, ...responseActorsList];

              //vado a settare come array principale, l'array unico creato
              setUnifiedListActors(filteredList);
            })
        })
    }

  }

  //aggiungo come dipendenza il valore di search in modo tale che se verrà fatta una ricerca avrò un render della pagina
  useEffect(unifiedList, [search]);

  return (
    <>
      <h1>Attrici e attori più famosi di Hollywood</h1>

      <input type="text"
        placeholder="Cerca per nome..."
        value={search}
        onChange={event => setSearch(event.target.value)} />

      <main>
        {unifiedListActors.map((element, index) => <Card key={index} name={element.name}>
          <li><span>Nome: </span><em>{element.name}</em></li>
          <li><span>Anno di nascita:</span><em>{element.birth_year}</em></li>
          <li><span>Nazionalità: </span><em>{element.nationality}</em></li>
          <li><span>Biografia: </span><em>{element.biography}</em></li>
          <li><span>Riconoscimenti: </span> <em>{element.awards}</em></li>
          <div>
            <img src={element.image} alt={element.name} />
          </div>
        </Card>)}
      </main>
    </>
  )
}

export default App
