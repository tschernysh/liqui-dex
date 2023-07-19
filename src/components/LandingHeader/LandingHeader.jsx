import s from './landing-header.module.scss'

import logo from 'media/img/logo.png'
import {Link} from "react-router-dom";
import {routerBook} from "../../routes/routerBook";

export const LandingHeader = () => {
    return (
        <header className={s.header}>
            <Link to={routerBook.main}></Link>
        </header>
    )
}