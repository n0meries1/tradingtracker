import React from 'react'
import ProfilePicture from './ProfilePicture.tsx'
import MenuBar from './MenuBar.tsx'
import InputValues from './InputValues.tsx'
import TrackingTable from './TrackingTable.tsx'




const TradingInput: React.FC = () => {
  return (
    <div className='flex flex-col bg-primary'>
      <div className='flex justify-between w-full max-w-8xl px-60 py-8 text-2xl'>
        <div className='flex-none'>
          <h2 className='bg-accent p-2 rounded-md text-accent-content'>Trading Tracker</h2>
        </div>
        <div className='flex space-x-4'>
          <ProfilePicture src='rolex_submariner.jpg' alt='submariner' />
          <MenuBar />
        </div>
      </div>
      <p className='px-60 pt-24 pb-6 text-5xl text-primary-content font-bold'>Trade and Track</p>
      <InputValues/>
      <div className=''>
        <TrackingTable/>
      </div>
    </div>
  )
}

export default TradingInput;