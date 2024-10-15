import makeStore from "@mborecki/react-create-store";
import { PAGES } from "../../routes";
import reducer from "./reducer";

const CONFIG_MODULE_LS_KEY = 'page_config'

export enum CHARACTER_GENDER {
    MALE = 'male',
    FEMALE = 'female'
}

export enum PLAYER {
    CHILD,
    PARENT,
    BOTH
}

export const GAME_FIRST_PAGE = PAGES.p4a;

export type GameState = {
    parent: {
        name: string,
        answers: {
            id: string,
            value: any
        }[]
    },
    child: {
        name: string,
        answers: {
            id: string,
            value: any
        }[]
    },
    character: CHARACTER_GENDER,
    gameProgress: number
}

export type MainModuleState = {
    gameStarted: boolean,
    gameState?: GameState
}

const initMainModuleState: MainModuleState = {
    gameStarted: false
}

export enum MAIN_MODULE_ACTION {
    START_GAME,
    SAVE_ANSWER,
    SET_GAME_PROGRESS,
}

export type MainModuleAction = {
    type: MAIN_MODULE_ACTION,
    payload?: any
}

const [
    MainModuleProvider,
    useMainModuleDispatch,
    useMainModuleState
] = makeStore(reducer, initMainModuleState, CONFIG_MODULE_LS_KEY)


export {
    MainModuleProvider,
    useMainModuleDispatch,
    useMainModuleState
}
