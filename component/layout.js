import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({children})=>
{
    return(
        <>
        <Navbar/>
        <main className="bg-light">{children}</main>
        <Footer/>
        </>
    )
}
export default Layout