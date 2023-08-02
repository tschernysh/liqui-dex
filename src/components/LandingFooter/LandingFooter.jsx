import { useSelector } from "react-redux"
import s from './LandingFooter.module.scss'
import Copy from 'media/img/copy.png'
import FullLogo from 'media/img/fullLogo.png'
import Profile from 'media/img/profile.png'
import Telegram from 'media/img/telegram.png'
import Config from 'config'
import { useContext, useMemo } from "react"
import { ToastifyContext } from "applicationContext"
import { slice } from "viem"
import { routerBook } from "routes/routerBook"
import { useLocation } from "react-router-dom"
import { useDisconnect } from "wagmi"

export const LandingFooter = ({ signInButtonClickHandler }) => {

  const baseUrl = Config().BASE_URL;
  const { deposits } = useSelector(store => store.accountReducer.userInfo)
  const location = useLocation();
  const { disconnect } = useDisconnect();

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

  const buttonContent = useMemo(() => {
    if (walletAddress) {
      return 'Disconnect'
    }

    return 'Login'
  }, [location.pathname, walletAddress])

  const buttonClickHandler = useMemo(() => {
    if (location.pathname === routerBook.dashboard || location.pathname === routerBook.bonuses) {
      return disconnect;
    }

    return signInButtonClickHandler
  }, [location.pathname, walletAddress])

  const sliceAmount = window.innerWidth <= 640 ? 10 : 15

  return (
    <footer className={s.footer}>
      <div className={s.footer__wrapper}>
        <img className={s.bottom__image_mobile} src={FullLogo} alt="" />
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
        <div className={s.bottom}>
          <div><img className={s.bottom__image_desktop} src={FullLogo} alt="" /></div>
          <div>
            <a className={s.bottom__folow_us}>
              <span>Follow us</span>
              <img src={Telegram} alt="" />
            </a>
          </div>
          <div className={s.bottom__login}>
            <button onClick={buttonClickHandler} className={s.header__wallet_desktop}>
              <img src={Profile} />
              <span >{buttonContent}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
