import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'


const Home = () => {
      const loggedIN = { firstName: 'Leo'}

  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIN?.firstName || 'Guest'}
            subtext='Access and manage your account and transaction efficiently.' 
            />
            
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={2003.08}
            />
          </header>
      </div>
    </section>
  )
}

export default Home