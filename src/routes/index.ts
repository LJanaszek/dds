export function getHomeRoute() {
    return "/";
}

export function getRulesPageRoute() {
    return '/instrukcja';
}
export function getGamePageRoute() {
    return '/game';
}
export function getGameStartRoute() {
    return '/start';
}
export function getPolicyRoute() {
    return '/polityka';
}

export function getRide(){
    return '/zaczynamy'
}

export const PAGES: { [key: string]: string } = (() => {
    const result: { [key: string]: string } = {};

    for (let i = 1; i <= 95; i++) {
        result['p' + i] = `${i}`;
    }
    return{
        ...result
    }
})();


export function getGameRoute(page: string) {
    return `/game/${page}`;
}
