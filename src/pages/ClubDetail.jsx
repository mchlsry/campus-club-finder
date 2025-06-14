import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs';
import { useState, useEffect } from 'react';

export default function ClubDetail() {
  const { clubId } = useParams();
  const [joined, setJoined] = useState(false);

  const club = clubs.find(c => c.id === clubId);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    setJoined(joinedClubs.includes(clubId));
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    joinedClubs.push(clubId);
    localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
    setJoined(true);
  };

  if (!club) {
    return <div className="text-center mt-20 text-red-500 text-xl">Club not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto mt-10 text-white">
      <img src={club.image} alt={club.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-4xl font-bold mt-6 mb-2 text-blue-400">{club.name}</h1>
      <p className="mb-4 text-gray-300">{club.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
      <ul className="mb-6 list-disc list-inside text-gray-200">
        {club.events.map((event, i) => (
          <li key={i}>
            {event.name} – <span className="text-sm text-gray-400">{event.date}</span>
          </li>
        ))}
      </ul>

      {joined ? (
        <p className="text-green-400 font-semibold">You have joined this club! 🎉</p>
      ) : (
        <button
          onClick={handleJoin}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
        >
          Join Club
        </button>
      )}
    </div>
  );
}
