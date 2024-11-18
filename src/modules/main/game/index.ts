import createStore from "../../utils/store";
import reducer from "./reducer";
import { SCENARIO } from "../game/scenario1";
import { GameScenario } from "./types";

const GAME_MODULE_LS_KEY = 'aubrecht1.0.0'

export type GameState = {
    // name: string,
    completedSteps: string[],
    startGameTime: number | null,
    answers: {
        id: string,
        value: any
    }[]
}

export type GameModuleState = {
    scenario: GameScenario,
    activeGameStep?: string,
    gameStarted: boolean,
    gameComplete: boolean,
    ignoreAccuracy: boolean
    gameState: GameState;
}

export const initGameModuleState: GameModuleState = {
    scenario: SCENARIO,
    activeGameStep: SCENARIO.startStep,
    gameStarted: false,
    gameComplete: false,
    ignoreAccuracy: false,
    gameState: {
        startGameTime: null,
        answers: [],
        completedSteps: [],
    }
}


export enum GAME_MODULE_ACTION {
    SET_POINT_POSITION,
    SET_IGNORE_ACCURACY,
    START_GAME,
    RESET_GAME,
    SET_GAME_STEP,
    END_GAME,
    COMPLETE_STEP,
    PLACE_DEBUG_POINTS,
    SAVE_ANSWER
}

export type GameModuleAction = {
    type: GAME_MODULE_ACTION,
    payload?: any
}

const [
    GameModuleProvider,
    useGameModuleDispatch,
    useGameModuleState
] = createStore(reducer, initGameModuleState, GAME_MODULE_LS_KEY)


export {
    GameModuleProvider,
    useGameModuleDispatch,
    useGameModuleState
}
