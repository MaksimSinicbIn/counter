export type CounterType = {
    maxValue: number
    startValue: number
    currentValue: number
}

const initialState: CounterType = {
    maxValue: 5,
    startValue: 0,
    currentValue: 0
}

export const counterReducer = (state = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case 'SET-SETTINGS':
            return { ...state, maxValue: action.maxValue, startValue: action.startValue, currentValue: action.startValue }
        case 'INCREMENT-COUNTER':
            return { ...state, currentValue: state.currentValue + 1 }
        case 'RESET-COUNTER':
            return { ...state, currentValue: state.startValue }
        default:
            return state
    }
}

type SetSettingsActionType = ReturnType<typeof setSettingsAC>
type IncrementCounterActionType = ReturnType<typeof incrementCounterAC>
type ResetCounterActionType = ReturnType<typeof resetCounterAC>

export type ActionsType =
    | SetSettingsActionType
    | IncrementCounterActionType
    | ResetCounterActionType

// Action creators
export const setSettingsAC = (maxValue: number, startValue: number) => {
    return { type: 'SET-SETTINGS', maxValue, startValue } as const
}

export const incrementCounterAC = () => {
    return { type: 'INCREMENT-COUNTER' } as const
}

export const resetCounterAC = () => {
    return { type: 'RESET-COUNTER' } as const
}