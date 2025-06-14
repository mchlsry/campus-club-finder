import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-32 text-gray-300 px-6">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-6">Page not found.</p>
      <Link
        to="/"
        className="text-blue-400 hover:underline font-medium"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
