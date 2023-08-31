import React from 'react'
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id ="home">
        <main>
            <h1>Tech Consultant</h1>
            <p>Solution to all your Problems</p>
        </main>

    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the problems 
                you face
                everyday. We are leading tech company whose aim is to
                increase the
                problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id ="about">
        <div>
        <h1>Who We are?</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, aperiam doloremque hic alias enim rem quibusdam quasi optio odit tenetur officia, veritatis velit molestiae incidunt quos numquam qui? Quod modi nobis repellat sint ipsa minus possimus, consequuntur doloribus id? Obcaecati iure vel aut aliquam cum inventore accusamus unde eligendi, beatae exercitationem temporibus, illum, asperiores est neque. Quis dolorum dolor laudantium.
        </p>
        </div>
    </div>
    <div className="home4" id = "brands">
        <div>
           <h1>Brands</h1>

           <article>
           <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>  
           </article>
        </div>
    </div>
    </>
  )
};

export default Home;