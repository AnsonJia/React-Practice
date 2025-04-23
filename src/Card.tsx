import profilePic from './assets/react.svg'

function Card(){
    return(
        <div className="card">
            <img className = "cardImage" src={profilePic} alt="profile picture"></img>
            <h2 className = "cardTitle">React</h2>
            <p className = "cardText">React Card Component</p>

        </div>
    );
}

export default Card