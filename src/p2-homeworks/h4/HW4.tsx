import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <div className={s.row}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        placeholder={'SuperInput...'}
                        // spanClassName={s.testSpanError}
                    />
                </div>

                <div className={s.row}>
                    <SuperInputText
                        placeholder={'SuperInput with modified class'}
                        className={s.blue} // проверьте, рабоет ли смешивание классов
                    />
                </div>

                {/*----------------------------------------------------*/}

                <div className={s.row}>
                    <SuperButton>
                        default
                    </SuperButton>
                </div>

                <div className={s.row}>
                    <SuperButton
                        red // пропсу с булевым значением не обязательно указывать true
                        onClick={showAlert}
                    >
                        delete {/*// название кнопки попадёт в children*/}
                    </SuperButton>
                </div>

                <div className={s.row}>
                    <SuperButton disabled>
                        disabled
                    </SuperButton>
                </div>

                {/*----------------------------------------------------*/}

                <div className={s.row}>
                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}
                    >
                        some text {/*// этот текст попадёт в children*/}
                    </SuperCheckbox>
                </div>

                {/*// onChange тоже должен работать*/}
                <div className={s.row}>
                    <SuperCheckbox checked={checked} onChange={testOnChange}/>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
