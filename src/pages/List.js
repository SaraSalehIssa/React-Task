import React from 'react';
import MainNavbar from "../components/Navbar/MainNavbar";
import PlaceData from "../components/List/PlaceData";
import MainFooter from '../components/Footer/MainFooter';

function ListPage() {


    return (
        <div className="row">
            <MainNavbar />
            <PlaceData />
            <MainFooter />
        </div>
    );
}

export default ListPage;
