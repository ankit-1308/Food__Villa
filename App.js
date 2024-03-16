import React from "react";
import ReactDOM from "react-dom";


const Title = () =>{
    return (
        <h1 id="title" key="h1">
            Food Villa
        </h1>
    )
}



const HeaderComponent = function() { 
    return(
       <div>
         <Title />
         
         
       </div>
    )
}


const AppLayout = () => {
    return (
        <div>
        {/* 
          Header
             -logo
             -nav-Item(Right Side)
          Body
          Footer






         */}
        </div>

    );
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>); 










