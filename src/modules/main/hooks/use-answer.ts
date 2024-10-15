import { PLAYER } from "..";
import useGame from "./use-game";

export default function useAnswer(id: string, player: PLAYER): any {

    const {gameState} = useGame();

    if (player === PLAYER.CHILD) {
        return gameState.child.answers.find(a => a.id === id)?.value;
    }

    if (player === PLAYER.PARENT) {
        return gameState.parent.answers.find(a => a.id === id)?.value;
    }

    return null;
}
