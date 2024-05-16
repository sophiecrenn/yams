import "./dashboard.css";


function CardsPastries() {

  return (
    <div className="pastriesContainer">
    <div className="pastriesCards">
    <div key={pastry.id}>
      <img src={pastry.image} alt={pastry.name} />
      <div className="pastriesDetails">
        <h3>{pastry.name}</h3>
        <p>Quantité: {pastry.quantity}</p>
      </div>
      </div>
    </div>
    </div>
  )
}


export default CardsPastries