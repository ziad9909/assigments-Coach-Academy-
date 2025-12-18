import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Tap from '@/components/common/tap';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { FaRegHeart } from 'react-icons/fa';
import watchesImage from '@/assets/images/watches.jpeg';
import bagImage from '@/assets/images/bag.jpeg';

const Shop = () => {
  const { category } = useParams() as { category?: string };
  const navigate = useNavigate();
  const pageName = category || 'Shop';
  const [value, setValue] = useState({
    watches: false,
    bags: false,
    rings: false,
  });

  useEffect(() => {
    if (category && ['watches', 'bags', 'rings'].includes(category)) {
      setValue({
        watches: category === 'watches',
        bags: category === 'bags',
        rings: category === 'rings',
      });
    }
  }, [category]);

  function handlerCheckbox(name: { name: string; e: boolean }) {
    console.log(name);
    if (name.e) {
      navigate(`/shop/${name.name}`);
    } else {
      navigate('/shop');
    }
    setValue({
      ...value,
      [name.name]: name.e,
    });
  }

  return (
    <>
      <Tap pageName={pageName} />
      <div className='flex gap-8 mx-10 mt-6'>
        
        <div className='w-64 space-y-6'>
        
          <div className='bg-white rounded-lg shadow p-4'>
            <h3 className='font-bold text-lg mb-4'>Category</h3>
            <div className='space-y-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox
                    checked={value.watches}
                    onCheckedChange={(e) =>
                      handlerCheckbox({ name: 'watches', e: e as boolean })
                    }
                  />
                  <p>Watches</p>
                </div>
                <span className='text-muted-foreground'>(24)</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox
                    checked={value.bags}
                    onCheckedChange={(e) =>
                      handlerCheckbox({ name: 'bags', e: e as boolean })
                    }
                  />
                  <p>Bags</p>
                </div>
                <span className='text-muted-foreground'>(18)</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox />
                  <p>Bracelets</p>
                </div>
                <span className='text-muted-foreground'>(12)</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Checkbox
                    checked={value.rings}
                    onCheckedChange={(e) =>
                      handlerCheckbox({ name: 'rings', e: e as boolean })
                    }
                  />
                  <p>Rings</p>
                </div>
                <span className='text-muted-foreground'>(18)</span>
              </div>
            </div>
          </div>

        
          <div className='bg-white rounded-lg shadow p-4'>
            <h3 className='font-bold text-lg mb-4'>Price Range</h3>
            <Slider 
              defaultValue={[500]} 
              max={2000} 
              step={100} 
              className='w-full'
            />
            <div className='mt-2 flex justify-between text-sm text-muted-foreground'>
              <span>$0</span>
              <span>$2000</span>
            </div>
            <div className='mt-2 text-center text-sm font-medium'>
              $0 - $1000
            </div>
          </div>

      
          <div className='bg-white rounded-lg shadow p-4'>
            <h3 className='font-bold text-lg mb-4'>Color</h3>
            <div className='flex gap-3'>
              <button className='w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-gray-500'></button>
              <button className='w-8 h-8 rounded-full bg-yellow-100 border-2 border-gray-300 hover:border-gray-500'></button>
              <button className='w-8 h-8 rounded-full bg-pink-200 border-2 border-gray-300 hover:border-gray-500'></button>
              <button className='w-8 h-8 rounded-full bg-amber-800 border-2 border-gray-300 hover:border-gray-500'></button>
            </div>
          </div>

        
          <div className='bg-white rounded-lg shadow p-4'>
            <h3 className='font-bold text-lg mb-4'>Material</h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-2'>
                <Checkbox />
                <p>Leather</p>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox />
                <p>Canvas</p>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox />
                <p>Suede</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className='flex-1'>
          {category && (category === 'watches' || category === 'bags') && (
            <>
              <div className='flex justify-between items-center mb-6'>
                <div>
                  <h2 className='text-3xl font-bold capitalize'>{category}</h2>
                  <p className='text-muted-foreground mt-1'>24 products found</p>
                </div>
                <select className='px-4 py-2 border rounded-md'>
                  <option>Sort by: Newest</option>
                </select>
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className='relative bg-white rounded-lg shadow-md overflow-hidden'>
                    <div className='relative'>
                      <img
                        src={category === 'watches' ? watchesImage : bagImage}
                        alt={category}
                        className='w-full h-64 object-cover'
                      />
                      <button className='absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-gray-100'>
                        <FaRegHeart className='w-5 h-5' />
                      </button>
                    </div>
                    <div className='p-4'>
                      <h3 className='font-semibold text-lg mb-2'>
                        {category === 'watches' ? `Watch ${item}` : `Bag ${item}`}
                      </h3>
                      <div className='flex items-center gap-1 mb-2'>
                        <span className='text-yellow-400'>★★★★★</span>
                        <span className='text-sm text-muted-foreground'>(4.9)</span>
                      </div>
                      <div className='flex justify-between items-center mb-4'>
                        <span className='text-xl font-bold'>
                          ${category === 'watches' ? (1299 + item * 100).toLocaleString() : (420 + item * 50).toLocaleString()}
                        </span>
                      </div>
                      <button className='w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors'>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
