import Head from 'next/head';

export const Layout = ({ children, nombrePagina }) => {
	return (
		<>
			<Head>
				<title>
					{nombrePagina ? `Arquitectura - ${nombrePagina}` : 'Arquitectura'}
				</title>
			</Head>

			<div>{children}</div>
		</>
	);
};
