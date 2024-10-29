import { useMemo } from "react";
import { CHARACTER_GENDER, MAIN_MODULE_ACTION, useMainModuleDispatch } from "../../modules/main"
import P1a from "../scenario1/p1"; 
import P2a from "../scenario1/p2";
import P3a from "../scenario1/p3";
import P4a from "../scenario1/p4";
import P5a from "../scenario1/p5";
import P6a from "../scenario1/p6";
import P7a from "../scenario1/p7";
import P8a from "../scenario1/p8";
import P9a from "../scenario1/p9";
import P10a from "../scenario1/p10";
import P11a from "../scenario1/p11";
import P12a from "../scenario1/p12";
import P13a from "../scenario1/p13";    
import P14a from "../scenario1/p14";
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
    id: PAGES.pa1,
    page: P1a
}, {
    id: PAGES.pa2,
    page: P2a
},{
    id  : PAGES.pa3,
    page: P3a
},{
    id  : PAGES.pa4,
    page: P4a
},{
    id  : PAGES.pa5,
    page: P5a
},{
    id  : PAGES.pa6,
    page: P6a
},{
    id  : PAGES.pa7,
    page: P7a
},{
    id  : PAGES.pa8,
    page: P8a
},{
    id  : PAGES.pa9,
    page: P9a
},{
    id  : PAGES.pa10,
    page: P10a
},{
    id  : PAGES.pa11,
    page: P11a
},{
    id  : PAGES.pa12,
    page: P12a
},{
    id  : PAGES.pa13,
    page: P13a
},{
    id  : PAGES.pa14,
    page: P14a
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