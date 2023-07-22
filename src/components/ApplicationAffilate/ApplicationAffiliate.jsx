import s from './ApplicationAffiliate.module.scss'
import affiliateIcon from 'media/img/affiliate.png'
import Copy from 'media/img/copy.png'
import Person from 'media/img/person.png'

const affiliateData = [
  { percent: '5' },
  { percent: '2' },
  { percent: '1' },
  { percent: '0.5' },
  { percent: '0.5' },
]


export const ApplicationAffiliate = () => {

  return (
    <div className={s.affiliate}>
      <section className={s.landing__affiliate}>
        <h3>Affiliate Program</h3>
        <p className={s.landing__affiliate__description}>You can already calculate the efficiency and
          profitability of BUSD staking on our platform. Your staking profit will be accrued every minute, and
          the withdrawal is not limited in any way</p>

        <div className={s.landing__affiliate__tiles}>
          {affiliateData.map(({ percent }, index) => {
            return (
              <div key={index} className={s.landing__affiliate__tiles__tile}>
                <div className={s.landing__affiliate__tiles__tile__level}>
                  <p>Level {index + 1}</p>
                  <span>{percent}%</span>
                </div>
                <div className={s.landing__affiliate__tiles__tile__turnover}>
                  <p>BUSD</p>
                  <span>1 000</span>
                </div>
                <div className={s.landing__affiliate__tiles__tile__refs}>
                  <img src={Person} />
                  <span>556</span>
                </div>
                <img src={affiliateIcon} className={s.landing__affiliate__tiles__tile__affiliate} alt={`affiliate${index + 1}`} />
              </div>
            )
          })}
        </div>
      </section>
      <div className={s.referrals}>
        <div className={s.tile}>
          <span>Your Referral Link</span>
          <div>
            <a disable>0x40f6F0c0BF3c....771B036c516973145</a>
            <img src={Copy} />
          </div>
        </div>
        <div className={s.tile}>
          <span>Your Upliner</span>
          <div>
            <a disable>0x40f6F0c0BF3c....771B036c516973145</a>
          </div>
        </div>
      </div>
    </div>
  )
}

