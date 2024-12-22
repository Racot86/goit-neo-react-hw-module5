import {ThreeDots} from "react-loader-spinner";

const Loader = () => {
    return (
        <div style={{ display:'flex',justifyContent:'center', width: "100%" }}>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="lightgray"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
export default Loader