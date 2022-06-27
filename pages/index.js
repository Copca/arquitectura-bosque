import { Layout, Header, Nosotros, Modelos, Galeria, Footer } from '../components';

export default function Index() {
	return (
		<Layout>
			<Header />

			<Nosotros />

			<Modelos />

			<Galeria />

			<Footer />
		</Layout>
	);
}
