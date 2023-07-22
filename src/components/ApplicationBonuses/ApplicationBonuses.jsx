import { ApplicationAffiliate } from "components/ApplicationAffilate/ApplicationAffiliate"
import { LeaderProgram } from "components/LeaderProgram/LeaderProgram"
import s from './ApplicationBonuses.module.scss'

export const ApplicationBonuses = () => {

  return (
    <div className={s.bonuses}>
      <ApplicationAffiliate />
      <LeaderProgram />
    </div>
  )
}
