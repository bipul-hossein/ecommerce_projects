import { useEffect, useState } from 'react';

const useCategoryData = () => {
    const [categoryData, setCategoryData] = useState([]);
    //get code from the client site
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ServerUrl}/api/categories`)
            .then(res => res.json())
            .then(data =>{ 
                setCategoryData(data?.payload)
            })
    }, [])
    return [categoryData]
};

export default useCategoryData;