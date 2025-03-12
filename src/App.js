import { useState, useEffect } from 'react';
import CardList from './components/cardList/card-list.component';
import SearchBox from './components/searchBox/searchBox.component';
import './App.css';

//Temos dois tipos de funções, puras e impuras.
//Funções puras dependem completamente dos argumentos passados a ela.
//Funções impuras tem elementos externos aos parametros que alteram o resultado da função, mesmo que os parametros não tenham mudado. Funções impuras também pode ser categorizado
//pelos seus side effects ao alterar algo fora do escopo da função
const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters]  = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>  response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
      const searchFieldsString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldsString);
  }

  return(
    <div className="App">
      <h1 className='app-title'>Rolexdex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Type to find a Monster' className='monster-search-box'/>
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
