const Review = ({review})=>{
    return (
        <li style={{maxWidth:'90%'}}>
            <p style={{textAlign:'start'}}>{review.content}</p>
            <p style={{fontWeight:"lighter",textAlign:'end'}}>{review.author}</p>
        </li>
    )
}
export default Review