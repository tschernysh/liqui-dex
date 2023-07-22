import s from './ApplicationDeposits.module.scss'
import { ReactComponent as ShowMore } from 'media/img/showMore.svg'

const transactionsList = [
  { hash: '0xcd2...6c060', timestamp: 1, days: 15, amount: 0.15, profit: 0.521 },
  { hash: '0xcd2...6c060', timestamp: 1, days: 15, amount: 0.15, profit: 0.521 }
]

export const ApplicationDeposits = () => {

  return (
    <div className={s.deposit}>
      <h1>Your Deposits</h1>
      <table>
        <tr className={s.title}>
          <td>TXN Hash</td>
          <td>Date/Time</td>
          <td>Days</td>
          <td>Amount</td>
          <td>Progress</td>
          <td>Profit</td>
        </tr>
        {
          transactionsList.map(el => <DepositTile {...el} />)
        }
      </table>
      <button>
        <ShowMore />
        <span>Show more</span>
      </button>
    </div>
  )
}

const DepositTile = ({ hash, timestamp, days, amount, profit }) => {

  const progressPercent = (Date.now() / timestamp) * 100

  return (
    <>
      <tr>
        <td colSpan='6'><hr /></td>
      </tr>
      <tr className={s.content}>
        <td>{hash}</td>
        <td>{timestamp}</td>
        <td>{days}</td>
        <td>{amount}</td>
        <td>
          <div className={s.progress__bar}>
            <div style={{ '--progress-width': `${50}%` }}></div>
            <div></div>
          </div>
        </td>
        <td>{profit}</td>
      </tr>
    </>
  )
}
