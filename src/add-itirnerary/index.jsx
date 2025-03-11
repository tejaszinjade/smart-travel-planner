import React, { useState } from 'react';
import { db } from '@/service/firebaseConfig'; // Ensure Firebase is set up properly
import { collection, addDoc } from 'firebase/firestore';

function AddItinerary() {
  const [tripDetails, setTripDetails] = useState({
    budget: '',
    hotel: '',
    guideContact: '',
    mapLink: '',
    tripType: '',
    hiddenGems: '',
    mustVisit: '',
    season: '',
    location: '',
    startDate: '',
    endDate: '',
    transport: '',
    restaurants: '',
    emergencyNumbers: '',
    currency: '',
    packingList: '',
    favoriteMoment: '',
    challenges: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'itineraries'), tripDetails);
      alert('Itinerary added successfully!');
      setTripDetails({
        budget: '',
        hotel: '',
        guideContact: '',
        mapLink: '',
        tripType: '',
        hiddenGems: '',
        mustVisit: '',
        season: '',
        location: '',
        startDate: '',
        endDate: '',
        transport: '',
        restaurants: '',
        emergencyNumbers: '',
        currency: '',
        packingList: '',
        favoriteMoment: '',
        challenges: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg2.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Create Your Itinerary
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Basic Info
              </h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Budget
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={tripDetails.budget}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter budget"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    name="hotel"
                    value={tripDetails.hotel}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Hotel where you stayed"
                  />
                </div>
              </div>
            </div>

            {/* Travel Details Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Travel Details
              </h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={tripDetails.location}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter trip location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={tripDetails.startDate}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={tripDetails.endDate}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mode of Transport
                  </label>
                  <input
                    type="text"
                    name="transport"
                    value={tripDetails.transport}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="e.g., Flight, Train, Car"
                  />
                </div>
              </div>
            </div>

            {/* Recommendations Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Recommendations
              </h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Hidden Gems
                  </label>
                  <textarea
                    name="hiddenGems"
                    value={tripDetails.hiddenGems}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter hidden gems"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Must Visit Places
                  </label>
                  <textarea
                    name="mustVisit"
                    value={tripDetails.mustVisit}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter must-visit places"
                  />
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Additional Info
              </h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Emergency Numbers
                  </label>
                  <input
                    type="text"
                    name="emergencyNumbers"
                    value={tripDetails.emergencyNumbers}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Local emergency contacts"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Local Currency
                  </label>
                  <input
                    type="text"
                    name="currency"
                    value={tripDetails.currency}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Currency used & exchange rate"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItinerary;
