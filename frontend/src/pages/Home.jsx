import Navbar from "../components/Navbar.jsx";

const Home = () => {
    return (
        <>
            <Navbar/>
            <main className="pt-24 text-center">
                <h1 className="text-4xl font-black text-fot-teal">
                    Hi, Welcome to FoT Events!
                </h1>
                <p className="mt-4 text-slate-500">
                    Faculty of Technology, University of Ruhuna
                </p>
            </main>
        </>
    )
};
export default Home;