import React from "react";

function Forth() {
  return (
    <div className="container ">
    
      {/*    container div strt  */}
      <section className="sec_tion">
        
        {/*    section1strt   */}
        <h1> What are the benifits of crypto Wallets? </h1>
        <p>
          Knowing the perks that crypto wallets offer will help you understand
          the prominses in the digital wallet world!
        </p>
      </section>  {/*    section one end  */}

      <section> {/*    section 2 start */ }

      <div className="fl_ex">  {/*    parent div  */}
      
        <div>  {/*    one strt  */}
          <figure>
          
            <img  className="lock"   src="../images/lock.png"></img></figure>
            <h1> Secure   <br/> Transactions</h1>
          
          <p>
          The Crypto wallet transactions
          <br />
          are backed up by blockchain <br />
          technology that mitigates the
          <br />
          risks of finished & hacks.
        </p>
        </div> {/*    one end  */}

      <div className=""> {/*    two strt  */}
        <figure>
          <img className="ss" src="../images/ss.png" />
        </figure>
      </div>{/*    two end  */}

      <div>{/*    three strt  */}
        <figure>
         <img className="lock" src="../images/tick.png" /></figure>
         <h1>  Enhanced <br/> Privacy</h1>
        
        <p>
          Your identity & data is protected <br />
          with two=factor authentication <br />
          and you are the sole owner of <br />
          your cryptocurrency excliusively.
        </p>
        
      </div> {/*    three end  */}
      
      <div> {/*    four strt */}
        <figure>
          <img className="ss" src="../images/ss.png" />
        </figure>
      </div> {/*    four end   */}

      <div> {/*    five strt   */}
        <figure>
          <img className="lock" src="../images/lens.png" />
        </figure>
        <h1> Crypto<br/> Management</h1>
        <p>
          The nature of our wallet is divirse,
          <br />
          &hense you are not confined to
          <br />
          any particular currency, a wide
          <br />
          range of crypto is managed here.
        </p>
      </div> {/*    five end  */}

      </div>      {/*    parent div end */}

      </section>  {/*    section 2 end */}

            
      

       
       {/*    container end */}
</div>

  );
}

export default Forth;
