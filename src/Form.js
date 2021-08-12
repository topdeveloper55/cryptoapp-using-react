import img from './Resources/solityball.png'
export default function Form(){
    return(
    <div className="container">
  <div className="div1">
  <p className="Head">Send us a message.</p>
  </div>
  <div className="row">
    <div className="column">
      <img src={img} className="img2" />
    </div>
    <div className="column">
      <form>
        <label for="fname">First Name *</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label for="lname">Last Name *</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        
        
        <label for="subject">Subject *</label>
        <textarea id="subject" name="subject" placeholder="Write something.." className="block1"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</div>

)}

