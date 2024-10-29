export type PageTextProps = {
    image?: string,
    children: React.ReactNode
}
export default function PageText({ image, children }: PageTextProps) {
    return <div className="pageText">
        <img src={image} alt="" />
        {children}

    </div>
}