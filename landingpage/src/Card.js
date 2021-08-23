import React from "react";

const Card = () => {
    return <div className="card text-center" style={{width: "18rem", margin: "auto"}}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit, lobortis potenti fusce consequat imperdiet dignissim metus semper, tincidunt orci euismod porta maecenas ullamcorper.</p>
      <a href="#" className="btn btn-primary">Find Out More!</a>
    </div>
  </div>
}

export default Card