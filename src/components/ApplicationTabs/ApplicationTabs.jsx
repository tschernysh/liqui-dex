import s from './ApplicationTabs.module.scss'


export const ApplicationTabs = () => {

  return (
    <div className={s.tab}>
      <div className={s.tab__element}>
        <a>Dashboard</a>
        <a>Bonuses</a>
        <a disabled>Staking LDP</a>
        <a disabled>Staking Pools</a>
        <a disabled>LiquiDex Wallet</a>
      </div>
    </div>
  )
}
