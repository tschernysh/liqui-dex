import { useSelector } from "react-redux"
import s from './LandingFooter.module.scss'
import Copy from 'media/img/copy.png'
import FullLogo from 'media/img/fullLogo.png'
import Profile from 'media/img/profile.png'
import Telegram from 'media/img/telegram.png'
import Config from 'config'
import { useContext, useMemo } from "react"
import { ToastifyContext } from "applicationContext"

export const LandingFooter = () => {

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

  return (
    <footer className={s.footer}>
      <div className={s.footer__wrapper}>
        <div className={s.referrals}>
          <div className={s.tile}>
            <span>Your Referral Link</span>
            <div>
              <a disable>{walletAddress.slice(0, 15)}...{walletAddress.slice(-15)}</a>
              <img onClick={copyReferralUrlToClipboard} src={Copy} />
            </div>
          </div>
          <div className={s.tile}>
            <span>Your Upliner</span>
            <div>
              <a disable>{referrer.slice(0, 15)}...{referrer.slice(-15)}</a>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div><img src={FullLogo} alt="" /></div>
          <div>
            <a>
              <span>Follow us</span>
              <img src={Telegram} alt="" />
            </a>
          </div>
          <div>
            <button>
              <img src={Profile} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
