import { useMemo } from "react";
import { CHARACTER_GENDER, MAIN_MODULE_ACTION, useMainModuleDispatch } from "../../modules/main"
import P1a from "../scenario1/p1"; 
import P2a from "../scenario1/p2";

type Props = {
    id: string,
    character: CHARACTER_GENDER
}

type PageInfo = {
    id: string,
    page: React.FC,
}

const Index: PageInfo[] = [{
    id: 'P1a',
    page: P1a
}, {
    id: 'P2a',
    page: P2a
}]
export default function GamePage({ id, character }: Props) {
    const dispatch = useMainModuleDispatch();
    const Page = useMemo(() => {
        const infoIndex = Index.findIndex(p => p.id === id);

        dispatch({
            type: MAIN_MODULE_ACTION.SET_GAME_PROGRESS,
            payload: {
                progress: Math.min(100, infoIndex / (Index.length - 2))
            }
        })

        return () => <p>Nieznana strona!</p>
    }, [id, character, dispatch])

    return <>
        <Page />
    </>
}