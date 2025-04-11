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

    </>
  )
}

export default App
