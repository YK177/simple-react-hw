import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

export type ValueType = {
    min: number
    max: number
}

type SuperDoubleRangePropsType = {
    value: ValueType
    onDoubleRangeChange: (value: ValueType) => void
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
                                                                   value, onDoubleRangeChange,
                                                               }) => {

    const onRangeChange = (newValue: any) => {
        onDoubleRangeChange(newValue)
    }

    return (
        <InputRange onChange={onRangeChange} value={value}/>
    )
}

export default SuperDoubleRange