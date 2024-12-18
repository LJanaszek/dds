import style from "./style.module.scss"
import notepad from "../../assets/notepad/notatnik.png"
export type Props = {
    wordsList: string[],

}
export default function Notepad({ wordsList }: Props) {
    return (
        <div className={style.notepad}>
            <div className={style.title}><img src={notepad} alt="" />
                <p>Notatnik:</p>
            </div>
            <ul className={style.textList}>
                {wordsList.map((text, index) => <li key={index}>{text}
                    <button onClick={() => {
                        wordsList.splice(index, 1);
                        localStorage.setItem('textList', JSON.stringify(wordsList));
                        window.location.reload();
                    }}>x</button></li>
                )}
            </ul>
        </div>
    )
}