import { ShoppingCart, Menu, Search, Sun, Moon } from 'lucide-react';

interface HeaderProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

export function Header({ toggleTheme, isDarkMode }: HeaderProps) {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-200" />
                    </button>
                    <a href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
                        Loja<span className="text-gray-900 dark:text-white">Virtual</span>
                    </a>
                </div>

                {/* Search Bar - Hidden on mobile */}
                <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        className="w-full px-4 py-2 pl-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    />
                    <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        title={isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
                    >
                        {isDarkMode ? (
                            <Sun className="w-6 h-6 text-yellow-500" />
                        ) : (
                            <Moon className="w-6 h-6 text-gray-600" />
                        )}
                    </button>

                    <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors group">
                        <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-600" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            0
                        </span>
                    </button>
                    <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Entrar
                    </button>
                    <button className="hidden md:block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Cadastrar
                    </button>
                </div>
            </div>

            {/* Mobile Search - Visible only on mobile */}
            <div className="md:hidden px-4 pb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full px-4 py-2 pl-10 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
            </div>
        </header>
    );
}
