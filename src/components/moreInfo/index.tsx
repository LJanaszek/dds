import styles from "./style.module.scss"
import RulesPage from "../../routes/rules"
import { useEffect, useState } from "react"

export default function MoreInfo() {
    const [showPopup, setShowPopup] = useState(false)
    useEffect(() => {
        if (showPopup ) {
            if(document.getElementById("notepad")){
                document.getElementById("notepad")!.style.display = "none"
            }
        } else {
            if(document.getElementById("notepad")){
                document.getElementById("notepad")!.style.display = "flex"
            }
        }
    })
    return <div className={styles.moreInfo} id="moreInfo">
        <div className={styles.content}>
            <button onClick={() => { 
                setShowPopup(!showPopup)}}>i</button>
            {showPopup &&
                <div className={styles.rules}>
                    <RulesPage isButton={true} />
                </div>
            }
        </div>
    </div>
}