import s from './landing-page.module.scss'

import landingIntoBanner from 'media/img/landing-intro-banner.png'

import braveLogo from 'media/img/braveLogo.png'
import circleLogo from 'media/img/circleLogo.png'
import discrodLogo from 'media/img/discrodLogo.png'
import jumpLogo from 'media/img/jumpLogo.png'
import unknownLogo from 'media/img/unknownLogo.png'
import magicEdenLogo from 'media/img/magicEdenLogo.png'

import aboutImage from 'media/img/aboutImage.png'

const stages = [{
    text: 'Platform launch',
    icon: '',
    iconAngle: '33deg'
}, {
    text: 'Start of staking of BUSD token',
    icon: '',
    iconAngle: '-7deg'
}, {
    text: 'LDP Token Own Token Listing',
    icon: '',
    iconAngle: '-5deg'
}, {
    text: 'LDP token staking',
    icon: '',
    iconAngle: '-9deg'
}, {
    text: 'Partnerships and staking of DeFI platform tokens',
    icon: '',
    iconAngle: '-47deg'
}]

export const LandingPage = () => {
    return (
        <main className={s.landing}>
            <section className={s.landing__intro}>
                <div className={s.landing__intro__text}>
                    <h1>
                        Innovative <span>Staking</span> Platform<span>.</span>
                    </h1>
                    <div className={s.landing__intro__text__description}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38" fill="none">
                            <path
                                d="M37.6318 23.6376C36.0332 21.9848 33.9019 21.1584 31.8002 21.189C30.5569 21.189 29.432 20.5156 28.8103 19.4137L27.0342 16.2611C26.4126 15.1592 26.4126 13.7818 27.0342 12.6799C28.8695 9.46606 28.4551 5.24213 25.7613 2.45679C22.5939 -0.818279 17.4431 -0.818279 14.246 2.45679C11.5522 5.24213 11.1378 9.43545 12.9732 12.6799C13.5948 13.7818 13.5948 15.1592 12.9732 16.2611L11.197 19.4137C10.5754 20.5156 9.45052 21.2196 8.20723 21.189C6.10547 21.1584 3.97409 21.9848 2.37558 23.6376C-0.791858 26.9127 -0.791858 32.2385 2.37558 35.5442C5.54301 38.8193 10.6938 38.8193 13.8908 35.5442C14.4237 34.9932 14.8677 34.3811 15.2229 33.7383C15.8446 32.6364 16.9695 31.9324 18.2127 31.9324H21.7354C22.9787 31.9324 24.1332 32.6058 24.7252 33.7383C25.0804 34.3811 25.5245 34.9932 26.0573 35.5442C29.2248 38.8193 34.3755 38.8193 37.5726 35.5442C40.7992 32.2385 40.7992 26.9127 37.6318 23.6376ZM15.1933 21.7093L16.9695 18.5567C17.5911 17.4242 18.7456 16.7814 20.0185 16.7814C20.0481 16.7814 20.0777 16.7814 20.1073 16.7814C21.3506 16.7814 22.5051 17.4548 23.1563 18.5567L24.9325 21.7093C25.5541 22.8112 25.5541 24.1886 24.9028 25.2905C24.8732 25.3211 24.8732 25.3517 24.8732 25.3823C24.2516 26.5148 23.0971 27.2188 21.8538 27.2188H18.3312C17.0879 27.2188 15.9334 26.5148 15.3118 25.3823C15.3118 25.3517 15.2821 25.3211 15.2821 25.2905C14.5717 24.2192 14.5717 22.8418 15.1933 21.7093Z"
                                fill="white"/>
                        </svg>
                        <p>The first decentralized platform for staking BUSD and tokens of any DeFi platforms in BNB
                            Chain</p>
                    </div>
                    <button>Become a member</button>
                </div>
                <div className={s.landing__intro__image}>
                    <img src={landingIntoBanner} alt={'landingIntoBanner'}/>
                </div>
            </section>

            <section className={s.landing__partners}>
                <img src={braveLogo} alt={'braveLogo'}/>
                <img src={circleLogo} alt={'circleLogo'}/>
                <img src={discrodLogo} alt={'discrodLogo'}/>
                <img src={jumpLogo} alt={'jumpLogo'}/>
                <img src={unknownLogo} alt={'unknownLogo'}/>
                <img src={magicEdenLogo} alt={'magicEdenLogo'}/>
            </section>

            <section className={s.landing__about}>
                <div className={s.landing__about__image}>
                    <img src={aboutImage} alt={'aboutImage'}/>
                </div>
                <div className={s.landing__about__text}>
                    <h3>About LiquiDex</h3>
                    <p>Our goal is to popularize staking and make it accessible to millions of users.<br/><br/><br/>We are developing a platform on which every user will be able to receive a reward from any DeFi
                        project token by adding it to our staking pool. And all this, with simple and transparent
                        staking mechanics and a user-friendly interface.</p>
                </div>
            </section>

            <section classname={s.landing__stages}>

            </section>
        </main>
    )
}