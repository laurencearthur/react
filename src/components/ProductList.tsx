import { useState, useEffect } from "react"

interface Props {
  category: string
}
const ProductList = ({ category }: Props) => {
  const [product, setProduct] = useState<string[]>([])
  useEffect(() => {
    console.log("Fetching products in ",category)
    setProduct(["clothing", "Household"])
  }, [category])

  return <>ProductList</>
}

export default ProductList
