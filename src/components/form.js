import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react'

function Form() {
  const [country, setCountry] = useState("+91");
  const [phone, setPhone] = useState("");
  const [  initial ,final] =useState({ FullName :"", 
    Phone : "", 
    Email:"",
    Message:""} );
  function submit(e) {
    e.preventDefault();
    if (
      !initial.FullName ||
      !initial.Phone ||
      !initial.Email ||
      !initial.Message 
      
    ) {
      alert(" All fields are mandetory");
    } else {
      alert("your form has been submited sucessfully");
    }
  }
  const handleChangePhone = (phone, country) => {
    
    console.log(phone, country,"phone");
    setCountry(country?.dialCode );
   setPhone( phone?.replace(country.dialCode, ""));
    // setCountryName(country?.countryCode);
  };
  return (
    <div className='bg_color'>   {/*    main div strt  */}
      

        <section className='align container'>  {/*    section1 */}
             <h1 className='strt_earn fonts'>   
             Start earning today
               </h1>
              <p className='strt_earn font'>
            coinbase has a variety of features that make it best place to start trading
               </p>     

       <Button >   Sign UP Now   </Button>
      </section>   {/*    section 1 end  */} 
             
              {/*    left   */}
  <div className='main_flex '>  {/*    main flex div strt  */}
  <div>    {/*    left side of flex */}
        <section className='container'>    {/*    section  2 start  */}
        <div>  {/*    section2 main div start  */}
         <div className='cont'>   {/*    one strt*/}
 <h1 className='strt_earn  fonts'>  Blocktunix:</h1>
 <h2 className='strt_earn  font'> Design! Develop! Decentralize!</h2>
 <p className='strt_earn  font'>    we are Blocktunix Technology Aiming to Add Innovation<br/>
    in Decentralized Apps</p>
    </div>   {/*    one end */}

    <div>   {/*    two strt  */}
    <figure>
        <img  src='../images/img.svg'/>    </figure>
        </div>  {/*    two end */}
   
    <div>    {/*    three strt  */}

           <div className='confuse'>  {/*    for flex */}
           <div>  <figure> <img className='forms'   src=' ../images/Screenshotss.png'/> </figure> </div>
            <div className='started'>

       <div>  <p className='strt_earn  ea_rn'> 2500+ sucessful products delivered by <br/>
        250+ certified experts  </p></div>
        
       <div><p className='strt_earn  ea_rns'>
                Mellto Dinein Droob Celloux Namsh <br/> Vrbo Luxbubble Cure   </p></div>
                </div>
                
        </div>     {/*    flex end  */}
         
        </div>    {/*    three end  */}
        </div>   {/*    section  2 main div end */}
      </section>   {/*    section 2 end */}

      <section>   {/*     sectio 3 strt  */}

      </section> 
      </div>   {/*    left side of main div end */}

     <div  className='right_side'>   {/*    right side of main div  */}
       <section> 
       <div>   <h1 className='strt_earn fontss'> Spaeak With our Blockchain experts</h1>
       <p className='strt_earn font'> Fill the Form below  </p>   
       
       </div> 
        <div onSubmit={submit}>
        <form>
        
          <input  className='input_design'
           type='text'
           name=" FullName"
          placeholder='FullName'
         
          value={initial.FullName}
          onChange={e => {
                final({
                  ...initial,
                  FullName: e.target.value,

                });
                }}
                /> 

                
               <input className='input_design'  
                type='number'
          placeholder='Phone'
          name='phone'
          value={initial.Phone}
          onChange={ e=> {
                final({
                  ...initial,
                  Phone: e.target.value,
                });
              }}/>               
            
              <input className='input_design'
               type='email'
          placeholder='Email'
          name='Email'
          value={initial.Email}
          onChange={e => {
                final({
                  ...initial,
                  Email: e.target.value,
                });
              }}/>    
              

            
              <input className='input_design'
              type=' message'
          placeholder='Write Your Message here'
          name='message'
          value={initial.Message}
          onChange={e=> {
                final({
                  ...initial,
                  Message: e.target.value,
                });
              }}/> 
              <br></br>

              <button> Submit</button> 
            </form> 
            </div>
         </section>
       
     </div> {/*    right side of main div end  */}

      </div>         {/*    main flex div end */}

{/*    main div end   */}
</div>
  )
}

export default Form
