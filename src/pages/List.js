import React, { useEffect, useState } from 'react';
import MainNavbar from "../components/Navbar/MainNavbar";
import Loading from "../components/Loading/Loading";
import PlaceData from "../components/List/PlaceData";
import MainFooter from '../components/Footer/MainFooter';

function ListPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="row">
            <MainNavbar />
            {isLoading ? <Loading /> : <PlaceData />}
            <MainFooter />
        </div>
    );
}

export default ListPage;
