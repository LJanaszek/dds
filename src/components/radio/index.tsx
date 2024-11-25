import style from "./style.module.scss";
export type RadioProps = {
    name: string,
    onOKClick: (e:any) => void,
    children?: React.ReactNode
}
export default function Radio(
    { onOKClick, children, name }: RadioProps) {
    return <div className={style.radioContainer}>
        <p>
            {children}
        </p>
        <form>
            <label onClick={(e)=>{onOKClick(e)}}>
                0
                <input type="radio" name={name} value={0} />
            </label>
            <label onClick={(e)=>{onOKClick(e)}}>
                1
                <input type="radio" name={name} value={1} />
            </label>
            <label onClick={(e)=>{onOKClick(e)}}>
                2
                <input type="radio" name={name} value={2} />
            </label>
            <label onClick={(e)=>{onOKClick(e)}}>
                3
                <input type="radio" name={name} value={3} />
            </label>

        </form>
    </div>;
}