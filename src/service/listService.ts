import axios from "axios";

export const onLoadList = (setData: any) => {
  try {
    axios.get("http://localhost:3333/profile").then((response) => {
      setData(response.data);
    });
  } catch (error) {
    console.error(error);
  }
};
