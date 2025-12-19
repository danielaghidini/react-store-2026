import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';

const products = [
	{ id: 1, title: "Tênis Nike Air", price: 499.90, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
	{ id: 2, title: "Tênis Adidas Run", price: 299.90, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2" },
	{ id: 3, title: "Puma Runner", price: 350.00, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa" },
	{ id: 4, title: "Relógio Smart", price: 899.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
	{ id: 5, title: "Fone Bluetooth", price: 250.00, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
	{ id: 6, title: "Câmera Instax", price: 450.00, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
	{ id: 7, title: "Mochila Urbana", price: 199.90, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62" },
	{ id: 8, title: "Óculos de Sol", price: 159.00, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f" },
];

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);

	function toggleTheme() {
		setIsDarkMode(!isDarkMode);
	}

	function addToCart() {
		setCartCount(cartCount + 1);
	}

	return (
		<div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
			<Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} cartCount={cartCount} />

			<main className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Nossos Produtos</h1>
					<p className="text-gray-600 dark:text-gray-400">Confira as melhores ofertas selecionadas para você.</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							title={product.title}
							price={product.price}
							image={product.image}
							onAddToCart={addToCart}
						/>
					))}
				</div>
			</main>

			<Footer />
		</div>
	)
}

export default App
