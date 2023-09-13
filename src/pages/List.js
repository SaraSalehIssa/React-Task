import React, { useEffect, useState } from 'react';
import MainNavbar from "../components/MainNavbar";
import Loading from "../components/Loading";
import PlaceData from "../components/PlaceData";

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
        </div>
    );
}

export default ListPage;
