export const apiUrl = "http://localhost:3000/tasks";

export const FetchingData = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
