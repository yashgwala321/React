import React from "react";
import Card from "./Card"
import img1 from "./assets/01_pro.webp"
import img2 from "./assets/02_pro.webp"
import img3 from "./assets/03_pro.webp"
import img4 from "./assets/04_pro.webp"


const App = () => {
  return(
    <>
      <Card username="T-shirt" price="$250" image={img1} />
      <Card username="T-shirt" price="$330" image={img2}/>
      <Card username="T-shirt" price="$550" image={img3}/>
      <Card username="T-shirt" price="$450" image={img4}/>
    </>
  ) 
}

export default App