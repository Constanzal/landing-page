import React from "react";

const Card = () => {
  return (
      <div className="card text-center" style={{ width: "18rem", margin: "auto" }}>
        <img src="https://media.istockphoto.com/photos/dramatic-twilight-cloudscape-sunset-sunrise-picture-id1158514405?k=6&m=1158514405&s=612x612&w=0&h=Kyo1MLQeLP-cmyVB_ucvzVL17-iKapYnlnRdrs9NV-M=" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis potenti fusce consequat imperdiet dignissim metus semper, tincidunt orci euismod porta maecenas ullamcorper.</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
  )
}

export default Card