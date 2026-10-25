import Kartu from "@/components/Kartu";
export default function JadwalBelajar({jadwal}){
    return (
        <Kartu judul="Jadwal Belajar">
            <table className="w-full text-left">
                <thead className="bg-utama text-white">
                    <tr>
                        <th className="p-2">Hari</th>
                        <th className="p-2">Waktu</th>
                        <th className="p-2">Kegiatan</th>
                    </tr>
                </thead>

                <tbody>
                    {jadwal.map((item) => (
                        <tr key={item.hari} className="border-b border-gray-300">
                           <td className="p-2">{item.hari}</td>
                           <td className="p-2">{item.waktu}</td>
                           <td className="p-2">{item.kegiatan}</td> 
                        </tr>
                    ))} 
                </tbody>
            </table>
        </Kartu>
    );
}