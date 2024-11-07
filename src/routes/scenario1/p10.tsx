export default function P10() {
    const points = localStorage.getItem('points')
    return (
        <div>
            twój wynik to:
            <h1>{points}</h1>
        </div>
    );
}