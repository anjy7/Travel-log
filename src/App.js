import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";

export default function App(){
  const cards = data.map(item => {
    return(
      <Card 
        key = {item.title}
        item = {item}
        />
    )
  })

  return (
    <div className="container">
      <Navbar/>
      <section className="card-section">
        {cards}
        
      </section>
    </div>
  )
}

