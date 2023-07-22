import { ApplicationDeposits } from "components/ApplicationDeposits/ApplicationDeposits"
import { ApplicationStatistics } from "components/ApplicationStatistics/ApplicationStatistics"
import { DepositBlock } from "components/DepositBlock/DepositBlock"
import s from './ApplicationDashboard.module.scss'

export const ApplicationDashboard = () => {
  return (
    <div className={s.dashboard}>
      <DepositBlock />
      <ApplicationDeposits />
      <ApplicationStatistics />
    </div >
  )
}
