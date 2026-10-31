import TentangSaya from "@/components/TentangSaya";
import Hobi from "@/components/Hobi";
import CitaCita from "@/components/CitaCita";
import JadwalBelajar from "@/components/JadwalBelajar";
import Kartu from "@/components/Kartu";

export const metadata ={
    title: "Tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar Akhmad Nauval.",
};

const hobi = [
  { hobi: "Badminton"},
  { hobi: "Berenang"},
  { hobi: "Berlari"},
  { hobi: "Basket"},
  { hobi: "Sepak Bola"}
];

const rencana = [
  { id: 1, rencana: "Menjaga fisik, kesehatan, serta mempersiapkan mental dan akademik sejak sekolah"},
  { id: 2, rencana: "Mengikuti seleksi penerimaan POLRI setelah lulus sekolah"},
  { id: 3, rencana: "Menjalani pendidikan pembentukan serta bertugas sebagai anggota POLRI yang profesional"}
];

const jadwal = [
  { hari: "Senin", waktu: "22.00 - 01.30", kegiatan: "Mengerjakan tugas Kelas Industri UBIG"},
  { hari: "Selasa", waktu: "22.00 - 00.00", kegiatan: "Mengerjakan tugas Kelas Industri UBIG"},
  { hari: "Rabu", waktu: "19.00 - 20.00", kegiatan: "Mengerjakan tugas Kelas Industri UBIG dan mengumpulkan tugasnya"},
  { hari: "Kamis", waktu: "18.30 - 21.30", kegiatan: "Zoom Meeting Kelas Industri UBIG"},
  { hari: "Jum'at", waktu: "22.00 - 01.30", kegiatan: "Mengerjakan tugas Kelas Industri UBIG"},
  { hari: "Sabtu", waktu: "22.00 - 02.00", kegiatan: "Mengerjakan tugas Kelas Industri UBIG"},
  { hari: "Minggu", waktu: "20.00 - 22.00", kegiatan: "Mengerjakan tugas Kelas Industri UBIG"}
];

export default function Tentang(){
    return(
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Tentang Saya</h1>
            <TentangSaya/>

            <div className="grid gap-4 md:grid-cols-2">
                <Hobi hobi={hobi}/>
                <CitaCita rencana={rencana}/>
            </div>

            <JadwalBelajar jadwal={jadwal}/>
        </main>
    );
}