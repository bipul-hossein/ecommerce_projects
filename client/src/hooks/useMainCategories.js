import {useState, useEffect} from 'react';

const useMainCategories = () => {
    const [mainCategories, setMainCategories] = useState([])

    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => {
          setMainCategories(data?.categories)
        })
    }, [])
    return [mainCategories]
};

export default useMainCategories;