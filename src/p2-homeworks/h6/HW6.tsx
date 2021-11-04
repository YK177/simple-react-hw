import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value))
    }

    return (
        <div className={'task'}>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={s.hw6}>
                <div className={s.item}>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <div className={s.buttons}>
                    <SuperButton className={`${s.btn} ${s.green}`} onClick={save}>save</SuperButton>
                    <SuperButton className={`${s.btn} ${s.blue}`} onClick={restore}>restore</SuperButton>
                </div>

                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperEditableSpan/>*/}
                <hr/>
            </div>
        </div>
    )
}

export default HW6
