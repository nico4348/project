import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const PageNotFound = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full text-center">
				<div className="h-20 w-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
					<span className="text-white font-bold text-2xl">404</span>
				</div>
				<h1 className="text-3xl font-extrabold text-gray-900">Página no encontrada</h1>
				<p className="mt-2 text-sm text-gray-600">
					Lo sentimos, no pudimos encontrar la página que buscas.
				</p>
				<div className="mt-6">
					<Link
						to="/"
						className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
					>
						<Home className="mr-2 h-4 w-4" />
						Volver al inicio
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;
