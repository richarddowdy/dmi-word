import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/strings';

async function fetchStrings() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    return err;
  }
}

async function deleteString(string) {
  try {
    const data = {
      string,
    };
    const response = await axios.delete(`${BASE_URL}/delete`, { data });
    return response.data;
  } catch (err) {
    return err;
  }
}

export { fetchStrings, deleteString }
