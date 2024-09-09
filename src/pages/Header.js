import "./index.css"
import Signup from "./signup/signup"

function Header(){
    return (
        
        <div class="multi-bg-example">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">Library</a></li>
                <li><a href="#contact">Playlists</a></li>
                <li style={{marginRight: 10}}><a href="#about">Settings</a></li>
            </ul>
            
            <Signup />
            <div class="multi-bg-example">
                <header class="centered-header">
                    <h1>Welcome to Spotify</h1>
                       
                </header>
            </div>
        </div>
    )
}

export default Header