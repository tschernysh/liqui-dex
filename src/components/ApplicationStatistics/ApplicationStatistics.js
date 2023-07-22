import s from './ApplicationStatistics.module.scss'
import BNB from 'media/img/bnb.png'
import { ReactComponent as Wave } from 'media/img/wave.svg'

export const ApplicationStatistics = () => {
  return (
    <div className={s.statistics}>
      <div className={s.statistics__wrapper}>
        <div className={s.statistics__container}>
          <p className={s.title}>Personal Statisctics</p>
          <div className={s.statistics__withdraw}>
            <div className={s.statistics__withdraw__tile}>
              <span>Dividents:</span>
              <span>
                1.14 BUSD
                <img src={BNB} />
              </span>
            </div>
            <div className={s.statistics__withdraw__tile}>
              <span>Referral reward:</span>
              <span>
                1.14 BUSD
                <img src={BNB} />
              </span>
            </div>
            <div className={s.statistics__withdraw__tile}>
              <span>Leadership bonuses:</span>
              <span>
                1.14 BUSD
                <img src={BNB} />
              </span>
            </div>
          </div>
          <p className={s.available__withdraw}>Available for withdraw</p>
          <div className={s.available__withdraw__amount}>
            <span>125 BUSD</span>
            <hr />
          </div>
          <button>Witdhraw</button>
        </div>
        <div className={s.statistics__container}>
          <div className={s.statistics__info}>
            <div className={s.statistics__tile}>
              <p>Total invested</p>
              <div>
                <img src={BNB} alt="" />
                <span>100</span>
              </div>
            </div>
            <div className={s.statistics__tile}>
              <p>Total Referral Reward</p>
              <div>
                <img src={BNB} alt="" />
                <span>100</span>
              </div>
              <Wave />
            </div>
            <div className={s.statistics__tile}>
              <p>Total Withdrawal</p>
              <div>
                <img src={BNB} alt="" />
                <span>100</span>
              </div>
            </div>
            <div className={s.statistics__tile}>
              <p>Total Leader Bonuses</p>
              <div>
                <img src={BNB} alt="" />
                <span>100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

