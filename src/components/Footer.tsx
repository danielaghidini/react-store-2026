export function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8 mt-auto transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="font-semibold text-white text-lg">LojaVirtual</p>
                        <p className="text-sm text-gray-400">© 2026 Todos os direitos reservados.</p>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Sobre</a>
                        <a href="#" className="hover:text-white transition-colors">Contato</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
