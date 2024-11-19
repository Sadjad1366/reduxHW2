import axios from "axios";
import { IProduct } from "../types/productType";

type fetchProductsType = () => Promise<IProduct[]>;
export const fetchProducts = async () => {
  const response = await axios.get<fetchProductsType>(
    "https://dummyjson.com/products?limit=194"
  );
  return response.data.products;
};
