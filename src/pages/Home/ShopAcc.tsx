import { FaCartShopping } from 'react-icons/fa6';
import { CiClock2 } from 'react-icons/ci';

const ShopAccessories = () => {
  return (
    <div className='mx-auto w-3/4 h-50 rounded-2xl flex flex-col justify-center items-center bg-gradient-to-r from-[#8F1C33] to-black text-white 
    mt-5'>
      <h2 className='text-3xl font-bold'>Don't Miss Out!</h2>
      <div className='flex gap-4 justify-center items-center'>
        <button className='flex items-center gap-2'>
          <FaCartShopping />
          Shop All Accessories
        </button>
        <p className='flex items-center gap-2'>
          <CiClock2 />
          Ends in 2 Days
        </p>
      </div>
    </div>
  );
};

export default ShopAccessories;
