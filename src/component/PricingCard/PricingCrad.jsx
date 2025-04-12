import React from 'react';
import Feature from './Feature';

const PricingCrad = ({ pricing }) => {
    const { title, price, des, features } = pricing;
    console.log(pricing);
    return (
        <div className='border bg-amber-700 text-white p-5 rounded-lg'>
            <div className='flex flex-col'>
                <h1 className='text-5xl'>{title}</h1>
                <h1 className='text-xl'>{price}</h1>
                <p className='h-12 overflow-hidden px-2 rounded-lg my-5 bg-gray-800'>{des}</p>
                <h1 className='font-extrabold'>The Plan Feature:</h1>
                <div className='flex-1'>
                    {
                        features.map((fet, index) => <Feature  key={index} fet={fet}> </Feature> )
                    }
                </div>
                <button className='btn w-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default PricingCrad;