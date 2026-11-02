import Link from "next/link";

export default function NotFound() {
    return(
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-red-700 text-5xl font-bold md:text-7xl text-center mb-2 mt-10">404</h1>
            <h2 className="text-utama dark:text-sky-200 text-3xl font-bold md:text-3xl text-center mb-2">Halaman tidak ditemukan</h2>
            <p className="text-center">Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
            <div className="text-center">   
                <Link href="/" className="mt-6 inline-block rounded-lg bg-utama text-white px-5 py-2 font-semibold ">
                    Kembali ke Beranda
                </Link>
            </div>
        </main>
    );
}