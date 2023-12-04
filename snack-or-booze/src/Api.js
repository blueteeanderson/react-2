import axios from "axios";
import { v4 as uuid } from "uuid";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  //get all items by category
  static async getItems(category="snacks") {
    const result = await axios.get(`${BASE_API_URL}/${category}`);
    return result.data;
  }

  static async addItem(data) {
    //add unique id
    let newItem = {  
      id: uuid(),
      name:data.name,
      description:data.description,
      recipe: data.recipe,
      serve:data.serve
    };
    const result = await axios.post(`${BASE_API_URL}/${data.category}`,newItem);
    return result.data;
  }


}

export default SnackOrBoozeApi;
