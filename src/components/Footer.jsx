export default function Footer(){
    return(
        <footer className="bg-utama mt-auto w-full text-center px-4 py-4">
            <p className="text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Akhmad Nauval. Dibuat dengan Next.js di Kelas Industri UBIG.
            </p>
        </footer>
    );
}