import React from 'react'

function Seventh() {
  return (
    <div>
      
      <Slider {...settings}>
        <div>
          <figure>
            <img className="imgi_size" src="../images/reece.png" alt="reece" />
          </figure>
        </div>
        <div>
          <figure>
            <img
              className="img_size"
              src="../images/gilbert.jpeg"
              alt="gilbert"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              className="imig_size"
              src="../images/roberto.jpeg"
              alt="roberto"
            />
          </figure>
        </div>

        <div>
          <figure>
            <img className="img_size" src="../images/robinson.jpeg" />
          </figure>
        </div>

        <div>
          <figure>
            <img className="img_size" src="../images/harris.jpeg" />
          </figure>
        </div>

        <div>
          <figure>
            {" "}
            <img className="img_size" src="../images/glen.jpeg" />
          </figure>
        </div>

        <div>
          <figure>
            {" "}
            <img className="img_size" src="../images/josua.jpeg" />
          </figure>
        </div>
      </Slider>
    </div>
  );

    </div>
  )
}

export default Seventh
