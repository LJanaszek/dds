import { useMemo } from "react";
import { MAIN_MODULE_ACTION, useMainModuleDispatch } from "../../modules/main"
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

import P2b from "../../modules/main/game/scenario2/p2";
import P3b from "../../modules/main/game/scenario2/p3";
import P4b from "../../modules/main/game/scenario2/p4";
import P5b from "../../modules/main/game/scenario2/p5";
import P6b from "../../modules/main/game/scenario2/p6";
import P7b from "../../modules/main/game/scenario2/p7";
import P8b from "../../modules/main/game/scenario2/p8";
import P9b from "../../modules/main/game/scenario2/p9";
import P10b from "../../modules/main/game/scenario2/p10";
import P11b from "../../modules/main/game/scenario2/p11";


import P2c from "../../modules/main/game/scenario3/p2";
import P3c from "../../modules/main/game/scenario3/p3";
import P4c from "../../modules/main/game/scenario3/p4";
import P5c from "../../modules/main/game/scenario3/p5";
import P6c from "../../modules/main/game/scenario3/p6";
import P7c from "../../modules/main/game/scenario3/p7";
import P8c from "../../modules/main/game/scenario3/p8";
import P9c from "../../modules/main/game/scenario3/p9";
import P10c from "../../modules/main/game/scenario3/p10";
import P11c from "../../modules/main/game/scenario3/p11";


import P2d from "../../modules/main/game/scenario4/p2";
import P3d from "../../modules/main/game/scenario4/p3";
import P4d from "../../modules/main/game/scenario4/p4";
import P5d from "../../modules/main/game/scenario4/p5";
import P6d from "../../modules/main/game/scenario4/p6";
import P7d from "../../modules/main/game/scenario4/p7";
import P8d from "../../modules/main/game/scenario4/p8";
import P9d from "../../modules/main/game/scenario4/p9";
import P10d from "../../modules/main/game/scenario4/p10";
import P11d from "../../modules/main/game/scenario4/p11";


import P2e from "../../modules/main/game/scenario5/p2";
import P3e from "../../modules/main/game/scenario5/p3";
import P4e from "../../modules/main/game/scenario5/p4";
import P5e from "../../modules/main/game/scenario5/p5";
import P6e from "../../modules/main/game/scenario5/p6";
import P7e from "../../modules/main/game/scenario5/p7";
import P8e from "../../modules/main/game/scenario5/p8";
import P9e from "../../modules/main/game/scenario5/p9";
import P10e from "../../modules/main/game/scenario5/p10";
import P11e from "../../modules/main/game/scenario5/p11";

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
    id: PAGES.p2,
    page: P2a
}, {
    id: PAGES.p3,
    page: P3a
}, {
    id: PAGES.p4,
    page: P4a
}, {
    id: PAGES.p5,
    page: P5a
}, {
    id: PAGES.p6,
    page: P6a
}, {
    id: PAGES.p7,
    page: P7a
}, {
    id: PAGES.p8,
    page: P8a
}, {
    id: PAGES.p9,
    page: P9a
}, {
    id: PAGES.p10,
    page: P10a
}, {
    id: PAGES.p11,
    page: P11a
},


{
    id: PAGES.p12,
    page: P2b
}, {
    id: PAGES.p13,
    page: P3b
}, {
    id: PAGES.p14,
    page: P4b
}, {
    id: PAGES.p15,
    page: P5b
}, {
    id: PAGES.p16,
    page: P6b
}, {
    id: PAGES.p17,
    page: P7b
}, {
    id: PAGES.p18,
    page: P8b
}, {
    id: PAGES.p19,
    page: P9b
}, {
    id: PAGES.p20,
    page: P10b
}, {
    id: PAGES.p21,
    page: P11b
},


{
    id: PAGES.p22,
    page: P2c
}, {
    id: PAGES.p23,
    page: P3c
}, {
    id: PAGES.p24,
    page: P4c
}, {
    id: PAGES.p25,
    page: P5c
}, {
    id: PAGES.p26,
    page: P6c
}, {
    id: PAGES.p27,
    page: P7c
}, {
    id: PAGES.p28,
    page: P8c
}, {
    id: PAGES.p29,
    page: P9c
}, {
    id: PAGES.p30,
    page: P10c
}, {
    id: PAGES.p31,
    page: P11c
},


{
    id: PAGES.p32,
    page: P2d
}, {
    id: PAGES.p33,
    page: P3d
}, {
    id: PAGES.p34,
    page: P4d
}, {
    id: PAGES.p35,
    page: P5d
}, {
    id: PAGES.p36,
    page: P6d
}, {
    id: PAGES.p37,
    page: P7d
}, {
    id: PAGES.p38,
    page: P8d
}, {
    id: PAGES.p39,
    page: P9d
}, {
    id: PAGES.p40,
    page: P10d
}, {
    id: PAGES.p41,
    page: P11d
},

{
    id: PAGES.p42,
    page: P2e
}, {
    id: PAGES.p43,
    page: P3e
}, {
    id: PAGES.p44,
    page: P4e
}, {
    id: PAGES.p45,
    page: P5e
}, {
    id: PAGES.p46,
    page: P6e
}, {
    id: PAGES.p47,
    page: P7e
}, {
    id: PAGES.p48,
    page: P8e
}, {
    id: PAGES.p49,
    page: P9e
}, {
    id: PAGES.p50,
    page: P10e
}, {
    id: PAGES.p51,
    page: P11e
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
        if (info) {
            return info.page;
        }

        return () => <p>Nieznana strona!</p>
    }, [id, dispatch])

    return <>
        <ScrollToMe trigger={id} behavior="smooth" />
        <Page />
    </>
}