import { useState } from 'react'
import s from './ApplicationTabs.module.scss'
import { Link } from 'react-router-dom'

const tabs = [
  'dashboard',
  'bonuses',
  '',
  '',
  ''
]

export const ApplicationTabs = () => {

  const [activeTab, setActiveTab] = useState('dashboard')

  const changeTab = (tabName) => {
    console.log(tabName);
    setActiveTab(tabName)
  }

  return (
    <div className={s.tab}>
      <div onClick={e => changeTab(e.target.id)} className={s.tab__element}>
        <Link to={'dashboard'} id='dashboard'>Dashboard</Link>
        <Link to={'bonuses'} id='bonuses'>Bonuses</Link>
        <Link id='' disabled>Staking LDP</Link>
        <Link id='' disabled>Staking Pools</Link>
        <Link id='' disabled>LiquiDex Wallet</Link>
      </div>
      <span style={
        {
          '--marker-left': `${tabs.findIndex(t => t === activeTab) * 100 / tabs.length}%`,
          '--marker-width': `${100 / tabs.length}%`
        }}></span>
    </div>
  )
}
