import { useGetAllPastriesQuery } from "../features/pastriesApi";

const PastriesList = () => {
    const { data: pastries, isError, isLoading } = useGetAllPastriesQuery();
    
    if (isLoading) {
      return <p>Chargement en cours...</p>;
    }
  
    if (isError) {
      return (
        <p>
          Une erreur s&apos;est produite lors du chargement des pâstisseries.
        </p>
      );
    }
  
    if (!pastries) {
      return null;
    }
  
  
    return (
      <>
<div className="pastriesContainer">
          {pastries.map((pastry) => (
            <div className="pastriesCards" key={pastry.id}>
              <div className="pastriesDetails">
                <h3>{pastry.name}</h3>
                <p>Quantité: {pastry.quantity}</p>
                <p>Quantité gagnée: {pastry.quantityWin}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default PastriesList;
