import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  // Ensure tripData and itinerary exist and are arrays
  if (!trip || !trip.tripData || !Array.isArray(trip.tripData.itinerary)) {
    console.error("❌ tripData.itinerary is missing or not an array:", trip?.tripData?.itinerary);
    return <p className="text-red-500">No itinerary data available.</p>;
  }

  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>    

      <div>
        {trip.tripData.itinerary.map((item, index) => (
          <div key={index} className="mt-5"> 
            <h2 className="font-medium text-lg">Day {item.day}</h2>   
            <div className="grid md:grid-cols-2 gap-5">
              {Array.isArray(item.plan) ? (
                item.plan.map((place, idx) => (
                  <div key={idx}>
                    <h2 className="font-medium text-sm text-orange-600">{place.time}</h2>
                    <PlaceCardItem place={place} />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No places available for this day.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;