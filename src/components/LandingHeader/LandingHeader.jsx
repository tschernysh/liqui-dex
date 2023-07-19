import s from './landing-header.module.scss'

import logo from 'media/img/logo.png'
import {Link} from "react-router-dom";
import {routerBook} from "../../routes/routerBook";
import {BiLogoTelegram, BiSolidWallet} from "react-icons/bi";
import {IoDocumentText} from "react-icons/io5";
import {HiClipboardDocumentList} from "react-icons/hi2";

export const LandingHeader = () => {
    return (
        <header className={s.header}>
            <Link className={s.header__logo_link} to={routerBook.main}><img src={logo} alt={'logo'}/><p>LiquiDex</p></Link>
            <nav className={s.header__links}>
                <a href={'#'}><IoDocumentText/> Smart-contract</a>
                <a href={'#'}><HiClipboardDocumentList/> Audit</a>
                <a href={'#'}><BiLogoTelegram/> Telegram</a>
            </nav>
            <button className={s.header__wallet}><BiSolidWallet color={'#AA1EFD'}/>Connect Wallet</button>
        </header>
    )
}