import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
    };

    try {
      const result = await GetPlaceDetails(data);
      const places = result?.data?.places;

      if (places && places.length > 0) {
        const photos = places[0].photos;

        if (photos && photos.length > 3) {
          const PhotoUrl = PHOTO_REF_URL.replace(
            '{NAME}',
            photos[3].name
          );
          setPhotoUrl(PhotoUrl);
        } else {
          console.warn("Photos array is empty or doesn't have enough items.");
          setPhotoUrl('/placeholder.jpg'); // Fallback
        }
      } else {
        console.warn("Places array is empty or undefined.");
        setPhotoUrl('/placeholder.jpg'); // Fallback
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
      setPhotoUrl('/placeholder.jpg'); // Fallback
    }
  };

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName} target='_blank'> 
      <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all
      hover:shadow-md cursor-pointer'>
        <img 
          src={photoUrl ? photoUrl : '/placeholder.jpg'}
          className='w-[130px] h-[130px] rounded-xl object-cover'
          alt={place.placeName}
        />
        <div>
          <h2 className='font-bold text-lg'>{place.placeName}</h2>
          <p className='text-sm text-gray-400'>{place.placeDetails}</p>
          <h2 className='mt-2'>🕙 {place.timeTravel}</h2>
          {/*<Button size='sm'><FaMapLocationDot /></Button>*/}
        </div>
      </div>
    </Link>  
  );
}

export default PlaceCardItem;
