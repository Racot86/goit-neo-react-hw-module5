import {toast, ToastContainer} from "react-toastify";
import PropTypes from "prop-types";


const SearchBar = ({onLoad, query}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search.value.trim();
        if(value.length){
            query(value)
        }else {
            toast.info("Search field cannot be empty")
        }
    }

    return (
        <>
            <form style={{display:'flex',gap:'8px'}} onSubmit={handleSubmit}>
                <input
                    style={{
                        border:'none',
                        borderRadius:'8px',
                        padding:'8px',
                        outline:'none',
                        width:'100%',
                    }}
                    defaultValue={onLoad}
                    name='search'
                />
                <button
                    style={{
                        border:'none',
                        background:'darkcyan',
                        borderRadius:'8px',
                        padding:'12px 24px'
                    }}
                    type='submit'>search</button>
            </form>
            <ToastContainer />
        </>
    )
}
export default SearchBar
SearchBar.propTypes = {
    onLoad: PropTypes.string,
    query: PropTypes.func.isRequired,
}