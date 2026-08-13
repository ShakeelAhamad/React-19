import { useEffect, useState } from "react";

const TimeComponent = ({ color }) => {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
    })

    return (
        <>
            <h3 style={{ backgroundColor: "black", color: color, width: 120, padding: 8, textAlign: "center",borderRadius:10 }}>
                {time.toLocaleTimeString()}
            </h3>
        </>
    )
}
export default TimeComponent;