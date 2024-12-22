import { useMemo } from "react";
import { CHARACTER_GENDER, MAIN_MODULE_ACTION, useMainModuleDispatch } from "../../modules/main"
import P2a from "../../modules/main/game/scenario1/p2";
import P3a from "../../modules/main/game/scenario1/p3";
import P4a from "../../modules/main/game/scenario1/p4";
import P5a from "../../modules/main/game/scenario1/p5";
import P6a from "../../modules/main/game/scenario1/p6";
import P7a from "../../modules/main/game/scenario1/p7";
import P8a from "../../modules/main/game/scenario1/p8";
import P9a from "../../modules/main/game/scenario1/p9";
import P10a from "../../modules/main/game/scenario1/p10";
import P11a from "../../modules/main/game/scenario1/p11";
import { PAGES } from "..";
import ScrollToMe from "@mborecki/react-scroll-to-me";

type Props = {
    id: string,
}

type PageInfo = {
    id: string,
    page: React.FC,
}

const Index: PageInfo[] = [ {
    id: PAGES.p2,
    page: P2a
},{
    id  : PAGES.p3,
    page: P3a
},{
    id  : PAGES.p4,
    page: P4a
},{
    id  : PAGES.p5,
    page: P5a
},{
    id  : PAGES.p6,
    page: P6a
},{
    id  : PAGES.p7,
    page: P7a
},{
    id  : PAGES.p8,
    page: P8a
},{
    id  : PAGES.p9,
    page: P9a
},{
    id  : PAGES.p10,
    page: P10a
},{
    id  : PAGES.p11,
    page: P11a
}
]
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