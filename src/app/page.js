import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import TentangSaya from "@/components/TentangSaya";
import Hobi from "@/components/Hobi";
import CitaCita from "@/components/CitaCita";
import JadwalBelajar from "@/components/JadwalBelajar";

const skills = [
  { nama: "HTML", level: "Menengah"},
  { nama: "CSS", level: "menengah"},
  { nama: "Git dan GitHub", level: "Dasar"},
  { nama: "Desain poster dengan Canva", level: "Mahir"},
  { nama: "Javascript", level: "Dasar"},
];

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

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Akhmad Nauval"
        tagline="Siswa kelas XI SMKN 1 Pasuruan, calon Junior Web Developer di Kelas Industri UBIG."
        />

      <TentangSaya/>
      <div className="grid gap-4 md:grid-cols-2">
        <Hobi hobi={hobi}/>
        <CitaCita rencana={rencana}/>
      </div>

        <section className="mt-5">
          {/* Keahlian */}
          <div className="rounded-xl border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.nama} nama={skill.nama} level={skill.level}/>
              ))}
            </div>
          </div>
        </section>

        <JadwalBelajar jadwal={jadwal}/>
    </main>
  );
}