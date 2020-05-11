import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/strings/';

async function addNewStringsApi(string) {
  let response;
  try {
    response = await axios.post(BASE_URL, { newString: string });
  } catch (err) {
    return err;
  }
  return response;
}

export { addNewStringsApi };
