import { Outlet, useNavigate } from 'react-router-dom'
import s from './application-layout.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationActionCreator } from "../../store/reducers/application/action-creator";
import { routerBook } from 'routes/routerBook';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import { AccountActionCreator } from 'store/reducers/account/action-creator';
import { ApplicationTabs } from 'components/ApplicationTabs/ApplicationTabs';
import { LandingHeader } from 'components/LandingHeader/LandingHeader';
import { DepositBlock } from 'components/DepositBlock/DepositBlock';
import { LandingFooter } from 'components/LandingFooter/LandingFooter';
import { ApplicationDeposits } from 'components/ApplicationDeposits/ApplicationDeposits';
import { ApplicationStatistics } from 'components/ApplicationStatistics/ApplicationStatistics';
import { ApplicationAffiliate } from 'components/ApplicationAffilate/ApplicationAffiliate';
import Config from 'config'

export const ApplicationLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { walletRPC } = useSelector(state => state.applicationReducer)
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()

  const { redirectTo, walletAddress } = useSelector(state => state.applicationReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isDisconnected } = useAccount()

  useEffect(() => {
    if (chain?.id !== Config().CHAIN_ID) {
      switchNetwork?.(Config().CHAIN_ID)
    }
  }, [chain])

  useEffect(() => {
    if (!!redirectTo) {
      const path = redirectTo
      dispatch(ApplicationActionCreator.setRedirectTo(null))
      navigate(path)
    }
  }, [redirectTo])

  useEffect(() => {
    if (isDisconnected || !walletRPC) {
      dispatch(AccountActionCreator.resetUserInfo())
    }
  }, [isDisconnected])

  useEffect(() => {
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
      <LandingHeader />
      <ApplicationTabs />
      <Outlet />
      <LandingFooter />
    </>
  )
}
