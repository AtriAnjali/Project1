import React from "react";

function Footer() {
  return (
    
   
      <div className="color  flax">  {/* parent div strt*/}

          <div className="ones"> {/* 1st portion strt*/}
            <img className="blocktunix" src="../images/blocktunix_logo.svg" />
            <p  className="white base">  
              
              Coinbase has a variety of features that make it</p>
            <p className="foot"> the best place to start trading </p>
            <p className="white whites"> follw us on:</p>
            <div className="name">
              
              {/* flex*/}
              <img className="src " src="../images/facebook.png" />
              <img className=" src " src="..\images\twitter.png" />
              <img className="src " src="../images/instagram.png" />
              <img className="src " src="  ../images/linkedin.png" />
            </div>
            {/* flex end*/}
            </div > {/* 1st portion end*/}
            <div className="white "> {/* 2nd portion*/}
              <h4> ABOUT </h4>
              <p> Company</p>
              <p> Careers</p>
            </div> 
            {/* 2nd portion end*/}
            <div className="white"> {/* 3nd portion strt*/}
              <h4>RESOURCES</h4>
              <p> Bitcoin Price</p>
              <p> Proof of reserves</p>
              <p>Discover</p>
              <p>Help Center</p>
              <p>Status </p>
            </div>
            {/* 3nd portion end*/}
            <div className="white"> {/* 4th portion start*/}
              <h4>PRODUCTS</h4>
              <p>Features </p>
              <p> Wallet </p>
              <p> Exchange</p>
            </div>
            {/* 4th portion end*/}
        
            <div className="white" > {/* 5th portion strt*/}
              <h4> LEGAL</h4>
              <p> Terms of Use</p>
              <p>Customer Protection</p>
              <p>Legal & Compliance </p>
              <p>Privacy Policy </p>
            </div> {/* 5th portion end*/}
        
           {/* parent div end*/}
            </div>
    
    
    )
}

export default Footer;
