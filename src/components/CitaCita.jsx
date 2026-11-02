import Kartu from "@/components/Kartu";
export default function CitaCita({rencana}){
    return (
        <Kartu judul="Cita-cita">
            <p className="mt-1 text-gray-800 dark:text-gray-100">
                Menjadi <span className="font-bold">Anggota POLRI</span>. Langkah yang saya rencanakan:
            </p>
            <ol className="list-decimal pl-5 text-gray-800 dark:text-gray-100">
                {rencana.map((item) => (
                    <li key={item.rencana}>{item.rencana}</li>
                ))}
            </ol>
        </Kartu>
    );
}