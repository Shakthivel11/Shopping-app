import axios from "axios";

export const loadproductapi = async () =>
  await axios.get(" http://localhost:5000/products");


export const creatorderApi = async(order)=>
await axios.post("http://localhost:5000/order",order);