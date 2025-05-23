import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig'; // Make sure Firebase is configured
import 'animate.css';

function Hero() {
  const [recentTrips, setRecentTrips] = useState([]); // State to store the top 3 recent itineraries

  useEffect(() => {
    const fetchRecentItineraries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'itineraries'));
        const fetchedData = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by creation date (newest first)
          .slice(0, 3); // Limit to top 3 itineraries

        setRecentTrips(fetchedData);
      } catch (error) {
        console.error('Error fetching recent itineraries:', error);
      }
    };

    fetchRecentItineraries();
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-start justify-center pl-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="absolute top-20 left-10 z-10 flex flex-col items-start text-left gap-6 p-6 max-w-3xl">
        {/* Main Heading */}
        <h1 className="font-extrabold text-6xl md:text-5xl sm:text-4xl text-white leading-tight drop-shadow-xl">
          <span className="text-[#FFD700] text-6xl md:text-5xl sm:text-4xl font-bold animate__animated animate__fadeInDown animate__slow">
            Unleash Your Next Adventure:
          </span>
          <br />
          <br />
          <span className="animate__animated animate__fadeInUp animate__delay-1s">
            AI-Crafted Itineraries, <span><br /></span>Tailored Just for You!
          </span>
          <br />
          <br />
        </h1>

        {/* Description */}
        <p className="text-2xl md:text-xl sm:text-lg text-white drop-shadow-md animate__animated animate__fadeInUp animate__delay-2s">
          Your personal trip planner and travel curator,
          creating custom itineraries tailored to your interests and budget.
        </p>
        <br />

        {/* CTA Button */}
        <Link to={'/create-trip'} className="animate__animated animate__zoomIn animate__delay-3s">
          <Button className="bg-orange-500 text-white font-bold rounded-full px-10 py-4 text-2xl shadow-lg transition duration-300 transform hover:bg-orange-700 hover:scale-110">
            Get Started, It's Free
          </Button>
        </Link>
      </div>

      {/* Recent Trips Section */}
      <div className="absolute top-20 right-10 z-10 flex flex-col items-start text-left gap-6 p-6 max-w-md">
        <h2 className="font-bold text-white text-2xl animate__animated animate__fadeInRight">
          🌟 Recently Created Trips 🌍
        </h2>
        <div className="grid gap-4">
          {recentTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white bg-opacity-70 p-4 rounded-lg shadow-lg animate__animated animate__zoomIn"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                📍 {trip.location || 'Unknown Location'}
              </h3>
              <p className="text-sm text-gray-600">
                📅 {trip.startDate} to {trip.endDate}
              </p>
              <p className="text-sm text-gray-600">
                💰 <strong>Budget:</strong> {trip.budget || 'N/A'}
              </p>
              <Link
                to={`/view-created-itinerary/${trip.id}`}
                className="text-blue-500 text-sm underline mt-2 inline-block"
              >
                🔍 View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Hero;
