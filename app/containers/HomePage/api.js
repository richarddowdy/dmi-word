import axios from 'axios';

async function fetchStrings() {
  console.log("fetch fired!!!")
  try {
    const response = await axios.get('localhost:3000/api/');
    console.log(response);
    return response.json();
  } catch (e) {
    console.log(e);
  }
  
}

export default fetchStrings;
