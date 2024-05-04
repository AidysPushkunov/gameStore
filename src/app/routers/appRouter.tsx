import {
    createHashRouter,
    createRoutesFromElements,
    Link,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { Layout } from 'app/layout';
import { Fallback } from 'shared/ui/fallback';
import styles from '../styles/App.module.css';
import HomePage from 'pages/homepage';
import Product from 'pages/product';
import Profile from 'pages/profile';

export const AppRouter = () => {

    const routers = createRoutesFromElements(
        <Route
            path='/'
            element={<Layout />}
            handle={{ crumb: <Link to='/'>Home</Link> }}
            errorElement={<Fallback />}>
            <Route index element={<HomePage />} />

            <Route
                path='/products'
                element={<Product />}
                handle={{
                    crumb: <Link to='/products'>Products</Link>,
                }}
            />

            <Route
                path='/profile'
                element={<Profile />}
                handle={{
                    crumb: <Link to='/profile'>Profile</Link>,
                }}
            />
        </Route>
    );

    const router = createHashRouter(routers, {});

    return (
        <div className={styles.app}>
            <RouterProvider router={router} />
        </div>
    );
};
