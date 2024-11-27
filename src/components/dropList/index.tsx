import style from "./style.module.scss"
type DropListProps = {
    title: string,
    content: {
        name: string,
        isCorect: boolean
    }
}
export default function DropList({ title, content }: DropListProps) {
    return (<div className={style.dropListContainer}>
        <p onClick={() => {
            document.querySelector(`.${style.dropListContainer}`)?.classList.toggle(`${style.active}`);

         }}>{title}</p>
        <ul>
            <li>{content.name}</li>
        </ul>
    </div>)
}