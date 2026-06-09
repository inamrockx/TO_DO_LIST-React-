import { apiUrl  } from "./fetchdata.js";


export const SendData = async ({userInput}) => {
  const myData = {
    task: userInput,
    done: false
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(myData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const respondData = await response.json();
    console.log(respondData);
    return respondData;
  } catch (error) {
    console.log(error);
  }
};
