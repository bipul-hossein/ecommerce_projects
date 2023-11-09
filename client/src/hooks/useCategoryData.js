import { useEffect, useState } from 'react';

const useCategoryData = () => {
    const [categoryData, setCategoryData] = useState([]);
    //get code from the client site
    useEffect(() => {
        fetch('/api/categories')
            //fetch('https://ecommerce-jubayer44.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [])
    return [categoryData]
};

export default useCategoryData;