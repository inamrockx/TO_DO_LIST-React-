export async function UpdateData(id , updatedTask){
const myTask ={
    'task':updatedTask
} 
    const response = await fetch(`http://localhost:3000/tasks/${id}`,{
        method:'PATCH',
        body:JSON.stringify(myTask),
        headers:{
            'application-type':'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

}