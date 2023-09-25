import { useState } from "react";

import { Button} from "../components";
import { item3} from "../assets/images";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
           Pioneering 
          </span>
          <br />
          <span className='text-coral-green inline-block mt-3'>Sanitary</span> Care
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Transforming waste management with Smart technology: Enhancing Hygiene,
          Sustainability , Communtiy well-being     
                  </p>

        <Button label='Shop now' iconURL={arrowRight} />

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={item3}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

      </div>
    </section>
  );
};

export default Hero;
