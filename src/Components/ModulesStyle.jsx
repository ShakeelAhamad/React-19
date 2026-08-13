import style from "../css/modulesStyle.module.css";
import { userData } from "../Data/userData";
const ModuleStyle = () => {
    return (
        <>
            <h3 className={style.heading}>Style with CSS Modules</h3>
            <div className={style.container}>
                {
                    userData.map((user, index) => (
                        <div className={style.userCard} key={index}>
                            <div>
                                <img className={style.imgCss} src="https://www.w3schools.com/howto/img_avatar.png" />
                            </div>
                            <div className={style.textWrap}>
                                <h3>Shakeel Ahamad</h3>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}
export default ModuleStyle;