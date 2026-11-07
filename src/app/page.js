import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import ProyekCard from "@/components/ProyekCard";
import {supabase} from "@/lib/supabase";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const skills = [
  { nama: "HTML", level: "Menengah"},
  { nama: "CSS", level: "Menengah"},
  { nama: "Git dan GitHub", level: "Dasar"},
  { nama: "Desain poster dengan Canva", level: "Mahir"},
  { nama: "Javascript", level: "Dasar"},
];

// const proyekTerbaru = proyek.slice(-3);
export const revalidate = 0;

export default async function Home() {
  const {data: proyekTerbaru} = await supabase
    .from("projects")
    .select("*")
    .order ("created_at", {ascending:false})
    .limit(3);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Akhmad Nauval"
        tagline="Siswa kelas XI SMKN 1 Pasuruan, calon Junior Web Developer di Kelas Industri UBIG."
        />
      
        <section className="mt-5">
          {/* Keahlian */}
            <h2 className="mb-4 text-2xl font-bold text-primary mt-9">Keahlian</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.nama} nama={skill.nama} level={skill.level}/>
              ))}
            </div>
        </section>
        
        {/* Proyek Terbaru */}
        <section className="mt-10">
              <h2 className="mb-4 text-2xl font-bold text-primary">Proyek Terbaru</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {proyekTerbaru && proyekTerbaru.map((item) =>(
                  <ProyekCard key={item.slug} proyek={item}/>
                ))}
              </div>
              <Link href="/proyek" className={buttonVariants({size: "lg", className: "mt-6"})}>
                Lihat semua proyek
              </Link>
        </section>
    </main>
  );
}