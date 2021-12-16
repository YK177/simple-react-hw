import React from 'react'
import InputRange from 'react-input-range'

type SuperRangePropsType = {
    value: number
    handleRangeChange: (value: number) => void
}

const SuperRange: React.FC<SuperRangePropsType> = ({
                                                       value,
                                                       handleRangeChange
                                                   }) => {

    const onRangeChange = (newValue:any) => {
        handleRangeChange(newValue)
    }

    return (
        <InputRange onChange={onRangeChange} value={value}/>
    )
}

export default SuperRange
