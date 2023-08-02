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
          [...deposits].reverse().map((el, index) => {
            if (index > currentPage * 10) {
              return null
            } else {
              return <DepositTile {...el} />
            }
          })
        }
      </table>
      {
        deposits.lenght > 10 && <button onClick={() => setCurrentPage(currentPage + 1)}>
          <ShowMore />
          <span>Show more</span>
        </button>

      }
    </div>
  )
}

const DepositTile = ({ tarif, time, amount, profit }) => {


  const calcProgressPercent = () => {
    const start = time * 1000
    const end = start + tarif * 1000 * 60 * 60 * 24

    const delta = end - start

    let percent = (Date.now() - start) / delta * 100

    if (percent > 100) {
      percent = 100
    }
    return percent
  }

  console.log(amount, calcProgressPercent())

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
            <div style={{ '--progress-width': `${calcProgressPercent()}%` }}></div>
            <div></div>
          </div>
        </td>
        <td>{(amount * (120 + (tarif - 10) * 5) / 100).toFixed(2)}</td>
      </tr>
    </>
  )
}
