import React, {useState} from 'react'
import s from './HW11.module.css'
import SuperDoubleRange, {ValueType} from './common/c8-SuperDoubleRange/SuperDoubleRange'
import SuperRange from './common/c7-SuperRange/SuperRange'


function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const handleRangeChange = (value: number) => {
        setValue1(value)
    }

    const handleDoudleRangeChange = (value: ValueType) => {
        setValue1(value.min)
        setValue2(value.max)
    }

    return (
        <div className={'task'}>
            <hr/>
            homeworks 11
            <div className={s.item}>
                <SuperRange value={value1} handleRangeChange={handleRangeChange}/>
            </div>

            <div className={s.item}>
                <SuperDoubleRange value={{min: value1, max: value2}} onDoubleRangeChange={handleDoudleRangeChange}/>
            </div>
            <hr/>
        </div>
    )
}

export default HW11
