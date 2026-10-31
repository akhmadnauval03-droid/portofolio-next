import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import ProyekCard from "@/components/ProyekCard";
import {proyek} from "@/data/proyek";
import Link from "next/link";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah"},
  { nama: "CSS", level: "menengah"},
  { nama: "Git dan GitHub", level: "Dasar"},
  { nama: "Desain poster dengan Canva", level: "Mahir"},
  { nama: "Javascript", level: "Dasar"},
];

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Akhmad Nauval"
        tagline="Siswa kelas XI SMKN 1 Pasuruan, calon Junior Web Developer di Kelas Industri UBIG."
        />
      
        <section className="mt-5">
          {/* Keahlian */}
            <h2 className="mb-4 text-2xl font-bold text-utama mt-9">Keahlian</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.nama} nama={skill.nama} level={skill.level}/>
              ))}
            </div>
        </section>
        
        {/* Proyek Terbaru */}
        <section className="mt-10">
              <h2 className="mb-4 text-2xl font-bold text-utama">Proyek Terbaru</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {proyekTerbaru.map((item) =>(
                  <ProyekCard key={item.slug} proyek={item}/>
                ))}
              </div>
              <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
                Lihat semua proyek
              </Link>
        </section>
    </main>
  );
}