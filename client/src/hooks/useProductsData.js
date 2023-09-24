import {useState, useEffect} from 'react';

const useProductsData = () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        .then(res => res.json())
        .then(data => {
          setProducts(data?.meals)
        })
    }, [])
    return [products]
};

export default useProductsData;