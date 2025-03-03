import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AIModal";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({
    location: null,
    noOfDays: "",
    budget: "",
    traveler: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      toast("⚠️ Please log in to generate a trip.");
      return;
    }

    // Check for missing required fields
    if (!formData?.location || !formData?.noOfDays || !formData?.budget || !formData?.traveler) {
      toast("⚠️ Please fill in all required fields before generating your trip.");
      return;
    }

    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location?.label)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log("--", result?.response?.text());
      setLoading(false);
      SaveAiTrip(result?.response?.text());
    } catch (error) {
      toast("❌ Failed to generate the trip. Please try again.");
      setLoading(false);
    }
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 w-full h-screen">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/bg3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 sm:px-10 md:px-32 lg:px-10 px-56 xl:px-5 mt-28 align-middle bg-white bg-opacity-50 p-8 rounded-xl shadow-lg w-full max-w-3xl">
        <h2 className="font-bold text-3xl text-gray-900 text-center">
          Share your adventure wishlist 🗺️✈️
        </h2>
        <p className="mt-3 text-gray-600 text-xl text-center">
          Just provide some basic information, and our trip planner will generate a customized itinerary.
        </p>

        {/* Form */}
        <div className="mt-10 flex flex-col gap-5">
          {/* Destination Input */}
          <div>
            <h2 className="text-xl my-3 font-medium">🌍 What's your dream destination?</h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                value: place,
                onChange: (v) => {
                  setPlace(v);
                  handleInputChange("location", v);
                },
              }}
            />
          </div>

          {/* Duration Input */}
          <div>
            <h2 className="text-xl my-3 font-medium">⏳ How long will your adventure last?</h2>
            <Input
              placeholder="Ex. 2"
              type="number"
              min="1"
              onChange={(e) => handleInputChange("noOfDays", e.target.value)}
            />
          </div>

          {/* Budget Selection */}
          <div>
            <h2 className="text-xl my-3 font-medium">💰 How Much Are You Looking to Spend?</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("budget", item.title)}
                  className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300 ${
                    formData?.budget === item.title ? "shadow-lg border-black bg-gray-100" : "bg-white"
                  }`}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Traveler Selection */}
          <div>
            <h2 className="text-xl my-3 font-medium">👥 Who's your travel buddy?</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("traveler", item.people)}
                  className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300 ${
                    formData?.traveler === item.people ? "shadow-lg border-black bg-gray-100" : "bg-white"
                  }`}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Trip Button */}
          <div className="my-10 justify-center flex">
            <Button
              disabled={loading || !formData?.location || !formData?.noOfDays || !formData?.budget || !formData?.traveler}
              onClick={OnGenerateTrip}
              className={`bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105
                ${
                  (!formData?.location || !formData?.noOfDays || !formData?.budget || !formData?.traveler)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
            >
              {loading ? <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" /> : "Generate Trip"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
