import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Ayat() {
    const { nomor } = useParams();
    const [ayat, setAyat] = useState([]);
    const [namaSurat, setNamaSurat] = useState("");

    useEffect(() => {
        fetch(`https://equran.id/api/v2/surat/${nomor}`)
            .then((res) => res.json())
            .then((data) => {
                setAyat(data.data.ayat);
                setNamaSurat(data.data.namaLatin);
            });
    }, [nomor]);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-gray-800 opacity-80"></div>

            {/* Header */}
            <header className="w-full max-w-5xl text-center py-8 mb-8 bg-teal-700 shadow-2xl rounded-lg relative z-10">
                <div>
                    <Link to="/" className=" text-yellow-300 font-bold mb-4  shadow-lg transition duration-300 hover:text-yellow-500">Kembali</Link>
                </div>
                <h1 className="text-3xl font-bold text-yellow-300 tracking-wide shadow-lg">Surah {namaSurat}</h1>
            </header>

            {/* Ayat */}
            <div className="w-full max-w-5xl bg-gray-800 p-10 rounded-2xl shadow-2xl border border-teal-500 relative z-10">
                {ayat.map((surat, index) => (
                    <div key={index} className="py-6 px-8 bg-gray-900 rounded-lg shadow-md border border-gray-600 flex flex-col items-end mb-4 transition-transform hover:scale-105">
                        <p>{surat.nomorAyat}.</p>
                        <p className="text-xl text-right font-arabic leading-loose text-yellow-300 drop-shadow-lg">
                            {surat.teksArab}
                        </p>
                        <p className="text-lg italic">{surat.teksLatin} Artinya :</p>
                        <p>{surat.teksIndonesia}</p>
                    </div>
                ))}
            </div>

            
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-500 opacity-20 blur-3xl"></div>
        </div>
    );
}

export default Ayat;