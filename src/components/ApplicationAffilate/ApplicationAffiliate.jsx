import s from './ApplicationAffiliate.module.scss'
import affiliateIcon from 'media/img/affiliate.png'
import Copy from 'media/img/copy.png'
import Person from 'media/img/person.png'
import { useSelector } from 'react-redux'
import Config from 'config/index'
import { useContext, useMemo } from 'react'
import { ToastifyContext } from 'applicationContext'

const affiliateData = [
  { percent: '5' },
  { percent: '2' },
  { percent: '1' },
  { percent: '0.5' },
  { percent: '0.5' },
]


export const ApplicationAffiliate = () => {

  const { structure, refTurnover } = useSelector(state => state.accountReducer.userInfo)

  const baseUrl = Config().BASE_URL;
  const { deposits } = useSelector(store => store.accountReducer.userInfo)

  const walletAddress = useSelector(store => store.applicationReducer.walletAddress)
  const defaultReferrer = useSelector(store => store.applicationReducer.defaultReferrer)
  const upline = useSelector(store => store.accountReducer.userInfo.upline)
  const referrer = upline || localStorage.getItem('refAddress') || defaultReferrer

  const { setToasifyData } = useContext(ToastifyContext)

  const referralUrl = useMemo(() => {
    return `${baseUrl}${walletAddress}`
  }, [walletAddress, deposits])

  const copyReferralUrlToClipboard = () => {
    navigator.clipboard.writeText(referralUrl)

    setToasifyData({
      text: 'The referral link has been copied!',
      type: 'success',
      duration: 3000
    })
  }

  const sliceAmount = window.innerWidth <= 640 ? 10 : 15


  const showRealRef = (rl, index) => {
    if (!rl) return 0
    if (index === 1) {
      return rl / 0.3
    } else if (index === 2) {
      return rl / 0.15
    } else return rl
  }

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
                <div className={s.landing__affiliate__tiles__tile__box}>
                  <div className={s.landing__affiliate__tiles__tile__level}>
                    <p>Level {index + 1}</p>
                    <span>{percent}%</span>
                  </div>
                  <div className={s.landing__affiliate__tiles__tile__wrapper}>
                    <div className={s.landing__affiliate__tiles__tile__turnover}>
                      <p>BUSD</p>
                      <span>{showRealRef(refTurnover[index], index)}</span>
                    </div>
                    <div className={s.landing__affiliate__tiles__tile__refs}>
                      <img src={Person} />
                      <span>{structure[index] ? structure[index] : 0}</span>
                    </div>
                  </div>
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
            <a disable>{walletAddress?.slice(0, sliceAmount)}...{walletAddress?.slice(-sliceAmount)}</a>
            <img onClick={copyReferralUrlToClipboard} src={Copy} />
          </div>
        </div>
        <div className={s.tile}>
          <span>Your Upliner</span>
          <div>
            <a disable>{referrer?.slice(0, sliceAmount)}...{referrer?.slice(-sliceAmount)}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

