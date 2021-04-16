import React from 'react';
import PriceList from '../PriceList/PriceList';

const priceData = [
    {   
        name: 'Package 1',
        price: 8300,
        lessons:'10 driving lessons',
        duration: '50 min per lessons',
        type: 'Automatic or manual' 
    },
    {   
        name: 'Package 2',
        price: 9300,
        lessons:'12 driving lessons',
        duration: '50 min per lessons',
        type: 'Automatic or manual' 
    },
    {   
        name: 'Package 3',
        price: 11300,
        lessons:'15 driving lessons',
        duration: '50 min per lessons',
        type: 'Automatic or manual' 
    }

]

const Prices = () => {
    return (
        <section className="courses-container">
        <div className="text-center  mt-5">
            <h2 style={{ color: 'brown' }}> EXERCISE PACKAGES </h2>
        </div>
        <div className= "d-flex justify-content-center">
             <div className = "w-75 row mt-4 pt-5">
                {
                    priceData.map(pr => <PriceList pr = {pr}></PriceList>)
                }
             </div>
        </div>
    </section>
    );
};

export default Prices;