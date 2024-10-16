import { Route } from "react-router";
import GamePage from ".";
import useGame from "../../modules/main/hooks/use-game";
import { getGameRoute, PAGES } from "..";


export default function GameRouter() {
    return <>
        {Object.keys(PAGES).map(id => {
            return <Route key={id} path={getGameRoute(PAGES[id])} element={<CharacterSwitcher id={PAGES[id]} />} />
        })}
    </>
}

type Props = {
    id: string
}

function CharacterSwitcher({id}: Props) {

    return <GamePage id={id} />
}
