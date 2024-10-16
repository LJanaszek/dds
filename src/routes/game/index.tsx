import { useMemo } from "react";
import { CHARACTER_GENDER, MAIN_MODULE_ACTION, useMainModuleDispatch } from "../../modules/main"
import P1a from "../scenario1/p1"; 
import P2a from "../scenario1/p2";
import { PAGES } from "..";
import ScrollToMe from "@mborecki/react-scroll-to-me";

type Props = {
    id: string,
}

type PageInfo = {
    id: string,
    page: React.FC,
}

const Index: PageInfo[] = [{
    id: PAGES.pb1,
    page: P1a
}, {
    id: PAGES.pb2,
    page: P2a
}]
export default function GamePage({ id }: Props) {
    const dispatch = useMainModuleDispatch();
    const Page = useMemo(() => {
        const infoIndex = Index.findIndex(p => p.id === id);
        const info = Index[infoIndex];
        dispatch({
            type: MAIN_MODULE_ACTION.SET_GAME_PROGRESS,
            payload: {
                progress: Math.min(100, infoIndex / (Index.length - 2))
            }
        })
        if(info){
            return info.page;
        }
        
        return () => <p>Nieznana strona!</p>
    }, [id, dispatch])

    return <>
    <ScrollToMe trigger={id} behavior="smooth" />
        <Page />
    </>
}