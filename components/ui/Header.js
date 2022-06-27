import Image from 'next/image';

import icono from '../../public/img/icono_telefono.png';

export const Header = () => {
	return (
		<header className='flex flex-col justify-between bg-[url("/img/superior.jpg")] bg-no-repeat bg-cover bg-center h-96'>
			<div>
				<div className='container flex justify-between items-center text-white py-4'>
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
			</div>

			<div className='container text-white flex justify-end p-8'>
				<div className='text-right'>
					<h3 className='text-3xl font-bold'>Tu casa en el bosque</h3>
					<p>También constuimos tu casa a tu gusto</p>
				</div>
			</div>
		</header>
	);
};
