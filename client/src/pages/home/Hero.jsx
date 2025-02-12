import { Link } from 'react-router-dom';
import hero1 from '../../assets/images/hero1.webp';
import hero2 from '../../assets/images/hero2.webp';
import hero3 from '../../assets/images/hero3.webp';
import hero4 from '../../assets/images/hero4.webp';
import { Store } from 'lucide-react';


const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <section className="w-full h-[80vh] px-8 bg-primary-content rounded-xl grid lg:grid-cols-2 lg:gap-24 content-center items-center">
      <div className="grid place-items-center lg:place-items-start gap-8 md:gap-10 text-center md:text-start">
        <h1 className='max-w-2xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight'>
          Mahalakshmi Cerramics
        </h1>

        <p className='max-w-xl text-md md:text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className=''>
          <Link to='inventory' className='btn btn-primary'>
            <Store />
            <span>Our Inventory</span>
          </Link>
        </div>
      </div>
      <div className='grid place-items-center'>
        <div className="hidden h-[28rem] xl:w-[28rem] lg:carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
          {carouselImages.map((image, index) => {
            return (
              <div key={image} className='carousel-item'>
                <img src={image} className='rounded-box h-full w-80 object-cover' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Hero;