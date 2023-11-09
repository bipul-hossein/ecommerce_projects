import {useState, useEffect} from 'react';

const useMainCategories = () => {
    const [mainCategories, setMainCategories] = useState([])

    useEffect(()=> {
        //fetch('')
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