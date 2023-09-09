import React from 'react';

const Sidebar = ({isOpen,setIsOpen}) => {

    const menuItems = [
        'shops', 'about', 'services', 'FAQ', 'Contacts'
    ]

    return (
        <div
            className={`z-50 fixed top-0 bottom-0 p-2 w-full overflow-y-auto bg-white ${!isOpen && '-left-[100%]'}`}>
            <div>
                <div className='flex justify-between'>
                    <img
                        className=""
                        src="https://fullkit.moxcreative.com/electrodeals/wp-content/uploads/sites/8/elementor/thumbs/Logo_electrodeals-1-pqh2rs7jj702t6120hf28oa9rgzhabts8ff3d9id4w.png"
                        alt=""
                    />
                    <button onClick={()=>setIsOpen(false)} className='py-2 px-3 bg-[#e74c3c] rounded-full'>X</button>
                </div>

            </div>
            <div >
                {
                    menuItems.map((item, i) => <p className='my-4' key={i}>{item}</p>
                    )}
            </div>
        </div>
    );
};

export default Sidebar;