import React from 'react'

function Features() {
  return (
    <div className='container'>{/* parent div start  */}
  
        <div  className='choose'>
      <h1> Why Choose Blocktunix Wallet</h1>
      <p> we look Forward every detail relevant ti the blockchain tech that makes the wallet feasible & adept! </p>
      </div>

      <div className='start'> {/* flex div start   */}
      
      <div  className='oone'>   {/* one   */}
      <figure>  
        <img className='like'     src='../images/like.png'/>
      </figure> 
      <p  className='best'> Best-Industry <br/>
     Experience
     </p>
   </div>   {/* one end  */}

     <div className='twoo'>   {/* two  */}
<figure>
    <img  className='like'   src='../images/custom.png'/>
</figure>
       <p className='best'> 100%  <br/>
        Customization </p>
     </div> {/* two end  */}

     <div className='threee'>   {/* three */}
     <figure>
    <img className='like'  src='../images/idea.png'/>
</figure>
       <p className='best'>  Cost-Effective <br/>
       solution </p>
     </div> {/* three end  */}

     <div className='fourr'>   {/* four   */}
     <figure>
        <img className='like'  src='../images/support.png'/>
     </figure>
     <p className='best'> Round-The_Clock  <br/>
      Support  </p>
     </div>  {/* four end   */}

     </div>  {/* flex div end */}
    
     {/* flex  container end */}
    </div>

  )
}

export default Features
