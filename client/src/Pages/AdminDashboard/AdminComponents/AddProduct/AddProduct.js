import React from 'react';
import { BsFillCloudUploadFill } from 'react-icons/bs';

const AddProduct = () => {
    return (
        <div className='w-11/12 mx-auto mb-24'>
            <h2 className='text-base font-bold md:text-xl'>Add a product</h2>
            <div className='mt-5'>
                <form className='' action="">
                    <div className=''>
                        <div className='flex flex-col gap-1 md:gap-2 items-center bg-slate-100 py-6 md:py-12 mb-4 '>
                            <BsFillCloudUploadFill className='h-8 w-8 md:h-14 md:w-14' />
                            <p className='text-xs md:text-base'>Drag & Drop your files here</p>
                            <p className='text-xs md:text-base'>Or</p>
                            <input type="button" value="Browse Files" className='bg-slate-200 px-3 py-2 rounded' />
                        </div>
                        <div>
                            <p className='pb-2'>Uploaded File</p>
                            <div className='flex justify-between bg-slate-100 px-2 py-2 rounded'>
                                <p>Nike T-shirt</p>
                                <span>x</span>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='form-control w-full md:w-4/5 mt-3 md:mt-4'>
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input className='bg-slate-100 px-2 py-2 rounded' type="text" placeholder='Title' name='' />
                        </div>
                        <div className='w-full md:w-4/5 mt-3 md:mt-4'>
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                name="category"
                                id="category-select"
                                className="bg-slate-100 px-2 py-2 rounded md:w-auto text-xs md:text-sm"
                            >
                                <option value="">Organic Food</option>
                                <option value="">Gardening</option>
                                <option value="">Daily Needs</option>
                            </select>
                        </div>
                        <div className='form-control w-full md:w-4/5 mt-3 md:mt-4'>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input className='bg-slate-100 px-2 py-2 rounded' type="text" placeholder='price' name='' />
                        </div>
                        <div className='form-control w-full md:w-4/5 mt-3 md:mt-4'>
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <textarea className='bg-slate-100 px-2 py-2 rounded' id="w3review" name="description" rows="4" cols="50"></textarea>
                        </div>
                    </div>
                    <input type="button" value="Submit" className='bg-slate-500 text-white px-5 py-2 rounded hover:bg-red-500 hover:text-black' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;