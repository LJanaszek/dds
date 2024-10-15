import { useMainModuleState } from "..";

export default function useGameProgress() {
    const {gameState} = useMainModuleState();

    return gameState?.gameProgress || 0;
}
