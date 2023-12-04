import {React, useState} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./AddItem.css"
import SnackOrBoozeApi from "./Api";
import { useHistory } from "react-router-dom";

function AddItem() {
  //initial values of form
  const INIT_STATE = {
    category:"drinks",
    name:"",
    description:"",
    recipe:"",
    serve:"",
  }

  //keep track of form state
  const [formData, setFormData] = useState(INIT_STATE)
  //history object
  const history = useHistory();

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };




  const handleSubmit = evt => {
    evt.preventDefault();
    const resp=SnackOrBoozeApi.addItem(formData)
    setFormData(INIT_STATE);

    history.push("/")
  };

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a drink or a snack
          </CardTitle>
            <form onSubmit={handleSubmit}>
                <select required name="category" value={formData.category} onChange={handleChange}  >
                  <option value="drinks">Drink</option>
                  <option value="snacks">Snack</option>
                </select>
              <input type="text" placeholder="Item Name" name="name"  value={formData.name} onChange={handleChange} required></input>
              <textarea placeholder="Enter a description" name="description"  value={formData.description} onChange={handleChange}  required></textarea>
              <textarea placeholder="Enter a recipe" name="recipe"  value={formData.recipe} onChange={handleChange}  required></textarea>
              <textarea placeholder="Enter how to serve" name="serve"  value={formData.serve} onChange={handleChange}  required></textarea>
              <button>Add</button>
            </form>        
          </CardBody>
      </Card>
    </section>
  );
}

export default AddItem;
