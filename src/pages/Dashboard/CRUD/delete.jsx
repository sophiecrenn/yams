import { useDeletePastryMutation } from "../features/pastriesApi";

const DeletePastry = ({ pastryId }) => {
  const [deletePastry] = useDeletePastryMutation();

  const handleDelete = async () => {
    try {
      await deletePastry(pastryId);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete the pastry</button>
  );
};

export default DeletePastry
