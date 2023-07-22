import s from './landing-page.module.scss'

import landingIntoBanner from 'media/img/landing-intro-banner.png'

import braveLogo from 'media/img/braveLogo.png'
import circleLogo from 'media/img/circleLogo.png'
import discrodLogo from 'media/img/discrodLogo.png'
import jumpLogo from 'media/img/jumpLogo.png'
import unknownLogo from 'media/img/unknownLogo.png'
import magicEdenLogo from 'media/img/magicEdenLogo.png'

import aboutImage from 'media/img/aboutImage.png'

import stage1 from 'media/img/stage1.png'
import stage2 from 'media/img/stage2.png'
import stage3 from 'media/img/stage3.png'
import stage4 from 'media/img/stage4.png'
import stage5 from 'media/img/stage5.png'

import strength1 from 'media/img/strength1.png'
import strength2 from 'media/img/strength2.png'
import strength3 from 'media/img/strength3.png'
import strength4 from 'media/img/strength4.png'
import strength5 from 'media/img/strength5.png'
import strength6 from 'media/img/strength6.png'

import roadmap1 from 'media/img/roadmap1.png'
import roadmap2 from 'media/img/roadmap2.png'
import roadmap3 from 'media/img/roadmap3.png'
import roadmap4 from 'media/img/roadmap4.png'
import roadmap5 from 'media/img/roadmap5.png'

import affiliateIcon from 'media/img/affiliate.png'

import {LeaderProgram} from "../../components/LeaderProgram/LeaderProgram";

import {ReactComponent as Path} from 'media/img/path.svg'
import {DepositBlock} from "../../components/DepositBlock/DepositBlock";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAccount, useWalletClient} from "wagmi";
import {useContext, useEffect} from "react";
import {ConfigContext} from "../../applicationContext";
import {ApplicationActionCreator} from "../../store/reducers/application/action-creator";
import {Web3Modal} from "@web3modal/react";

const stages = [{
    text: 'Platform launch',
    icon: stage1,
}, {
    text: 'Start of staking of BUSD token',
    icon: stage2,
}, {
    text: 'LDP Token Own Token Listing',
    icon: stage3,
}, {
    text: 'LDP token staking',
    icon: stage4,
}, {
    text: 'Partnerships and staking of DeFI platform tokens',
    icon: stage5,
}]

const ourStrength = [
    {
        icon: strength1,
        header: 'Platform security',
        text: 'All staking pools on our platform operate on a smart contract. This guarantees that you will receive accruals according to the terms of the pool.'
    },
    {
        icon: strength2,
        header: 'Platform Development',
        text: 'We have global development plans. Staking BUSD, native token, staking tokens from other platforms, own wallet - this is just the beginning of our journey'
    },
    {
        icon: strength3,
        header: 'Benefit for Early Users',
        text: 'Early users of the platform will not only benefit from marketing, but also Airdrop platform tokens'
    },
    {
        icon: strength4,
        header: 'Smart contract audits',
        text: 'Each of the smart contracts that will be used for staking is audited by an audit company'
    },
    {
        icon: strength5,
        header: 'Popularization of startups',
        text: 'We are the first platform that allows users to receive tokens not only from world-famous tokens, but also from tokens of various projects'
    },
    {
        icon: strength6,
        header: 'Marketing bonuses',
        text: 'Users who share information about our platform with other users receive additional rewards in the form of bonuses'
    }
]

const affiliateData = [
    {percent: '5'},
    {percent: '2'},
    {percent: '1'},
    {percent: '0.5'},
    {percent: '0.5'},
]

