import {useState, useEffect} from 'react';

const useMainCategories = () => {
    const [mainCategories, setMainCategories] = useState([])

    useEffect(()=> {
       fetch(`${process.env.REACT_APP_ServerUrl}/api/categories`)
        .then(res => res.json())
        .then(data => {
          setMainCategories(data?.payload)
        })
    }, [])
    return [mainCategories]
};

export default useMainCategories;