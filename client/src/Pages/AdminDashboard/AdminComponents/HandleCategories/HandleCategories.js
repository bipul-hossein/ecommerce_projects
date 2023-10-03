import { useState } from 'react';
import { useQuery } from 'react-query';
import CreateCategory from './CreateCategory';
import Categories from './Categories';
import Modal from './Modal';
import axios from 'axios';
import { toast } from 'react-toastify';

const HandleCategories = () => {
    const [categoryEditInfo, setCategoryEditInfo] = useState({})
    console.log(categoryEditInfo)
    // fetch data
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categoryData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data;
        }
    });

    const categoriesItem = categories.payload;

    const handelEditInfo = async (e) => {
        e.preventDefault();
        const form = e.target;
        const categoryEditData = form.categoryEditField.value
        const res = await axios.put(
            `http://localhost:5000/categories/${categoryEditInfo?.slug}`,
            { title: `${categoryEditData}` }
        );
        const { payload, message } = res.data;
        toast.success(payload.title + " " + message);
        refetch();
    }

    return (
        <div className='w-11/12 mx-auto mt-20 md:mt-4'>
            <div>
                <h1 className='text-center text-xl mb-8 bg-blue-200 py-1 rounded-sm'>CATEGORIES</h1>
                <div className='flex justify-between flex-wrap gap-5'>
                    <Categories
                        categoriesItem={categoriesItem}
                        refetch={refetch}
                        categoryEditInfo={categoryEditInfo}
                        setCategoryEditInfo={setCategoryEditInfo}
                    />

                    <CreateCategory refetch={refetch} />
                </div>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <Modal
                handelEditInfo={handelEditInfo}
                categoryEditInfo={categoryEditInfo}
            />
        </div>
    );
};

export default HandleCategories;