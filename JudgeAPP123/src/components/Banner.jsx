import React from 'react';
import '../../styles/Banner.css'
import orbit from "../pictures/orbitfuncenter.png"

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <div>
            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://i0.wp.com/huberheightschamber.com/wp-content/uploads/2021/04/Resized_20210401_155552.jpeg?ssl=1")`,
                    backgroundPosition: "center center",
                }}>

                <div className="banner_contents">
                    <h1 className="banner_title">Rink Name</h1>
                    <div className="banner_buttons">
                        <button className='banner_button'>Skate</button>
                        <button className='banner_button'>My List</button>
                    </div>
                    <h1 className="banner_description">
                        {truncate(`This is a Test Description This is a Test Description This is a Test Description This is a Test Description This is a Test Description This is a Test Description `, 150)}
                    </h1>
                </div>

                <div className="banner--fadeBottom" />
            </header>



        </div>
    )
}

export default Banner