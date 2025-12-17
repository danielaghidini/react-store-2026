import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
}

export function ProductCard({ image, title, price }: ProductCardProps) {
    return (
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="relative overflow-hidden h-48">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-5">
                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">{title}</h2>
                <div className="flex items-end justify-between gap-2 mt-2">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Preço</span>
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            R$ {price.toFixed(2)}
                        </span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        <span className="hidden sm:inline font-medium">Adicionar</span>
                    </button>
                </div>
            </div>
        </div>
    );
}