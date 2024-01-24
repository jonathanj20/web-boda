import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Guests() {
    const supabase = createServerComponentClient();

    const { data } = await supabase.from('guests').select();
    const datajson = JSON.stringify(data);

    return (
        <> {/**Si guests tiene valor lo convierte en json, sino va a mostrar cargando datos */}
            {datajson.map((guest, index) => {
                <h1 key={index}>{guest.name}</h1>
            })}
        </>
    )
}
