import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
function Quran() {
    const [surah, setSurah] = useState([]);
    const navigasi = useNavigate();
    
    useEffect(() => {
        fetch("https://equran.id/api/v2/surat")
            .then((response) => response.json())
            .then((data) => setSurah(data.data));
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 relative">
            
            
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-gray-800 opacity-80"></div>
            
            {/* Header */}
            <header className="w-full max-w-5xl text-center py-8 mb-8 bg-teal-700 shadow-2xl rounded-lg relative z-10">
                <div className="flex flex-col items-center">
                <img src="./Logoquran.png" alt="Logo Quran" className="w-20 h-20 " />
                    <Link 
                        to="/husna/:nomor" 
                        className="text-yellow-300 text-2xl font-semibold tracking-wide hover:text-yellow-500 transition duration-300 shadow-lg">
                        Asmaul Husna
                    </Link>
                </div> 
                <h1 className="text-4xl font-bold text-yellow-300 tracking-wide shadow-lg">Nur-Quran</h1>
            </header>

            {/* Surah List Container */}
            <div className="w-full max-w-5xl bg-gray-800 p-8 rounded-2xl shadow-2xl border border-teal-500 relative z-10">
                <ul className="w-full space-y-4">
                    {surah.map((item, index) => (
                        <li 
                            key={index} 
                            onClick={() => navigasi(`/ayat/${item.nomor}`)}
                            className="flex flex-col md:flex-row md:justify-between items-center p-6 bg-gray-900 rounded-lg shadow-md border border-gray-600 cursor-pointer transition-transform hover:scale-105 hover:bg-gray-700">
                            <span className="text-2xl font-bold text-yellow-300">{item.nomor}. {item.nama}</span>
                            <span className="text-lg italic text-gray-300">{item.namaLatin}</span>
                            <span className="text-md font-medium text-gray-400">{item.jumlahAyat} Ayat</span>
                            <span className=" text-yellow-300 text-lg italic" >{item.tempatTurun}</span>
                            <span>{item.arti}</span>
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

export default Quran;
