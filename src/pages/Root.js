import { Outlet } from 'react-router-dom';
import { MainHeader } from '../components/Header/MainHeader';

function RootLayout() {
    return <>
        <MainHeader />
        <main>
            <Outlet />
        </main>
    </>
}

export { RootLayout };