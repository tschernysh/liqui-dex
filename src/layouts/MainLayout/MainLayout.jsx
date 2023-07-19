import { Outlet, useNavigate } from 'react-router-dom'
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

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signInButtonClickHandler = useCallback(() => {
    return
    if (!walletAddress) {
      open()
    } else {
      navigate(routerBook.dashboard)
      return
    }
  }, [window.wallet])

  useEffect(() => {
    return
    if (!!redirectTo) {
      const path = redirectTo
      dispatch(ApplicationActionCreator.setRedirectTo(null))
      navigate(path)
    }
  }, [redirectTo])

  return (
    <>
      <LandingHeader signInButtonClickHandler={signInButtonClickHandler} />
      <Outlet context={[signInButtonClickHandler, setIsModalOpen]} />
      <LandingFooter />
    </>
  )
}
