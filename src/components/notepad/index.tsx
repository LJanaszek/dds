import style from "./style.module.scss"
export type Props = {
    wordsList: string[],

}
export default function Notepad({ wordsList }: Props) {
    return (<ul className={style.textList}>
        {wordsList.map((text, index) => <li key={index}>{text}</li>
        )}
    </ul>
    )
}