import { Navbar } from './components/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { useEffect, useState } from 'react';
// import Characterss from './components/Characterss';
import { CharacterList } from './components/CharacterList';



function App() {
  const [characters, setCharacters] = useState([])

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  };
  useEffect(() => {
    fetchCharacters(initialurl)

  }, [])



  return (
    <>
      <Navbar brand="Rick and Morty view" />
      <div className="container mt-5">
        <CharacterList characters={characters} />
      </div>





    </>
  );
}

export default App;
