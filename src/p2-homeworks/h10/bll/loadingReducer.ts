export type LoadingType = typeof initState

type ActionsType = ReturnType<typeof loadingAC>

const initState = {
    loading: false
}

export const loadingReducer = (state: LoadingType = initState, action: ActionsType): LoadingType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {
        type: 'SET-LOADING',
        loading,
    } as const
}