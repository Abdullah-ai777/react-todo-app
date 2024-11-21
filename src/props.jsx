import "./App.css";

export default function Card(props) {
  let des=props.des;
  let price=props.price;
  let color={textDecoration:"line-through"}
  return (
    <>
      <div className="container">
       <div className="title"><h1>{props.title}</h1></div>
       <div className="img"><img src={props.src} alt="this is,n" /></div>
       <div className="description"> {des && des.map((e,k)=> <li key={k}>{e}</li>)}  </div>
       <br />   
       <div className="price">{price >= 30000 ? (
        <>
        <span style={color}>{price}</span> 5% discount {price-price*5/100}
        </>
       ):(price)}</div>
      </div>
      <br />
    </>
  );
}
