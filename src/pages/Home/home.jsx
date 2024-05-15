import "./home.css"
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <div>
    <div className="homeContainer">
</div>
<div>
<Link className="homeButton" to="/game">Click here to play !</Link>
</div>
</div>

  )
}


export default HomePage