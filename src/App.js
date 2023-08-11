import { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import './components/cardList/card-list.component';
import CardList from './components/cardList/card-list.component';
import SearchBox from './components/searchBox/searchBox.component';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>  response.json())
      .then((users) => this.setState(() => {
        return {monsters: users};
      },

      () => {}

      ));
  }

  // Para otimizar a perfomance do código, uma função que pode ser utilizada muitas vezes não precisa ser anônima, crie uma função para ela.
  //Antes quando a função estava dentor do onChange, toda vez que o render era re-iniciado, a função era re-criada, usada e depois era jogada fora
  //Agora que ela está atrelada a classe, ela é criada apenas uma vez.
  onSearchChange = (event) => {

    const searchField = event.target.value.toLowerCase();

    //makes the page render again
    this.setState(() => {
      return { searchField };
    })
  }


  // É atualizado toda vez que o state é atualizado/sofre mudanças
  render(){

    //Para evitar repetição do 'this' em todo lugar podemos fazer uso da des-estrurização (destructuring)
    //Ajuda na leitura
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    //Método Filter cria um novo array a partir de um já pré-existente, no qual o novo array gerado, retornará tudo aquilo que for TRUE dentro do filtro que você escolheu
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
      //includes(): se algo está incluso em outro algo, retorna booleano (true, false)
      //includes(): não diferencia cases
      //React best practices: Imutabilidade, evite modificar um array, sempre que possivel, gere um novo com as modificações feitas
    });

    return (
      <div className="App">
        <h1 className='app-title'>Rolexdex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='Type to find a Monster' className='monster-search-box'/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
