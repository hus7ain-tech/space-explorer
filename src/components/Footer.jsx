import React from 'react'

export const Footer = () => {
    return (
        <div className='bg-black px-10 py-5 text-white flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0'>
            <div>
                <p className='text-[#776445]'>Husain Ansari, 2026.</p>
            </div>
            <div className='flex gap-10 text-[#776445]'>
                <span>Instagram</span>
                <span>Linkedin</span>
                <span>Twitter</span>
            </div>
        </div>
    )
}
