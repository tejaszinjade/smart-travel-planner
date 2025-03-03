import React, { useState } from "react";
import { db } from "@/service/firebaseConfig"; // Adjust if needed
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const MakeTrip = ({ user }) => {
  const [tripData, setTripData] = useState({
    title: "",
    location: "",
    tripPeriod: { start: "", end: "" },
    images: [],
    hotelsStayed: "",
    personalExperience: "",
    tips: "",
    budget: { cheap: "", moderate: "", expensive: "" },
    foodSuggestions: [],
    localGuides: [],
    hiddenGems: [],
    rating: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleArrayChange = (e, key) => {
    setTripData({ ...tripData, [key]: e.target.value.split(",") });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "UserTrips"), {
        ...tripData,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
      alert("Trip Created Successfully!");
      setTripData({
        title: "",
        location: "",
        tripPeriod: { start: "", end: "" },
        images: [],
        hotelsStayed: "",
        personalExperience: "",
        tips: "",
        budget: { cheap: "", moderate: "", expensive: "" },
        foodSuggestions: [],
        localGuides: [],
        hiddenGems: [],
        rating: 0,
      });
    } catch (error) {
      console.error("Error adding trip:", error);
      alert("Failed to create trip");
    }
  };
  
  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <br/>
      <br/>
      <br/>
      <h2 className="text-xl font-semibold mb-4">Create Your Travel Itinerary</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Trip Title" value={tripData.title} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="location" placeholder="Location" value={tripData.location} onChange={handleChange} required className="w-full p-2 border rounded" />

        <label>Trip Period:</label>
        <div className="flex space-x-2">
          <input type="date" name="tripPeriod.start" value={tripData.tripPeriod.start} onChange={(e) => setTripData({ ...tripData, tripPeriod: { ...tripData.tripPeriod, start: e.target.value } })} required className="w-1/2 p-2 border rounded" />
          <input type="date" name="tripPeriod.end" value={tripData.tripPeriod.end} onChange={(e) => setTripData({ ...tripData, tripPeriod: { ...tripData.tripPeriod, end: e.target.value } })} required className="w-1/2 p-2 border rounded" />
        </div>

        <input type="text" name="hotelsStayed" placeholder="Hotel Stayed" value={tripData.hotelsStayed} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="personalExperience" placeholder="Your Experience" value={tripData.personalExperience} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
        <input type="text" name="tips" placeholder="Travel Tips" value={tripData.tips} onChange={handleChange} className="w-full p-2 border rounded" />

        <label>Budget (USD):</label>
        <div className="flex space-x-2">
          <input type="text" name="budget.cheap" placeholder="Cheap" value={tripData.budget.cheap} onChange={(e) => setTripData({ ...tripData, budget: { ...tripData.budget, cheap: e.target.value } })} className="w-1/3 p-2 border rounded" />
          <input type="text" name="budget.moderate" placeholder="Moderate" value={tripData.budget.moderate} onChange={(e) => setTripData({ ...tripData, budget: { ...tripData.budget, moderate: e.target.value } })} className="w-1/3 p-2 border rounded" />
          <input type="text" name="budget.expensive" placeholder="Expensive" value={tripData.budget.expensive} onChange={(e) => setTripData({ ...tripData, budget: { ...tripData.budget, expensive: e.target.value } })} className="w-1/3 p-2 border rounded" />
        </div>

        <input type="text" name="foodSuggestions" placeholder="Food Suggestions (comma separated)" onChange={(e) => handleArrayChange(e, "foodSuggestions")} className="w-full p-2 border rounded" />
        <input type="text" name="localGuides" placeholder="Local Guide Contacts (comma separated)" onChange={(e) => handleArrayChange(e, "localGuides")} className="w-full p-2 border rounded" />
        <input type="text" name="hiddenGems" placeholder="Hidden Gems (comma separated)" onChange={(e) => handleArrayChange(e, "hiddenGems")} className="w-full p-2 border rounded" />

        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" value={tripData.rating} onChange={handleChange} className="w-full p-2 border rounded" />

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeTrip;








  {/*
  function MakeTrip() {
  return ( 
      <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
          <h2> </h2>
      </div>
    
  ) 
}

export default MakeTrip
*/}