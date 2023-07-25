import { useContext, useEffect, useRef } from "react";
import { ToastifyContext } from "../../applicationContext";
import s from './toastify.module.scss'
import { AiOutlineClose } from "react-icons/ai";
import notificationLogo from 'media/img/notification-logo.png'


export const Toastify = () => {
  const { setToasifyData, toastifyData } = useContext(ToastifyContext)
  const timeout = useRef(null)

  useEffect(() => {
    if (toastifyData?.duration) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        setToasifyData(null);
      }, [toastifyData.duration])
    }
  }, [toastifyData])

  const clearToastifyData = () => {
    setToasifyData(null)
  }
  return (
    <div className={s.toastify}>
      {toastifyData && (
        <div data-toast-type={toastifyData.type} className={s.toastify__tile}>
          <img src={notificationLogo}/>
          <p>{toastifyData.text}</p>
          <button onClick={clearToastifyData}><AiOutlineClose /></button>
        </div>
      )}
    </div>
  )
}
