export async function UpdateData(id, updatedFields) {
  const myTask = typeof updatedFields === "object" ? updatedFields : { task: updatedFields };
  
  const response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(myTask),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  console.log(data);
  return data;
}