import React, {useState} from 'react'
import s from './Clock.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => clearInterval(timerId)

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => setShow(true)

    const onMouseLeave = () => setShow(false)


    const stringTime = date?.toLocaleTimeString()
    const stringDate = date?.toLocaleDateString()

    return (
        <div className={s.body}>
            <div className={s.clockFace}>
                <div className={s.time}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime || <div className={s.plug}>Press start</div>}
                </div>
                {show
                    ? (
                        <div className={s.time}>
                            {stringDate}
                        </div>
                    )
                    : <div className={s.plug}/>
                }
            </div>

            <div className={s.buttons}>
                <SuperButton className={s.btn} onClick={start}>start</SuperButton>
                <SuperButton className={s.btn} red onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock