import { Component } from 'react';

class CardList extends Component{
  
  render(){
    console.log('render from CardList');

    //when props are updated, the page render again
    const { monsters } = this.props;

    return (
      //Todos os componentes devem estar dentro de uma única div
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))};
      </div>
    );
  }
}

export default CardList;