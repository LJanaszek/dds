import { MainModuleState, MainModuleAction, MAIN_MODULE_ACTION, PLAYER } from ".";

export default function UserReducer(state: MainModuleState, action: MainModuleAction): MainModuleState {
    const { type, payload } = action;
    switch (type) {
        case MAIN_MODULE_ACTION.START_GAME:
            return {
                gameStarted: true,
                gameState: {
                    parent: {
                        name: payload.parentName,
                        answers: []
                    },
                    child: {
                        name: payload.childName,
                        answers: []
                    },
                    character: payload.gender,
                    gameProgress: 0
                }
            }

        case MAIN_MODULE_ACTION.SAVE_ANSWER:
            if (payload.player === PLAYER.CHILD) {

                const oldAnswers = state.gameState?.child.answers || [];
                const oldAnswer = oldAnswers.find(a => a.id === payload.questionId);

                let answers: any[] = [];

                if (oldAnswer) {
                    answers = oldAnswers.map(a => {
                        if (a.id === payload.questionId) {
                            a.value = payload.answer
                        }

                        return a;
                    })
                } else {
                    answers = [
                        ...oldAnswers,
                        {
                            id: payload.questionId,
                            value: payload.answer
                        }
                    ]
                }


                return {
                    ...state,
                    gameState: {
                        ...state.gameState!,
                        child: {
                            ...state.gameState!.child,
                            answers
                        }
                    }
                }
            }
            if (payload.player === PLAYER.PARENT) {

                const oldAnswers = state.gameState?.parent.answers || [];
                const oldAnswer = oldAnswers.find(a => a.id === payload.questionId);

                let answers: any[] = [];

                if (oldAnswer) {
                    answers = oldAnswers.map(a => {
                        if (a.id === payload.questionId) {
                            a.value = payload.answer
                        }

                        return a;
                    })
                } else {
                    answers = [
                        ...oldAnswers,
                        {
                            id: payload.questionId,
                            value: payload.answer
                        }
                    ]
                }


                return {
                    ...state,
                    gameState: {
                        ...state.gameState!,
                        parent: {
                            ...state.gameState!.parent,
                            answers
                        }
                    }
                }
            }
            break;

        case MAIN_MODULE_ACTION.SET_GAME_PROGRESS:
            return {
                ...state,
                gameState: {
                    ...state.gameState!,
                    gameProgress: payload.progress
                }
            }
    }

    return state;
}
