import React from "react"
import { fetchProducts } from "../apis/fetchProducts"
import { useQuery } from "react-query"
import { IProduct } from "../types/productType"
import ProductCart from "../components/ProductCart"


const HomePage:React.FC = () => {
  const {data,isLoading,isError,error}= useQuery<IProduct[]>({
    queryKey:"product",
    queryFn:fetchProducts
  })
  return (
   <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {data?.map((product)=> (<ProductCart product={product}/>)

    )}
   </div>
  )
}

export default HomePage
