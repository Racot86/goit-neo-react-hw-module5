import {ACTOR_URL} from "../../../../../../../../constants/constants.js";
import styles from "./ActorCard.module.css";
import { IoIosPerson } from "react-icons/io";
const ActorCard = ({actor}) => {

    return (
        <li className={styles.actorCard} >
            <p style={{
                fontWeight:"lighter",
                zIndex:1,
                background:"rgba(0,0,0,0.5)",
                padding:'2px',
                borderRadius:'4px'

            }}>{actor.character}</p>
            {actor.profile_path ?
                <img width={150} style={{position:"absolute",top:0,left:0,zIndex:0}} src={ACTOR_URL + actor.profile_path} alt={actor.name} />:
                <IoIosPerson style={{fontSize:'60px',margin:"auto"}} />
            }
                <p style={{
                zIndex:1,
                background:"rgba(0,0,0,0.5)",
                padding:'2px',
                borderRadius:'4px',
                marginTop:'auto'

            }}>{actor.name}</p>
        </li>
    )
}
export default ActorCard