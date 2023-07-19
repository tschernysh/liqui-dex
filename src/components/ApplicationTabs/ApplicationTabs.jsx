import { useState } from 'react'
import s from './ApplicationTabs.module.scss'

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
        <a id='dashboard'>Dashboard</a>
        <a id='bonuses'>Bonuses</a>
        <a id='' disabled>Staking LDP</a>
        <a id='' disabled>Staking Pools</a>
        <a id='' disabled>LiquiDex Wallet</a>
      </div>
      <span style={
        {
          '--marker-left': `${tabs.findIndex(t => t === activeTab) * 100 / tabs.length}%`,
          '--marker-width': `${100 / tabs.length}%`
        }}></span>
    </div>
  )
}
