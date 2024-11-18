


/**
 * Pełny scenariusz gry. Skłąda się z `GameStep`
 */
export interface GameScenario {
    steps: GameStep[],
    startStep: string
}


export type GameStep = GamePage | GameTask | GeoStep | MultiGeoStep;

/**
 * Pojedyncze kroki/etapy w grze.
 */
 export interface BaseGameStep {
    id: string
    type: GAME_STEP_TYPE,
    nextStep: string | null
}

export interface GamePage extends BaseGameStep {
    type: GAME_STEP_TYPE.PAGE,
    pageId: string
}

export interface GameTask extends BaseGameStep {
    type: GAME_STEP_TYPE.TASK,
    taskId: string
}

export enum GAME_STEP_TYPE {
    GEO_STEP = 'geo',
    MULTI_GEO_STEP = 'multi-geo',
    PAGE = 'page',
    TASK = 'widget'
}

export interface GeoStep extends BaseGameStep {
    type: GAME_STEP_TYPE.GEO_STEP
    position: GeoLocalization,
    name: string[],
    image?: string
}

export interface MultiGeoStep extends BaseGameStep {
    type: GAME_STEP_TYPE.MULTI_GEO_STEP
    stepsId: string[],
    minVisitedPoints: number,
}

export interface GeoLocalization {
    lat: number,
    lng: number
}
