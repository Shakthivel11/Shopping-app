import axios from "axios";

export const loadproductapi = async () =>
  await axios.get(" http://localhost:5000/products");
