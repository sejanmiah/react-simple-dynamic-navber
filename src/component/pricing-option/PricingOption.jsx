import React, { use } from 'react';
import PricingCrad from '../PricingCard/PricingCrad';

const PricingOption = ({pricingPromiss}) => {
    const pricData = use(pricingPromiss)
    return (
        <div>
            <h2 className='text-5xl capitalize mx-10 mt-10 mb-5'>get our membership</h2>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-5 mx-10'>
                {
                    pricData.map(pricing => <PricingCrad key={pricing.id} pricing={pricing}> </PricingCrad> )
                }
            </div>
        </div>
    );
};

export default PricingOption;