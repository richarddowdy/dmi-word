import axios from 'axios';

async function fetchStrings() {
  console.log("fetch fired!!!")
  try {
    const response = await axios.get('http://localhost:3000/api/strings');
    return response.data;
  } catch (e) {
    console.log(e);
  }
  
}

export default fetchStrings;
