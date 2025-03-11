import React, { useEffect, useState } from 'react';
import { db } from '@/service/firebaseConfig'; // Ensure Firebase is configured properly
import { collection, getDocs } from 'firebase/firestore';

function ViewCreatedItinerary() {
  const [itineraries, setItineraries] = useState([]); // State to store fetched itineraries
  const [loading, setLoading] = useState(true); // State to indicate loading status

  // Fetch itineraries from Firebase
  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'itineraries'));
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Add the document ID
          ...doc.data(), // Spread the rest of the data
        }));
        setItineraries(fetchedData);
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Error fetching itineraries: ', error);
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  // Show loading state while fetching data
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-blue-600">Loading itineraries...</p>
      </div>
    );
  }

  // Render if no itineraries are found
  if (itineraries.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-gray-600">No itineraries found. Please create one!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">View Created Itineraries</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {itineraries.map((itinerary) => (
            <div key={itinerary.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {itinerary.location || 'Unknown Location'}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{itinerary.startDate} to {itinerary.endDate}</p>
              <ul className="space-y-2">
                <li>
                  <strong>Budget:</strong> {itinerary.budget || 'N/A'}
                </li>
                <li>
                  <strong>Hotel:</strong> {itinerary.hotel || 'N/A'}
                </li>
                <li>
                  <strong>Transport:</strong> {itinerary.transport || 'N/A'}
                </li>
                <li>
                  <strong>Guide:</strong> {itinerary.guideContact || 'N/A'}
                </li>
                <li>
                  <strong>Must Visit:</strong> {itinerary.mustVisit || 'N/A'}
                </li>
                <li>
                  <strong>Hidden Gems:</strong> {itinerary.hiddenGems || 'N/A'}
                </li>
                <li>
                  <strong>Season to Visit:</strong> {itinerary.season || 'N/A'}
                </li>
                <li>
                  <strong>Map Link:</strong>{' '}
                  <a
                    href={itinerary.mapLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on Map
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewCreatedItinerary;
