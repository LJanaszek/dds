import style from "./style.module.scss";
import pen from "../../assets/notepad/pen_blue.png"
export type RadioProps = {
    name: string,
    onOKClick: (e: any) => void,
    children?: React.ReactNode
}
export default function Radio(
    { onOKClick, children, name }: RadioProps) {
    return <div className={style.radioContainer}>
        <div className={style.image}>
            <img src={pen} alt="" />
        </div>
        <p>
            {children}
        </p>
        <form>
            <label className={style.selected} onClick={(e) => { onOKClick(e) }} key={0}>
                <span>0</span>
                <input type="radio" name={name} value={0} disabled={true} key={0} defaultChecked={false}/>
            </label>
            <label onClick={(e) => { onOKClick(e) }}>
            <span>1</span>
                <input type="radio" name={name} value={1} disabled={false}defaultChecked={false}/>
            </label>
            <label onClick={(e) => { onOKClick(e) }}>
            <span>2</span>
                <input type="radio" name={name} value={2} disabled={false}defaultChecked={false}/>
            </label>
            <label onClick={(e) => { onOKClick(e) }}>
            <span>3</span>
                <input type="radio" name={name} value={3} disabled={false}defaultChecked={false}/>
            </label>

        </form>
    </div>;
}