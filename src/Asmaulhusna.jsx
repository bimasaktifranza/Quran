import { useState, useEffect } from "react";
import { Link } from "react-router";

function Asmaulhusna() {
    const [asmaulhusna, setAsmaulhusna] = useState([]);

    useEffect(() => {
        fetch("https://asmaul-husna-api.vercel.app/api/all")
            .then((response) => response.json())
            .then((data) => setAsmaulhusna(data.data));
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 relative">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-gray-800 opacity-80"></div>
            
            {/* Header */}
            <header className="w-full max-w-5xl text-center py-8 mb-8 bg-teal-700 shadow-2xl rounded-lg relative z-10">
                <div className="flex flex-col items-center">
                <img src="/husna (2).png" alt="logohusna" className="w-20 h-20" />

                    <Link to="/" className="text-yellow-300 font-bold mb-4  shadow-lg transition duration-300 hover:text-yellow-500">Kembali</Link>
                </div>
                <h1 className="text-5xl font-bold text-yellow-300 tracking-wide shadow-lg">Asmaul Husna</h1>
            </header>


            {/* Asmaul Husna List */}
            <div className="w-full max-w-5xl bg-gray-800 p-8 rounded-2xl shadow-2xl border border-teal-500 relative z-10">
                <ul className="w-full space-y-4">
                    {asmaulhusna.map((item, index) => (
                        <li key={index} className="p-6 bg-gray-900 rounded-lg shadow-md border border-gray-600 flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105 hover:bg-gray-700">
                            <p>{item.urutan}.</p>
                            <p className="text-3xl font-arabic text-yellow-300 drop-shadow-lg">{item.arab}</p>
                            <p className=" font-bold text-white mt-2 text-lg italic">{item.latin}</p>
                            <p>{item.arti}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-500 opacity-20 blur-3xl"></div>
        </div>
    );
}

export default Asmaulhusna;
