import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const gridData = [
  {
    text: 'Total Value Locked',
    value: '$0'
  },
  {
    text: 'Apy',
    value: '3128%'
  },
  {
    text: 'Number of Stakers',
    value: 1
  }
]
const Staking = () => {
  return (
    <div className="">
      <Navbar />
      <header className='pt-[92px] bg-stakingMobile md:bg-stakingDesktop bg-cover bg-center h-[237px] md:h-[297px]'>
        <div className='font-raj uppercase flex flex-col justify-center items-center'>
          <h1 className='text-[30px] font-bold leading-3'>Staking</h1>
          <h2 className='text-sm font-bold leading-[0.25rem]'>Home/Staking</h2>
        </div>
      </header>
      <main className='px-4 font-raj'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {gridData.map((item, index)=> (
            <div key={index}>
              <div>{item.value}</div>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
export default Staking;