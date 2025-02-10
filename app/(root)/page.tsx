import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Nicholas', lastName: 'Alvianoz', email: 'alvianoz5264@gmail.com'};

  return (
    <section className='home'>
        <div className="home-content">
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently"
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>
            RECENT TRANSACTION
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 126.50}, {currentBalance: 546.50}]}
            />
        </div>
    </section>
  )
}

export default Home