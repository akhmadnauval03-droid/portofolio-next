import Kartu from "@/components/Kartu";
export default function Hobi({hobi}){
    return(
        <Kartu judul="Hobi">
            <ul className="list-disc pl-5">
                {hobi.map((item) => (
                    <li key={item.hobi}>{item.hobi}</li>
                ))}
            </ul>
        </Kartu>
    );
}