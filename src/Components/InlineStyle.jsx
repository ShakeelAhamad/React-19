import { useState } from "react";
import { userData } from "../Data/userData"

const InlineStyle = ({ pagetitle }) => {
    const [cardStyle, setCardStyle] = useState(
        {
            border: "1px solid #cccccc3b",
            width: "200px",
            boxShadow: "1px 2px 3px 0px #ccccccc57",
            margin: "5px"

        });
    const [textColor, setTextColor] = useState("black");
    const [grid, setGrid] = useState(true);
    // const cardStyle = {
    //     border: "1px solid #cccccc3b",
    //     width: "200px",
    //     boxShadow: "1px 2px 3px 0px #ccccccc57",
    //     margin:"5px"

    // }
    const updateTheme = (bgColor, textColor) => {
        console.log("update color", bgColor, textColor);
        setCardStyle({ ...cardStyle, backgroundColor: bgColor })
        setTextColor(textColor);
    }
    return (
        <>
            <h2 style={{ color: "red" }}>{pagetitle}</h2>
            <button onClick={() => updateTheme("#ccc", "green")}>Gray Theme</button>
            <button onClick={() => updateTheme("white", "black")}>Default Theme</button>
            <button onClick={() => setGrid(!grid)}>Toggel Grid</button>
            <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
                {
                    userData.map((user, index) => (
                        <div style={cardStyle} key={index}>
                            <img style={{ width: 200 }} src={user.profile} />
                            <div style={{ padding: "5px", color: textColor }}>
                                <h3>{user.name}</h3>
                                <p>{user.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default InlineStyle;