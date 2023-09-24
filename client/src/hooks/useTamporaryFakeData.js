import { useEffect, useState } from 'react';

const useTamporaryFakeData = () => {
    const [tamporaryFakeData, setTamporaryFakeData] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta')
            .then(res => res.json())
            .then(data => {
                setTamporaryFakeData(data?.meals)
            })
    }, [])
    return [tamporaryFakeData]
};
export default useTamporaryFakeData;