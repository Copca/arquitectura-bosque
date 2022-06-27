import Image from 'next/image';

import galeria1 from '../public/img/galeria_1.jpg';
import galeria2 from '../public/img/galeria_2.jpg';
import galeria3 from '../public/img/galeria_3.jpg';
import galeria4 from '../public/img/galeria_4.jpg';
import galeria5 from '../public/img/galeria_5.jpg';
import galeria6 from '../public/img/galeria_6.jpg';
import galeria7 from '../public/img/galeria_7.jpg';

export const Galeria = () => {
	return (
		<section className='container py-4'>
			<h2 className='text-4xl text-center font-bold mb-4'>Galería</h2>

			<div className='grid md:grid-cols-3 gap-4'>
				<div className='relative'>
					<Image src={galeria1} alt='foto 1' />
				</div>

				<div className='relative col-start-1 row-span-2  h-full'>
					<Image src={galeria2} alt='foto 2' />
				</div>

				<div className='relative row-start-1 col-start-2 w-full h-full'>
					<Image src={galeria3} alt='foto 3' />
				</div>

				<div className='relative w-full h-full'>
					<Image src={galeria4} alt='foto 4' />
				</div>

				<div className='relative w-full h-full'>
					<Image src={galeria5} alt='foto 5' />
				</div>

				<div className='relative row-start-1 col-start-3 row-span-2 w-full h-full'>
					<Image src={galeria6} alt='foto 6' />
				</div>

				<div className='relative w-full h-full'>
					<Image src={galeria7} alt='foto 7' />
				</div>
			</div>
		</section>
	);
};
