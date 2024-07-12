import React from "react";
import './Maintemplate.css'
interface MainTemplateProps {
    children: React.ReactNode;
  }
  
function MainTemplate({children}:MainTemplateProps){
    return(
        <>
            <div className="page-template">
            <header>
                <h1>Welcome to my React-App</h1>
            </header>
            <main>{children}</main>
            <footer>© 2024 My React App</footer>
            </div>
        </>
    );
}

export default MainTemplate;