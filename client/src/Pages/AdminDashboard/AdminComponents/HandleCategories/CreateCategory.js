import axios from 'axios';
import React from 'react';

const CreateCategory = ({ refetch }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const categoryField = e.target.categoryField.value
        const data = {
            "title": `${categoryField}`
        }
        await axios.post('http://localhost:5000/categories', data)
        refetch()
    }
    return (
        <div className='w-full md:w-4/12 bg-slate-100 py-5 mx-auto rounded'>
            <h2 className='text-lg pb-3 text-center'>Create Category</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='px-3 md:px-1 mx-auto md:w-3/4'>
                    <div className='mx-auto'>
                        <label className="label">
                            <span className="label-text">Category Name:</span>
                        </label>
                        <input type="text" placeholder='milk' className='bg-red-50 rounded-md py-1 px-2 border-black border w-full' name="categoryField" />
                    </div>
                    <input type="submit" value="Submit" className='py-1 bg-red-200 px-3 rounded-md w-1/2 hover:bg-red-500 my-4' />
                </div>
            </form>
        </div>
    );
};

export default CreateCategory;