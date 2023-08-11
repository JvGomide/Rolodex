import { Component } from 'react';

import Card from '../card/card.component'
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
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;