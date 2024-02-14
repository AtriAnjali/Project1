import React from 'react'

function Wallet() {
  return (
    <div className='container svg '>     {/*    parent div for flex  */}
        <div>     {/*    child 1   */}
     <h1> The Crypto Wallet<br/>
     Tailored For You!
        </h1>  
        <p> Download our ace Crypto wallet & experience excellence  <br/>
        in Sending/receiving crypto. </p>
        <div className='figure'>  
            <div><figure>  <img className=' png'   src='../images/play.png'/> </figure></div>
            <div> <figure>  <img className='png'   src='../images/apple.png' /> </figure></div>
        </div>

        </div>  {/*    child 1 end  */}

        <div>  {/*    child 2   */}
            <figure> <img className='smart' src='../images/smartphone.png' /></figure>
        </div>    {/*    child 2 end  */}

      {/*    parent end  */}
     </div>

  )
}

export default Wallet
