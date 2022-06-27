import Image from 'next/image';

import icono from '../../public/img/icono_telefono.png';

export const Footer = () => {
	return (
		<footer className='flex flex-col justify-end bg-[url("/img/footer_bg.jpg")] bg-center h-60 mt-4 pb-8'>
			<div className='container flex justify-between items-center text-white pb-12'>
				<h1 className='text-3xl text-slate-200 font-thin'>
					Arquitectuta<span className='text-white font-bold'>Bosque</span>
				</h1>

				<div>
					<div className='flex space-x-4'>
						<Image src={icono} alt='icono' height={8} width={20} />
						<p>01-800-12345-2587</p>
					</div>
				</div>
			</div>

			<nav className='container flex justify-end text-white mt-4'>
				<ul className='flex space-x-8'>
					<li>Inicio</li>
					<li>Nosotros</li>
					<li>Modelos</li>
					<li>Galería</li>
					<li>Contacto</li>
				</ul>
			</nav>
		</footer>
	);
};
