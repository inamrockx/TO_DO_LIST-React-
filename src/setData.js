import { apiUrl } from "./fetchdata.js";


export const SendData = async ({ data }) => {
  const myData = {
    task: data,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(myData),
      headers: {
        "content-type": "application/json",
      },
    });

    const respondData = await response.json();
    console.log(respondData);

    return respondData;
  } catch (error) {
    console.log(error);
  }
};
