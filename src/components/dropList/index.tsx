import style from "./style.module.scss"
type Props = {
    data: any
}
export default function DropList({ data }: Props) {
    const keys = Object.keys(data);
    const values2 = Object.values(data);
    return <div className={style.dropList}>
        {keys.map((key, index) => <div key={index} className={style.item}>
            <div>


                {key}
                {values2.map((value, index) => {
                    console.log( Object.values(data)[index], value, "-----------");
                    return <>


                        <div key={index}>

                        </div>
                    </>
                }
                )}

            </div>


        </div>)}
    </div>
}