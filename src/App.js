import React from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/BodyComponent";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *    - Image
 *    - Name of Res, Star  Rating, Cuisines, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
const AppLayout =()=>{
  return(
    <div className="app">
      <HeaderComponent/>
      <BodyComponent />
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);