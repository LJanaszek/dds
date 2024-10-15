import { useMemo } from "react";
import useGame from "./use-game";

export default function useScore(questions: string[]) {
    const {gameState} = useGame();

    return useMemo(() => {

        const [correct, sum] = questions.reduce((result, id) => {
            console.log(id, result);

            const childAnswer = gameState.child.answers.find(a => a.id === id);
            const parentAnswer = gameState.parent.answers.find(a => a.id === id);

            const childValue = childAnswer?.value;
            const parentValue = parentAnswer?.value;

            if (childAnswer?.value === parentAnswer?.value) {
                return [
                    result[0] + 1,
                    result[1] + 1
                ]
            }

            if (typeof childValue !== typeof parentValue) {
                return [
                    result[0],
                    result[1] + 1
                ];
            }

            if (Array.isArray(childValue) && Array.isArray(parentValue)) {
                const sum = Math.max(childValue.length, parentValue.length);

                const correct = Array.from(new Set([...childValue, ...parentValue]))
                    .reduce((result, value) => {
                        if (parentValue.includes(value) && childValue.includes(value)) {
                            return result + 1;
                        }

                        return result;
                    }, 0)

                return [
                    result[0] + correct,
                    result[1] + sum
                ]
            }

            return [result[0], result[1] + 1];

        }, [0, 0]);

        console.log({ correct, sum });

        return ((correct / sum) * 100) | 0;

    }, [questions, gameState]);
}
