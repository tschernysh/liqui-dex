import { Outlet, useNavigate } from 'react-router-dom'
import s from './application-layout.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationActionCreator } from "../../store/reducers/application/action-creator";
import { routerBook } from 'routes/routerBook';
import { useAccount } from 'wagmi';
import { AccountActionCreator } from 'store/reducers/account/action-creator';
import { ApplicationTabs } from 'components/ApplicationTabs/ApplicationTabs';
import { LandingHeader } from 'components/LandingHeader/LandingHeader';
import { DepositBlock } from 'components/DepositBlock/DepositBlock';
import { LandingFooter } from 'components/LandingFooter/LandingFooter';

export const ApplicationLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { redirectTo, walletAddress } = useSelector(state => state.applicationReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isDisconnected } = useAccount()

  useEffect(() => {
    return
    if (!!redirectTo) {
      const path = redirectTo
      dispatch(ApplicationActionCreator.setRedirectTo(null))
      navigate(path)
    }
  }, [redirectTo])

  useEffect(() => {
    return
    if (isDisconnected) {
      dispatch(AccountActionCreator.resetUserInfo())
    }
  }, [isDisconnected])

  useEffect(() => {
    return
    if (!walletAddress) {
      navigate(routerBook.main)
    }
  }, [walletAddress])
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isNavOpen]);

  return (
    <>
    
    <main className={s.app}>
      <section className={s.app__body}>
        <LandingHeader />
        <div className={s.app__body__content_wrapper}>
          <div className={s.app__body__content_wrapper__content}>
            <ApplicationTabs />
            <DepositBlock />
          </div>
        </div>
        
      </section>
    </main>
    <LandingFooter />
    </>
  )
}
