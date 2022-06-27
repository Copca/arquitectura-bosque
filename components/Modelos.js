export const Modelos = () => {
	return (
		<section className='container mt-8 py-8'>
			<h2 className='text-4xl text-center font-bold mb-4'>
				Conoce nuestros Modelos
			</h2>

			<div className='md:flex justify-start items-end bg-[url("/img/modelo_basico.jpg")] bg-no-repeat bg-right-top h-40rem md:h-96 mb-12'>
				<div className='md:w-2/4 bg-white p-8 '>
					<h2 className='text-3xl font-bold mb-4'>Modelo Básico</h2>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						alias ab, suscipit nihil est aliquam nam repudiandae quas
						sapiente.
					</p>
					<a
						href='#'
						className='btn hover:bg-slate-300 text-gray-700 shadow shadow-gray-500 border my-4'
					>
						Más Información
					</a>
				</div>
			</div>

			<div className='md:flex justify-end items-start bg-[url("/img/modelo_premier.jpg")] bg-no-repeat bg-left-bottom h-40rem md:h-96 mb-12'>
				<div className='md:w-2/4 bg-white p-8 '>
					<h2 className='text-3xl font-bold mb-4'>Modelo Premier</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						alias ab, suscipit nihil est aliquam nam repudiandae quas
						sapiente.
					</p>
					<a
						href='#'
						className='btn hover:bg-slate-300 text-gray-700 shadow shadow-gray-500 border my-4'
					>
						Más Información
					</a>
				</div>
			</div>

			<div className='md:flex justify-start items-start bg-[url("/img/modelo_elite.jpg")] bg-no-repeat bg-right-bottom h-40rem md:h-96 mb-12'>
				<div className='md:w-2/4 bg-white p-8 '>
					<h2 className='text-3xl font-bold mb-4'>Modelo Elite</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
						alias ab, suscipit nihil est aliquam nam repudiandae quas
						sapiente.
					</p>
					<a
						href='#'
						className='btn hover:bg-slate-300 text-gray-700 shadow shadow-gray-500 border my-4'
					>
						Más Información
					</a>
				</div>
			</div>
		</section>
	);
};
