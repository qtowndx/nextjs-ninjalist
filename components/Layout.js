import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Layout({children}) {
    return (
        <div className='content'>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
