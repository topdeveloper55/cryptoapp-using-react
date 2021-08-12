import './App.css'
import img from './logo.jpg'
import Navbar from './Navbar'
import Contact from './Contact'
import { Link } from "react-router-dom";


export default function About() {
    return (
        <div>
            < Navbar />
            <div className="HText1">
            <h2 className="Head">Our vision</h2>
            <p>Our vision is to live in a world in which everyone has the same financial opportunities - regardless of their origin, education or income</p>
            

            <h2 className="Head"> Our approach</h2>
            <p>We democratize the next generation of financial applications by making the tools of professional investors accessible to all and translating them into understandable and user-friendly solutions.</p>
            </div>
            <img src= {img} alt=""/>

            <h2 className="H1">
            Our origins
            </h2>

            <p className="HText1">
            Solity grew out of academic research. When analyzing blockchain business models, we observed that offers on the market are primarily aimed at technically savvy customers. Based on our academic and professional experience, we made the decision at the end of 2020 to create an alternative. Our promise is that we will reduce technical and financial complexity not only in our products but also in our communication so that we can give as many people as possible easy access to next-generation financial applications.
            </p>
            
            
            <div className="footer">
                <hr className="hr1" />
                <h1 className="Head">You have further questions?</h1>
                <Link  to="/contact/#">
                <button className="btn">Contact Us!</button>
                </Link>
                <br /><br /><br />
                </div>    

        </div>
    )}

