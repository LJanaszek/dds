import { useNavigate } from "react-router";
import { CHARACTER_GENDER, GameState, useMainModuleState } from "..";
import { getGameStartRoute } from "../../../routes";

export default function useGame(): {gameState: GameState} {
    const main = useMainModuleState();
    const navigate = useNavigate();

    if (!main.gameState) {
        navigate(getGameStartRoute());
        return {
            gameState: {
                parent: {
                    name: 'p',
                    answers: []
                },
                child: {
                    name: 'c',
                    answers: []
                },
                character: CHARACTER_GENDER.MALE,
                gameProgress: 0
            }
        }
    }

    return {
        gameState: main.gameState
    }
}
