import React from 'react'

function InfoSection({trip}){
    return( 
        <div>
            <img src="/placeholder.jpg" className='h-[340px] w-full object-cover rounded-xl'/>
            <div className='mhy-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2> 
            </div>
        
        </div>
    )
}
export default InfoSection