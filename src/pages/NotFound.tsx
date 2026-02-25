import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg"
            >
                Go Back Home
            </Link>
        </div>
    );
}
