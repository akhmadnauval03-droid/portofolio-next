import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Akhmad Nauval melalui form kontak, email, atau GitHub.",
};

export default function Kontak(){
    return(
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
            <p className="mt-3 text-lg text-muted-foreground">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2">
                        <FormKontak/>
                </section>

                <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-1">
                    <h2 className="mb-3 text-2xl font-bold text-primary">Temukan saya di</h2>
                    <div>
                        <a href="https://github.com/akhmadnauval03-droid" className="text-red-700">GitHub</a>
                    </div>
                    <div>
                        <a href="mailto:akhmadnauval03@gmail.com" className="text-red-700">akhmadnauval03@gmail.com</a>
                    </div>
                </section>
            </div>
        </main>
    );
}