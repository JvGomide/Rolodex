import { Component } from 'react';

import './card-list.styles.css'

class CardList extends Component{
  
  render(){
    console.log('render from CardList');

    //when props are updated, the page render again
    const { monsters } = this.props;

    return (
      //Todos os componentes devem estar dentro de uma única div
      <div className='card-list'>
        {monsters.map((monster) => {
          const {name, email, id} = monster;
          return(
          <div key={id} className='card-container'>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Monster: ${name}`}  />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        )})}
      </div>
    );
  }
}

export default CardList;