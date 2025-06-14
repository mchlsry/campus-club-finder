import { useState } from 'react';
import { clubs as allClubs } from '../data/clubs';
import { Link } from 'react-router-dom';

export default function Clubs() {
  const [sortOrder, setSortOrder] = useState('az'); // 'az' or 'za'
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  // Sorting logic
  const sortedClubs = [...allClubs].sort((a, b) => {
    if (sortOrder === 'az') return a.name.localeCompare(b.name);
    else return b.name.localeCompare(a.name);
  });

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold text-blue-500">Student Clubs</h1>

        <div className="flex gap-4 flex-wrap">
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
          >
            <option value="az">Name A-Z</option>
            <option value="za">Name Z-A</option>
          </select>

          <button
            onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            View: {view === 'grid' ? 'Grid' : 'List'}
          </button>
        </div>
      </div>

      <div
        className={
          view === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
            : 'flex flex-col gap-6'
        }
      >
        {sortedClubs.map(club => (
          <div
            key={club.id}
            className="bg-gray-800 text-white rounded-lg shadow overflow-hidden flex flex-col sm:flex-row"
          >
            <img
              src='./public/image/clubs.jpg'
              alt={club.name}
              className={
                view === 'grid'
                  ? 'w-full h-48 object-cover'
                  : 'w-full sm:w-64 h-48 object-cover'
              }
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{club.name}</h2>
                <p className="text-gray-300 mt-2">{club.shortDescription}</p>
              </div>
              <Link
                to={`/clubs/${club.id}`}
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
