import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { routerBook } from 'routes/routerBook';
import { ApplicationActionCreator } from 'store/reducers/application/action-creator';
import { useWeb3Modal } from "@web3modal/react";
import { LandingHeader } from "../../components/LandingHeader/LandingHeader";
import { LandingFooter } from "../../components/LandingFooter/LandingFooter";

export const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { walletAddress, redirectTo } = useSelector(state => state.applicationReducer)
  const { open } = useWeb3Modal();
  let { state } = useLocation();

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signInButtonClickHandler = useCallback(() => {
    if (!walletAddress) {
      open()
    } else {
      navigate(routerBook.dashboard, { state: { force: true } })
    }
  }, [window.wallet, walletAddress])

  useEffect(() => {
    if (!!redirectTo && !state?.force) {
      const path = redirectTo
      dispatch(ApplicationActionCreator.setRedirectTo(null))
      navigate(path)
    }
  }, [redirectTo])

  return (
    <>
      <LandingHeader signInButtonClickHandler={signInButtonClickHandler} />
      <Outlet context={[signInButtonClickHandler, setIsModalOpen]} />
      <LandingFooter signInButtonClickHandler={signInButtonClickHandler} />
    </>
  )
}
