import Navbar from "./navbar";

export default function Layout({ children }) {
    return (

        <div className="md:container md:mx-auto md:px-4 py-20">
            <Navbar />
            {children}
        </div>
    );
}