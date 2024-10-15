import { useMemo } from "react"
import useScore from "./use-score"

export const MODULE_1_QUESTIONS = [
    'm-1-1',
    'm-1-2',
    'm-1-3',
    'm-1-4'
]

export const MODULE_2_QUESTIONS = [
    'm-2-1',
    'm-2-3',
    'm-2-4',
    'm-2-5',
    'm-2-6'
]

export const MODULE_3_QUESTIONS = [
    'm-3-1',
    'm-3-2',
    'm-3-3'
]

export const MODULE_4_QUESTIONS = [
    'm-4-1',
    'm-4-2',
    'm-4-3'
]

export const MODULE_5_QUESTIONS = [
    'm-5-1'
]

export const MODULE_8_QUESTIONS = [
    'm-8-1',
    'm-8-2',
]



export default function useFinalScore() {
    const m1 = useScore(MODULE_1_QUESTIONS);
    const m2 = useScore(MODULE_2_QUESTIONS);
    const m3 = useScore(MODULE_3_QUESTIONS);
    const m4 = useScore(MODULE_4_QUESTIONS);
    const m5 = useScore(MODULE_5_QUESTIONS);
    const m6 = useScore(MODULE_8_QUESTIONS);

    return useMemo(() => {
        return ((m1 + m2 + m3 + m4 + m5 + m6) / 6) | 0;
    }, [m1, m2, m3, m4, m5, m6])
}
