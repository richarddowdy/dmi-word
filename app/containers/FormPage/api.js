import axios from 'axios';

async function addNewStringsApi(string){
  try{
    const response = await axios.post('http://localhost:3000/api/strings', { newString: string })
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { addNewStringsApi };
