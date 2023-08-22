import axios from 'axios';
import { AxiosResponse } from "axios";
import { ProductModel } from "../components/Task 3/product/product.model";
import { PRODUCTS_URL } from "../constants/api.constants";

export default async function fetchProductsApi(): Promise<AxiosResponse<ProductModel[]>> {
  return await axios.get(PRODUCTS_URL)
    .then((response: any) => {
      return response;
    })
    .catch((message) => {
      throw message.message;
    });
};

export function createProductApi(product: Partial<ProductModel>) {
  try {
    return product;
  } catch(error) {
    throw error
  };
};