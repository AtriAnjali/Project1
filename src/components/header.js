import React from 'react'
import { Button } from '@mui/material';

function Header() {
  return (
    
  <>
<header className='head'>
   
  <div className='bc'>
     <div>
      <img  className='img' src='/images/blocktunix_logo.svg'/>
      </div>

      <div>
      <ul className='flex'>
        <li className='decor'>
          Features
        </li>
        <li className='decor'>
          Wallet
        </li>
        <li className='decor'>
          Exchange
        </li>
      </ul>
    </div>
    
    </div>
    
</header>

<section className='section1'>
 <div className='main'>    {/*parentdiv  */}

    <div className='left'> {/*    left   */}
  <h1  className='h'>  Blocktunix   <span className='yellow'> wallet   </span> <br/>
  <span className='text'> Your Digital Reserve! </span>   </h1>
   <p className='p'>
    Manage your cryptocurrency worldwide with a<br/>
    premium ,secure & top-notch crypto wallet!   </p>
    <div className='button'>
    <span>
    <Button 
  
    color={"primary"}  
     varient=" contained"    > 
    GET STARTED </Button>
    </span>
</div>
    </div> {/*     left end*/}

     <div>{/*  right  */}
     <img  className='imig' src='images\bnr_img2.png'/>
     
    </div> {/*  rightend*/}



    </div>  {/* parentend */}


</section>
    </>
  );
}

export default Header;
