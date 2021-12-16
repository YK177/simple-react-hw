const initState:string = 'some'

type ActionType = ChangeThemeActionType

export const themeReducer = (state: string = initState, action: ActionType): string => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return action.value
        }
        default:
            return state
    }
}

type ChangeThemeActionType = ReturnType<typeof changeTheme>

export const changeTheme = (value: string) => {
    return {
        type: 'CHANGE-THEME',
        value
    }
}