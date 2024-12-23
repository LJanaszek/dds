import MoreInfo from "../moreInfo"
import style from "./style.module.scss"
export type PageTextProps = {
    image?: string,
    children: React.ReactNode
}
export default function PageText({ image, children }: PageTextProps) {
    return <div className={style.pageText}>
        <MoreInfo />
        <img src={image} alt="" />
        {children}

    </div>
}