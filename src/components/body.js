import "../scss/body.css"
export default function Body(props) {
    return (
        <div className="main">
            <div className="container">
                <img src={require(
                    `../images/${props.arr.imageUrl}`
                    )} />
                <div className="child">
                    <h3>{props.arr.location} <span><a href="#">view on goggle map</a></span></h3>
                    <h2>{props.arr.title}</h2>
                    <b>{props.arr.startDate} -  {props.arr.endDate}</b>
                    <p>{props.arr.description}</p>
                </div>
            </div>
        </div>
    )
}