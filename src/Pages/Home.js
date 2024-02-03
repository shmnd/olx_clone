import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

import Search from '../Components/Search/Search';

function Home(props) {
  return (
    <div className="homeParentDiv">
        <Header />
        <Banner />
        {/* <Search/> */}
        <Posts />
        <Footer />
    </div>
  );
}

export default Home;
 
