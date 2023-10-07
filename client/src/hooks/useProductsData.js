import {useState, useEffect} from 'react';

const useProductsData = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        //fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
       fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(data => {
          setProducts(data?.payload)
        })
    }, [])
    return [products]
};

export default useProductsData;