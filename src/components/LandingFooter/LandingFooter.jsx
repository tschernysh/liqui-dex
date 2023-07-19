import { useSelector } from "react-redux"
import s from './LandingFooter.module.scss'
import Copy from 'media/img/copy.png'

export const LandingFooter = () => {
    // const {} = useSelector(state => state.)


    return (
        <footer className={s.footer}>
            <div className={s.referrals}>
                <div className={s.tile}>
                    <span>Your Referral Link</span>
                    <div>
                        <a disable>0x40f6F0c0BF3c....771B036c516973145</a>
                        <img src={Copy} />
                    </div>
                </div>
                <div className={s.tile}>
                    <span>Your Upliner</span>
                    <div>
                        <a disable>0x40f6F0c0BF3c....771B036c516973145</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}