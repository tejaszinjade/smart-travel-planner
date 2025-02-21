import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
    const navigation = useNavigation();
    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        GetUserTrips();
    }, []);

    /**
     * Function to fetch user trips from Firebase
     */
    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            navigation('/');
            return;
        }

        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);
        setUserTrips([]);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            setUserTrips((prevVal) => [...prevVal, doc.data()]);
        });
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center ">

        {/* Background Video */}
             <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover">
                   <source src="/bg5.mp4" type="video/mp4" />
             </video>
             <div className="absolute top-0 left-0 w-full h-full "></div>

            {/* Content Container */}
            <div className="relative z-10 sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 bg-black bg-opacity-40 p-8 rounded-xl shadow-xl">
                <br/>
                <h2 className="font-bold text-3xl text-white">My Trips</h2>
                <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
                    {userTrips?.length > 0 ? (
                        userTrips.map((trip, index) => <UserTripCardItem trip={trip} key={index} />)
                    ) : (
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className="h-[220px] w-[220px] bg-slate-200 animate-pulse rounded-xl"></div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyTrips;