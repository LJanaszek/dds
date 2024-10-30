import { useState } from "react";
import Radio from "../../components/radio";
import style from "./style.module.scss"
import { string } from "prop-types";

export default function P8() {
    const popUpContent = [{
        points1:["qwertyuiop", "asdfghjkl", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },

    {
        points2:["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    },  

    {
        points3:["qwertyuiop", "asdfghjkl", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],    
    },

    {
        points4:["qwertyuiop", "asdfghjkl", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },  

    {
        points5:["qwertyuiop", "asdfghjkl", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },  

    {   
        points6:["qwertyuiop", "asdfghjkl", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],    
    }
]
    
    let description = [];

    const [points, setPoints] = useState(8);
    const [content, setContent] = useState<string>("");

    if (localStorage.getItem('textList')) {
        description = (JSON.parse(localStorage.getItem('textList')!));
    }
    document.querySelectorAll("input").forEach((element: any) => {
        if (points - element.value < 0) {
            element.setAttribute("disabled", "true");
        }

    })

    return (
        <div>
            <p>{points}</p>
            {description!.map((e: any, index: any) => {
                let name = 'points' + index
                return <div className={style.radioContainer}>
                    <p>{e}</p>

                    <Radio onOKClick={(e) => {

                        setContent(popUpContent[0].'${name}');
                        setPoints(points - e.currentTarget.children[0].value);

                        document.querySelectorAll("input").forEach((element: any) => {
                            if (element.name === (e.currentTarget.children[0].name)) {
                                element.setAttribute("disabled", "true");
                            }
                        })
                    }}
                        name={name} >
                    </Radio>
                </div>
            })}
            <p>{content} 123</p>
        </div>
    );
}