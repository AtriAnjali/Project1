import { Padding } from '@mui/icons-material'
import React from 'react'

function Second() {
  return (
    /*  parentdiv*/ <div className='container mains'>
        
        <div className='lefts'>  {/* left */}
      <img  className="wallet"  src='\images\wallet.png'/>
     </div>
   
     <  div className='rights'> {/* right*/}
     

     <div> <img className='coin' src='\images\coin.png'/></div>
      
      {/* heading */}
<div className='div'>
        <h1>
            Crypto wallets Are the Most <br/>
            Secure Banks </h1> </div>

            <p>
                A Full-stack crypto wallet is nonrtheless a jack of all trades ,and the <br/>
                sefety measures it brings along are meticulous.

            </p>

            <div >  {/* 1  */}
          
                 <h2 className='head1'>   Two-Factor Authentication </h2>
              <p className='para'> crypto wallets bring you two-factor authentication,that ensures the <br/>
                safety of your crypto coins with 100% security.</p>
            </div>
               <div>   {/* 2 */}
            <h2>
              Multi-Signature Support
            </h2>
            
            <p>
              To diminish the risk of loss or theft of crypto the multi-signature support<br/>
              adds layers of srcurity  via multiple key holders.
            </p></div>

            {/* 3 */}
            <div>
        <h2>  Cold storage</h2>
           <p>   Cyber hacks, unautharized access, and other vulnerabilities ,are never a<br/>
            concern as the cold storage ensuses complete encryption.</p>
            </div>
            
            </div>  {/* rightend */}
         </div> // parentdivend
  

  )
}

export default Second;
