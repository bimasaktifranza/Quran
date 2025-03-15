import { useEffect, useState } from "react";

function Quran() {
    const [surah, setSurah] = useState([]);
    useEffect(() => {
        fetch("https://equran.id/api/v2/surat")
            .then((response) => response.json())
            .then((data) => setSurah(data.data));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 xl:p-8">
            <h1 className="text-2xl xl:text-4xl font-bold text-center text-gray-800 mb-6">Daftar Surat Al-Quran</h1>
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-4 xl:p-6">
                <ul className="space-y-4">
                    {surah.map((item, index) => (
                        <li 
                            key={index} 
                            className="flex flex-col xl:flex-row xl:justify-between items-center p-3 bg-gray-50 rounded-md shadow-md border border-gray-200"
                        >
                            <span className="text-lg xl:text-xl font-semibold text-gray-700">{item.nomor}. {item.nama}</span>
                            <span className="text-md xl:text-lg text-gray-600">{item.namaLatin}</span>
                            <span className="text-sm xl:text-md text-gray-500">{item.jumlahAyat} Ayat</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Quran;
