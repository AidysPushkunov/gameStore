import { SkeletonTheme } from 'react-loading-skeleton'
import { Outlet, ScrollRestoration } from 'react-router-dom'



// import 'react-toastify/dist/ReactToastify.css'
import './layout.css'
import { Header } from 'widgets/header'
import { Menu } from 'widgets/menu'


export const Layout = () => {

    return (
        <div className='layout layout__wrapper'>
            <SkeletonTheme>
                <div className='layout_position_blocks'>
                    <Menu />
                    <div className='layout_position_content'>
                        <Header />
                    
                        <main className='layout__content'>
                            <Outlet />
                        </main>
                    </div>
                </div>
                {/* <Footer className='layout__footer' /> */}

                <div
                    // className={clsx('layout__toggle-theme', theme)}
                    title='Change theme'>
                    {/* <IconButton
                        Icon={Icon}
                        onClick={toggleTheme}
                        isCounterVisible={false}
                        className='layout__icon'
                    /> */}
                </div>

                <ScrollRestoration />
                {/* <ToastContainer
                    position='bottom-right'
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='colored'
                /> */}
            </SkeletonTheme>
        </div>
    )
}