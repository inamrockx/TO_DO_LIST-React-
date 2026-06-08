export async function Del(id) {
  const response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "application-type": "application/json",
    },
  });

  const data = await  response.json();

  console.log(data);
}
