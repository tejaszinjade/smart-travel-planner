import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tipId]/index.jsx'
import MyTrips from './my-trips/index.jsx'
import AddItinerary from './add-itirnerary/index.jsx'
import ViewCreatedItinerary from './view-created-itirnerary/index.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/create-trip',
      element:<CreateTrip/>
    },
    {
      path:'/view-trip/:tripId',
      element:<Viewtrip/>
    },
    {
      path:'/my-trips',
      element:<MyTrips/>
    },
    {
      path:'/add-itinerary',
      element:<AddItinerary/>
    },
    {
      path:'/view-created-itinerary',
      element:<ViewCreatedItinerary/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId= {import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header/>
      <Toaster/>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
