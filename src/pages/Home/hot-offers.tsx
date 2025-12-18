import productImg from '@/assets/images/product.jpeg';

const HotOffers = () => {
  return (
    <div>
      <h2 className='text-center text-4xl font-bold mt-5'>Hot Offers</h2>
      <div className='flex gap-4 justify-center flex-wrap'>
      {[1, 2, 3].map((_,index) => (
        <div key={index} className='w-[405.328125px] h-[352px] relative rounded-2xl overflow-hidden shadow'>
          <img src={productImg} alt='product' className='h-2/3 w-full' />
          <div className='absolute top-3 right-3 z-10 rounded-lg px-4 py-2 bg-[#9333EA] text-white'>
            <p>new</p>
          </div>
          <div className='px-4 flex justify-between'>
            <div>
              <h3 className='text-2xl font-bold mt-2'>Diamond Jewelry</h3>
              <p className='text-[#4B5563]'>Sparkling beauty that captivates</p>
              <div className='flex items-center gap-3 mt-2'>
                <p className='text-lg text-gray-600 line-through'>$99.99</p>
                <p className='text-xl text-green-600 font-bold'>$99.99</p>
              </div>
            </div>
            <button className='bg-[#9333EA] text-white w-12 h-11 rounded-lg text-2xl'>
              +
            </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotOffers;