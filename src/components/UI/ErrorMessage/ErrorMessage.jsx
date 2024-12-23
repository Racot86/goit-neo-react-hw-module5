import PropTypes from "prop-types";

const ErrorMessage = ({message})=>{
    return(
        <p style={{width:'100%', color:"red"}}>{message}</p>
    )
}
export default ErrorMessage
ErrorMessage.propTypes = {
    message: PropTypes.string,
}