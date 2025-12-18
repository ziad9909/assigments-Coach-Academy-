import img from '@/assets/images/main-image.png';

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className='h-[60vh] flex flex-col justify-center items-center'
    >
      <h1 className='text-[4.5rem] font-bold text-white'>Elevate Every Moment</h1>
      <h3 className='text-white'>Discover our curated collection of premium accessories</h3>
    </div>
  );
};

export default HeroSection;
