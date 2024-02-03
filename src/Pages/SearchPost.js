import React from "react";

import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Search from "../Components/Search/Search";
import Footer from "../Components/Footer/Footer";

function SearchPost(props){
    return(
        <div className="homeParentDiv">
            <Header/>
            <Banner/>
            <Search/>
            <Footer/>
        </div>
    )
}

export default SearchPost;