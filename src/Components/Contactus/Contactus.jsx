import React from 'react'
import Con from '../Contactus/Contactus.module.css'

const Contactus = () => {
  return (
    <>

<div className={`${Con.first}`}>
<div className={`${Con.firsth1}`}>
<h1>You don’t have to hit your head for enrolling in the best course as we <br /> here to provide you with excellent training sessions. From the moment <br /> you contact us, making you prepare for the future is our duty.</h1>
</div>
<div className={`${Con.firstimg}`}>
<img src="https://shapemyskills.in/wp-content/uploads/2022/09/5127314-1024x683.jpg" alt="" />
</div>
</div>

<div className={`${Con.button}`}>
<button>LEARNERS,NEED SOME HELP? REACH US AT</button>
</div>
<div className={`${Con.card}`}>
  <div className={`${Con.card1}`}>
    <h1>CAREER COUNSELLING <br /><br />
        admin@shapemyskills.in</h1>
        <h2><i class="fa-solid fa-square-phone"></i>  7535045913</h2>
  </div>
  <div className={`${Con.card1}`}>
  <h1>CORPORATE TRAINING <br /><br />
           Info@shapemyskills.in</h1>
        <h2><i class="fa-solid fa-square-phone"></i>  7535045913</h2>
  </div>
  <div className={`${Con.card1}`}>
  <h1>CAREER/JOB <br /><br />
hr@shapemyskills.in</h1>
        <h2><i class="fa-solid fa-square-phone"></i>  7535045913</h2>
  </div>
</div>

<div className={`${Con.mapandcontact}`}>
<div className={`${Con.map}`}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6913.655996343851!2d77.5387570395715!3d29.955625695504203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeabe7c996ffd%3A0x479dae071d35dc05!2sMission%20Compound%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001!5e0!3m2!1sen!2sin!4v1709893046067!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
<div className={`${Con.form}`}>
  <form action="">
  <h1>Contact Us</h1>
  <input type="text" name="fname" value="Your Name"/> <br /><br />
  <input type="text" name="fname" value="Your Email"/><br /><br />
  <input type="text" name="fname" value="Your PhoneNo"/><br /><br />
  <input type="text" name="fname" value="Enter Course"/><br /><br />
  <input type="text" id={Con.msg} name="fname" value="Enter Massage"/><br /><br />
  <button>Submit</button>
  </form>
</div>
</div>


<div className={`${Con.last}`}>
<div className={`${Con.last1}`}>
<ul>
  <li>Blog</li>
  <li>About us</li>
  <li>Gallery</li>
  <li>Digital Cetificate</li>
  <li>Privacy policy</li>
  <li>Terms and Condition</li>
</ul>
</div>
<div className={`${Con.last1}`}>
<ul>
  <li>Professional Course</li>
<li>SAP MM Training in Noida</li>
<li>SAP HR Training in Noida</li>
<li>SAP FICO Training in Noida</li>
<li>SAP SD Training in Noida</li>
<li>SAP ABAP Training in Noida</li>
<li>Digital Marketing Training</li>
 
</ul>
</div>
<div className={`${Con.last1}`}>
<ul>
  <li>Trending Course</li>
 <li>Python Training</li>
 <li>Machine Learning Training</li>
 <li>Java Training</li>
 <li>Full Stack Using java</li>
 <li>Full Stack Using Python</li>
 <li>Data Science Training</li>
</ul>
</div>
<div className={`${Con.last1}`}>
<ul>
  <li>Contact Us</li>
<li>B-12 Sector 2, Near Sector 15 Metro Station Noida,(UP)201301</li>
<li>Info@shapemyskills.in</li>
<li>Tel.: +91-9873922226</li>
<li>Tel.: +91-9873090930</li>
<li>0120-4139667</li>
  
</ul>
</div>
</div>
<div className={`${Con.courselast}`}>
  <h1>© ShapeMySkills Private Limited. All rights reserved. |Privacy Policy | Terms and Conditions </h1>
</div>

    </>
  )
}

export default Contactus