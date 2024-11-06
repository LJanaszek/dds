import { useEffect, useState } from "react";
import Radio from "../../components/radio";
import style from "./style.module.scss"
import { string } from "prop-types";
import { Link } from "react-router-dom";
import { getGameRoute, PAGES } from "..";

export default function P8() {
    const [showButton, setShowButton] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState(0);
    const popUpContent: any = [{
        points0: ["qwertyuiop", "asdfghjkl", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },

    {
        points1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    },

    {
        points2: ["qwertyuiop", "1", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },

    {
        points3: ["qwertyuiop", "2", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    },

    {
        points4: ["qwertyuiop", "3", "zxcvbnm", "QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
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
    useEffect(() => {
        if (selectedPoint === popUpContent.length) {
            setShowButton(true)
        }
    }, [popUpContent.length, selectedPoint])
    return (
        <div>
            <p>{points}</p>
            {description!.map((e: any, index: any) => {
                let name = 'points' + index.toString();
                return <div className={style.radioContainer}>
                    <p>{e}</p>

                    <Radio onOKClick={(e) => {
                        // console.log(popUpContent[index][name][e.currentTarget.children[0].value]);
                        // setContent(popUpContent[0]!);
                        setPoints(points - e.currentTarget.children[0].value);
                        setContent(popUpContent[index][name][e.currentTarget.children[0].value]);
                        setSelectedPoint(selectedPoint + 1);
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
            <p>{content}</p>
            {
                showButton &&
                <Link onClick={() => {
                    localStorage.setItem('textList', JSON.stringify([...description, content]));
                }}
                 to={getGameRoute(PAGES.pa9)}
                >Dalej</Link>
            }
        </div>
    );
}