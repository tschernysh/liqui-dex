import s from './landing-header.module.scss'

import logo from 'media/img/logo.png'
import {Link, useLocation} from "react-router-dom";
import {routerBook} from "../../routes/routerBook";
import {BiLogoTelegram, BiSolidWallet} from "react-icons/bi";
import {IoDocumentText} from "react-icons/io5";
import {HiClipboardDocumentList} from "react-icons/hi2";
import {useScrollDirection} from "../../hooks/useScrollDirection";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {GiHamburgerMenu} from "react-icons/gi";
import {useDisconnect} from "wagmi";

export const LandingHeader = ({signInButtonClickHandler}) => {
    const scrollDirection = useScrollDirection()
    const { walletAddress } = useSelector(state => state.applicationReducer)
    const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { disconnect } = useDisconnect();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = event => {
            window.requestAnimationFrame(() => {
                setIsHeaderTransparent(window.scrollY < 150);
            })
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const buttonContent = useMemo(() => {
        if (location.pathname === routerBook.dashboard || location.pathname === routerBook.bonuses) {
            return 'Disconnect Wallet'
        }

        if (walletAddress) {
            return 'Open App'
        }

        return 'Connect Wallet'
    }, [location.pathname, walletAddress])

    const buttonClickHandler = useMemo(() => {
        if (location.pathname === routerBook.dashboard || location.pathname === routerBook.bonuses) {
            return disconnect;
        }

        return signInButtonClickHandler
    }, [location.pathname, walletAddress])

    return (
        <header  data-transparent={isHeaderTransparent} data-hidden={scrollDirection === 'down'} className={s.header}>
            <Link state={{force: true}} className={s.header__logo_link} to={routerBook.main}><img src={logo} alt={'logo'}/><p>LiquiDex</p></Link>
            <button className={s.header__burger_button} onClick={setIsMenuOpen.bind(null, !isMenuOpen)}><GiHamburgerMenu color={'white'}/></button>
            <nav  onClick={setIsMenuOpen.bind(null, isMenuOpen ? false : isMenuOpen)} data-open={isMenuOpen} className={s.header__links}>
                <button onClick={buttonClickHandler} className={s.header__wallet_mobile}><BiSolidWallet color={'#AA1EFD'}/>{buttonContent}</button>
                <a href={'#'}><IoDocumentText/> Smart-contract</a>
                <a href={'#'}><HiClipboardDocumentList/> Audit</a>
                <a href={'#'}><BiLogoTelegram/> Telegram</a>
            </nav>
            <button onClick={buttonClickHandler} className={s.header__wallet_desktop}><BiSolidWallet color={'#AA1EFD'}/>{buttonContent}</button>
        </header>
    )
}