import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Kartu({judul, children}) {
    return(
        <Card className="mt-6">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">{judul}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}

{/* <section className="rounded-xl border border-border bg-card p-6 shadow-sm mt-6">
            <h2 className="mb-3 text-2xl font-bold text-primary">{judul}</h2>
            {children}
    </section> */}