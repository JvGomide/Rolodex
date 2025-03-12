import './card.styles.css'

const Card = ({monster}) => {
  //É possível  fazer esta outra desestruturação, ficando a critério de quem escreve o código
  //const Card = ({monster: { id, name, email }}) => {
  const { id, name, email } = monster;
  
  return(
    <div key={id} className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Monster: ${name}`}  />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;