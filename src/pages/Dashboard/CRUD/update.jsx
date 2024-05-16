import { useUpdatePastryMutation } from "../features/pastriesApi";

const UpdatePastry = ({ pastryId }) => {
  const [updatePastry,] = useUpdatePastryMutation();

  const handleUpdatePastry = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const quantity = formData.get('quantity');

    try {
      await updatePastry({ id: pastryId, name, quantity });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleUpdatePastry}>
      <input type="text" name="name" placeholder="Name of the pastry" />
      <input type="number" name="quantity" placeholder="Quantity" />
      <button type="submit">Update the pastry</button>
    </form>
  );
};

export default UpdatePastry