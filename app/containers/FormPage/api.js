import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/strings';

async function addNewStringsApi(string) {
  try {
    const response = await axios.post(BASE_URL, { newString: string })
    return response.data;
  } catch (err) {
    return err;
  }
}

export { addNewStringsApi };
