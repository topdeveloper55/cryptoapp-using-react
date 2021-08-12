import './App.css';
import img from './Resources/mobile.jpg'
import img1 from './Resources/bitcoin.png'
import Navbar from './Navbar'

export default function Home() {
    return (
      <div >
        < Navbar />
        <div className="first">
         <div>
        <h2 className="Head">Safe and comfortable in the next generation of financial applications to invest</h2>
        <h2 className="Head2">The crypto savings plan for Germany</h2>
        <br />
        <br />
        <button className="btn">Open Account Now</button>
        </div>

        <img src={img} className="image1" className="imghome" alt="Hello" />
        </div> 
        <div className="black">
           <div> <img src={img1} className="image2"  alt="Hello" />  </div>
            <div className="bText">
                <h2>Technology at the interface between the old and the new financial world.</h2>
                <p>We believe that everyone should have the same financial opportunity. Our mission is to make the technical potential of new financial applications accessible, secure and usable for everyone.</p>
            </div>

        </div >

        <div className="AfterB1">
        <h2 className="Head">Low interest rates combined with inflation mean that money in your savings accounts depreciates every day.</h2>
        <p className="Head2">We develop solutions that prevent exactly that. Regardless of when you got involved in the last few years: A savings plan for Bitcoin would have paid off.</p>
        </div>

        <div className="smart">


</div>
        <div className="AfterB1">
        <h1 className="Head">A savings plan is for everyone who systematically builds up assets and wants to invest small amounts on a regular basis. </h1>
        <div className="des">
        <h2 className="Head2">Four reasons why a savings plan for crypto assets is worthwhile:</h2>
        <p> <span className="bolder">Return:</span> Savings plans are a proven instrument for increasing returns . Regular investments in crypto assets have outperformed investments in stocks, bonds, or gold in recent years.</p>
        
        <p> <span className="bolder">Risk reduction:</span> By making regular payments you reduce the risk of an unfavorable investment time (fewer units are bought at high prices and more units at low prices)</p>
        <p> <span className="bolder">Diversification:</span> Crypto stocks have a low correlation with conventional investments. This makes crypto values ​​a proven means of diversifying your investment portfolio.</p>
        <p> <span className="bolder">Flexibility:</span> A savings plan can be opened and closed at any time. You can adjust, pause or sell your savings plan at any time.</p>
        </div></div>
        <div className="AfterB1">
        <h1 className="Head">With our solution, you can start building crypto assets in just a few steps. </h1>
        <div className="list">
        <div>
          <hr className="hr" />
          <h1 className="Head">1. Open an account</h1>
        <p className="small">Registered in just a few minutes: All you need is your  ID card  and an Internet device with a camera to open your account.</p>
        </div>
        <div>
        <hr className="hr"/>
          <h1  className="Head">2. Create a savings plan</h1>
          <p className="small">Already from € 20 savings volume per month: Savings plans are created according to your  individual  wishes  and can be adjusted or paused at any time. </p>
        </div>
        <div>
        <hr className="hr"/>
          <h1 className="Head">3. Build wealth</h1>
          <p className="small">Your assets are safe: Your  investments are  custody in Germany  under the supervision of  BaFin.</p>
        </div>
        </div>
      </div>
      <div className="last">
        <button className="btn">OPEN ACCOUNT NOW</button>
        <br /><br /><br /><br />
        <h1 >EASY. SERIOUS. FOR SURE.</h1>
        <h3 className="Head2"  >Take advantage of next-generation financial applications</h3>
      </div>
      </div>
    );
  }