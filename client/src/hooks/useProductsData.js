import {useState, useEffect} from 'react';

const useProductsData = () => {
    const [products, setProducts] = useState([])
  useEffect(()=> {
    fetch(`${process.env.REACT_APP_ServerUrl}/api/products/`)
     .then(res => res.json())
     .then(data => {
       setProducts(data?.payload)
     })
 }, [])
    return [products]
};

export default useProductsData;