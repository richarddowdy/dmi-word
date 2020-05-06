import axios from 'axios';

export const fetchStrings = async () => {
  try {
    const response = await axios.get('localhost:3000/api/');
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
