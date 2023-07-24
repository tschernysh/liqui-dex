import { useSelector } from 'react-redux'
import s from './ApplicationDeposits.module.scss'
import { ReactComponent as ShowMore } from 'media/img/showMore.svg'
import { useState } from 'react'


export const ApplicationDeposits = () => {

  const { deposits } = useSelector(state => state.accountReducer.userInfo)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className={s.deposit}>
      <h1>Your Deposits</h1>
      <table>
        <tr className={s.title}>
          <td>Date/Time</td>
          <td>Days</td>
          <td>Amount</td>
          <td>Progress</td>
          <td>Profit</td>
        </tr>
        {
          deposits.map((el, index) => {
            if (index > currentPage * 10) {
              return null
            } else {
              return <DepositTile {...el} />
            }
          })
        }
      </table>
      <button onClick={() => setCurrentPage(currentPage + 1)}>
        <ShowMore />
        <span>Show more</span>
      </button>
    </div>
  )
}

const DepositTile = ({ tarif, time, amount, profit }) => {

  const progressPercent = (Date.now() / time) * 100 > 100 ? 100 : (Date.now() / time) * 100

  return (
    <>
      <tr>
        <td colSpan='6'><hr /></td>
      </tr>
      <tr className={s.content}>
        <td>{new Date(time * 1000).toLocaleDateString('en', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour12: true,
          hour: 'numeric',
          minute: 'numeric'
        })}</td>
        <td>{tarif}</td>
        <td>{amount}</td>
        <td>
          <div className={s.progress__bar}>
            <div style={{ '--progress-width': `${progressPercent}%` }}></div>
            <div></div>
          </div>
        </td>
        <td>{(amount * (120 + (tarif) * 5) / 100).toFixed(2)}</td>
      </tr>
    </>
  )
}
