import React from 'react';
import PriceList from '../PriceList/PriceList';

const priceData = [
    {   
        name: 'Körningspaket-1',
        price: 5999,
        lessons:'15 körning',
        duration: '55 min varje lektion',
        type: 'Automat or manuellt' 
    },
    {   
        name: 'Körningspaket-2',
        price: 8700,
        lessons:'20 körning',
        duration: '55 min varje lektion',
        type: 'Automat or manuellt' 
    },
    {   
        name: 'Körningspaket-3',
        price: 13300,
        lessons:'35 körning',
        duration: '55 min varje lektion',
        type: 'Automat or manuellt' 
    }

]

const Prices = () => {
    return (
        <section className="courses-container">
        <div className="text-center  mt-5">
            <h2 style={{ color: 'Red' }}> KÖRNINGSPAKET </h2>
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