export const LandingPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { ethereumClient, projectId } = useContext(ConfigContext)
    const { connector: activeConnector, address, isDisconnected } = useAccount()
    const { data, isError } = useWalletClient()
    const dispatch = useDispatch()


    useEffect(() => {
        console.log(address, data)
        if (!!data && !isDisconnected) {
            dispatch(ApplicationActionCreator.setWeb3(data))
            dispatch(ApplicationActionCreator.connectConnectWallet())
        }
    }, [address, data])

    useEffect(() => {
        const referral = Object.fromEntries(searchParams.entries()).ref
        if (referral) {
            localStorage.setItem("refAddress", referral);
        }

    }, [searchParams])

    return (
        <main className={s.landing}>
            <Web3Modal explorerRecommendedWalletIds={[
                'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
                '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
            ]} projectId={projectId} ethereumClient={ethereumClient} />
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
                    <p>Our goal is to popularize staking and make it accessible to millions of users.<br/><br/><br/>We
                        are developing a platform on which every user will be able to receive a reward from any DeFi
                        project token by adding it to our staking pool. And all this, with simple and transparent
                        staking mechanics and a user-friendly interface.</p>
                </div>
            </section>

            <section className={s.landing__stages}>
                <h3>Platform Development Stages</h3>

                <div className={s.landing__stages__tiles}>
                    {stages.map(({text, icon, iconAngle}, index) => {
                        return (
                            <div key={index} className={s.landing__stages__tiles__tile}>
                                <p><span>0{index + 1}</span>{text}</p>
                                <img src={icon} alt={`stage${index + 1}`}/>
                            </div>
                        )
                    })}
                </div>

                <p className={s.landing__stages__description}>Launching the platform is just the first first step in
                    creating a decentralized token staking ecosystem. And the first users of our platform will receive
                    their privileges.</p>
            </section>

            <section className={s.landing__deposit_block}>
                <h3>Staking calculator</h3>
                <p className={s.landing__deposit_block__description}>You can already calculate the efficiency and profitability of BUSD staking on our platform. Your staking profit will be accrued every minute, and the withdrawal is not limited in any way</p>
                <DepositBlock/>
            </section>

            <section className={s.landing__us}>
                <h3>Why choose us?</h3>

                <div className={s.landing__us__tiles}>
                    {ourStrength.map(({header, icon, text}, index) => {
                        return (
                            <div key={index} className={s.landing__us__tiles__tile}>
                                <img src={icon} alt={`us${index + 1}`}/>
                                <div className={s.landing__us__tiles__tile__text}>
                                    <b>{header}</b>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className={s.landing__affiliate}>
                <h3>Affiliate Program</h3>
                <p className={s.landing__affiliate__description}>You can already calculate the efficiency and
                    profitability of BUSD staking on our platform. Your staking profit will be accrued every minute, and
                    the withdrawal is not limited in any way</p>

                <div className={s.landing__affiliate__tiles}>
                    {affiliateData.map(({percent}, index) => {
                        return (
                            <div key={index} className={s.landing__affiliate__tiles__tile}>
                                <p>Level {index + 1}</p>
                                <img src={affiliateIcon} alt={`affiliate${index + 1}`}/>
                                <span>{percent}%</span>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className={s.landing__leader}>
                <h3>Leader Program</h3>
                <p className={s.landing__leader__description}>Active leaders whose partners will actively use our BUSD
                    staking platform will be able to receive additional rewards depending on the turnover of their
                    team</p>
                <LeaderProgram/>
                <p className={s.landing__leader__description}>The leadership bonus is calculated as the sum of all
                    deposits of your first 3 referral lines, and the coefficient for the 1st level is 1, for the second
                    0.3 and for the third 0.15.</p>
            </section>

            <section className={s.landing__roadmap}>
                <h3>Roadmap</h3>
                <div className={s.landing__roadmap__graphics}>
                    <div className={s.landing__roadmap__graphics__path}>
                        <Path/>
                        <div style={{'--top-position': '0%'}} className={s.landing__roadmap__graphics__path__object}>
                            <img src={roadmap1} alt={'roaddmap1'}/>
                            <div className={s.landing__roadmap__graphics__path__object__text}>
                                <b>• Launch of the <span>LiquiDex</span> platform</b>
                                <b>• Launch of BUSD staking</b>
                            </div>
                        </div>
                        <div style={{'--top-position': '25%'}} className={s.landing__roadmap__graphics__path__object}>
                            <img src={roadmap2} alt={'roaddmap2'}/>
                            <div className={s.landing__roadmap__graphics__path__object__text}>
                                <b>Launching your own token <span>LPD</span></b>
                                <p>Launch of token trading on DEX</p>
                            </div>
                        </div>
                        <div style={{'--top-position': '50%'}} className={s.landing__roadmap__graphics__path__object}>
                            <img src={roadmap3} alt={'roaddmap3'}/>
                            <div className={s.landing__roadmap__graphics__path__object__text}>
                                <b>Launch of liquidity pools.<br/>Staking of the <span>LDP</span> token</b>
                                <p>Listing of tokens on the exchange</p>
                            </div>
                        </div>
                        <div style={{'--top-position': '75%'}} className={s.landing__roadmap__graphics__path__object}>
                            <img src={roadmap4} alt={'roaddmap4'}/>
                            <div className={s.landing__roadmap__graphics__path__object__text}>
                                <b>Launch of liquidity pools</b>
                                <p>Start of staking tokens of other platforms</p>
                            </div>
                        </div>
                        <div style={{'--top-position': '100%'}} className={s.landing__roadmap__graphics__path__object}>
                            <img src={roadmap5} alt={'roaddmap5'}/>
                            <div className={s.landing__roadmap__graphics__path__object__text}>
                                <b>Start developing your own crypto wallet</b>
                                <p>Bonuses for the first wallet users</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}