import Kartu from "@/components/Kartu";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Akhmad Nauval melalui form kontak, email, atau GitHub.",
};

export default function Kontak(){
    return(
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
            <p className="mt-3 text-lg text-gray-700">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>

            <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
                <Kartu judul="">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nama" className="block font-semibold">
                                Nama lengkap
                            </label>
                            <input type="text" id="nama" name="nama" placeholder="Contoh: Akhmad Nauval" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-semibold">
                                Email
                            </label>
                            <input type="email" id="email" name="email" placeholder="nama@gmail.com" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"/>
                        </div>
                        <div>
                            <label htmlFor="hp" className="block font-semibold">
                                Nomor HP
                            </label>
                            <input type="tel" id="hp" name="hp" placeholder="08123456789" required className="mt-1 w-full border border-gray-300 rounded-lg bg-white p-2"/>
                        </div>
                        <div>
                            <label htmlFor="keperluan" className="block font-semibold">
                                Keperluan
                            </label>
                            <select id="keperluan" name="keperluan" className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" required>
                                <option value="">-- Pilih keperluan --</option>
                                <option value="bertanya">Bertanya</option>
                                <option value="kerja-sama">Kerja sama proyek</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="pesan" className="block font-semibold">
                                Pesan
                            </label>
                            <textarea id="pesan" name="pesan" rows="5" cols="40" required placeholder="Tulis pesanmu di sini" className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"></textarea>
                        </div>
                        <button type="submit" className="mt-6 inline-block rounded-lg bg-red-700 px-5 py-2 font-semibold text-white">Kirim Pesan</button>
                    </form>
                </Kartu>

                <Kartu judul="Temukan saya di">
                    <div>
                        <a href="https://github.com/akhmadnauval03-droid" className="text-red-700">GitHub</a>
                    </div>
                    <div>
                        <a href="mailto:akhmadnauval03@gmail.com" className="text-red-700">akhmadnauval03@gmail.com</a>
                    </div>
                </Kartu>
            </div>
        </main>
    );
}