import s from './landing-header.module.scss'

import logo from 'media/img/logo.png'
import {Link} from "react-router-dom";
import {routerBook} from "../../routes/routerBook";
import {BiLogoTelegram, BiSolidWallet} from "react-icons/bi";
import {IoDocumentText} from "react-icons/io5";
import {HiClipboardDocumentList} from "react-icons/hi2";
import {useScrollDirection} from "../../hooks/useScrollDirection";
import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const LandingHeader = ({signInButtonClickHandler}) => {
    const scrollDirection = useScrollDirection()
    const { walletAddress } = useSelector(state => state.applicationReducer)
    const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = event => {
            window.requestAnimationFrame(() => {
                if (isHeaderTransparent) {
                    setIsHeaderTransparent(window.scrollY < 400);
                } else {
                    setIsHeaderTransparent(window.scrollY < 150);
                }

            })
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header  data-transparent={isHeaderTransparent} data-hidden={scrollDirection === 'down'} className={s.header}>
            <Link className={s.header__logo_link} to={routerBook.main}><img src={logo} alt={'logo'}/><p>LiquiDex</p></Link>
            <nav className={s.header__links}>
                <a href={'#'}><IoDocumentText/> Smart-contract</a>
                <a href={'#'}><HiClipboardDocumentList/> Audit</a>
                <a href={'#'}><BiLogoTelegram/> Telegram</a>
            </nav>
            <button onClick={signInButtonClickHandler} className={s.header__wallet}><BiSolidWallet color={'#AA1EFD'}/>{walletAddress ? 'Open App' : 'Connect Wallet'}</button>
        </header>
    )
}