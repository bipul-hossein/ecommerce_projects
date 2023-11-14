import { useEffect, useState } from 'react';

const useCategoryData = () => {
    const [categoryData, setCategoryData] = useState([]);
    //get code from the client site
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ServerUrl}/api/categories`)
            //fetch('${process.env.REACT_APP_ServerUrl}/categories')
            .then(res => res.json())
            .then(data =>{ 
                console.log(data);
                setCategoryData(data)
            })
    }, [])
    return [categoryData]
};

export default useCategoryData;