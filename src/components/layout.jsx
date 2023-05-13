import Navbar from "./navbar";

export default function Layout({ children }) {
    return (

        <div className="md:container md:mx-auto md:px-20 py-20">
            {children}
        </div>
    );
}