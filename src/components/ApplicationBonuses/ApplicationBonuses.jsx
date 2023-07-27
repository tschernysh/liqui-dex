import { ApplicationAffiliate } from "components/ApplicationAffilate/ApplicationAffiliate"
import { LeaderProgram } from "components/LeaderProgram/LeaderProgram"
import s from './ApplicationBonuses.module.scss'

export const ApplicationBonuses = () => {

  return (
    <div className={s.bonuses}>
      <ApplicationAffiliate />
      <LeaderProgram />
      <p className={s.landing__leader__description}>The leadership bonus is calculated as the sum of all
        deposits of your first 3 referral lines, and the coefficient for the 1st level is 1, for the second
        0.3 and for the third 0.15.</p>
    </div>
  )
}
