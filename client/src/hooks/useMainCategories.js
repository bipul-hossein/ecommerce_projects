import {useState, useEffect} from 'react';

const useMainCategories = () => {
    const [mainCategories, setMainCategories] = useState([])

    useEffect(()=> {
        //fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
       fetch('https://faithful-jade-tie.cyclic.app/api/categories')
        .then(res => res.json())
        .then(data => {
        //  console.log(data);
          setMainCategories(data?.payload)
        })
    }, [])
    return [mainCategories]
};

export default useMainCategories;