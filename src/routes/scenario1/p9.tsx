import data from "./p9.json"
export default function P9() {
    const checkbox = data.checkbox1

    return (
        <div>
            {Object.values(checkbox).map((values, key) => {
                return (
                    <div key={key}>
                        <label>
                            <input type="checkbox" />
                            {values}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}