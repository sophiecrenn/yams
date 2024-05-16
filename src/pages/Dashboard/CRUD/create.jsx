import { useCreatePastryMutation } from "../features/pastriesApi";

const CreatePastry = () => {
  const [createPastry] = useCreatePastryMutation();

  const handleAddPastry = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const quantity = formData.get('quantity');

    try {
      await createPastry({ name, quantity });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleAddPastry}>
      <input type="text" name="name" placeholder="Name of the pastry" />
      <input type="number" name="quantity" placeholder="Quantity" />
      <button type="submit">Add a pastry</button>
    </form>
  );
};

export default CreatePastry