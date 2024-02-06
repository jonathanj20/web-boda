export default function Locations() {
    return (
        <>
            <section id="locations">
                <div class="h-20 mb-10">
                    <h2 class="text-center text-xl">Ubicaciones y horarios</h2>
                    <img src="/separator.png" alt="separator" class="mx-auto relative bottom-20 mt-2" />
                </div>
                <div className="md:flex md:justify-around">
                    <div className="text-center bg-white rounded-md border-4 border-fuchsia-500 w-10/12 p-5 mx-auto md:w-2/5">
                        <h3 className="mb-3">Ceremonia religiosa</h3>
                        <div>
                            <img src="/church.png" alt="Iglesia" className="mx-auto w-72" />
                        </div>
                        <p className="my-4">Nombre de la Iglesia</p>
                        <p>6:00 PM</p>
                        <img src="/separator2.png" alt="separator" className="mx-auto" />
                        <p>Calle Ejemplo #33, colonia Ejemplo, Ciudad Ejemplo, Estado Ejemplo, CP: 00000</p>
                        <a href="https://www.google.com.mx/maps/place/Betlehem/@24.1486987,-110.3012852,17z/data=!3m1!4b1!4m6!3m5!1s0x86afd3ef2462056f:0x5c00fbf878a18bab!8m2!3d24.1486938!4d-110.2987049!16s%2Fg%2F11g_z27wsd?entry=ttu" className="my-3 block rounded-md bg-fuchsia-500 text-white p-3 transition-all ease-linear delay-75 hover:bg-violet-400" target="_blank">Ver en GPS</a>
                    </div>
                    <div className="text-center bg-white rounded-md border-4 border-fuchsia-500 w-10/12 p-5 mx-auto mt-5 md:mt-0  md:w-2/5">
                        <h3 className="mb-3">Recepción</h3>
                        <div>
                            <img src="/church.png" alt="Iglesia" className="mx-auto w-72" />
                        </div>
                        <p className="my-4">Nombre del lugar</p>
                        <p>6:00 PM</p>
                        <img src="/separator2.png" alt="separator" className="mx-auto" />
                        <p>Calle Ejemplo #33, colonia Ejemplo, Ciudad Ejemplo, Estado Ejemplo, CP: 00000</p>
                        <a href="#" className="my-3 block rounded-md bg-fuchsia-500 text-white p-3 transition-all ease-linear delay-75 hover:bg-violet-400">Ver en GPS</a>
                    </div>
                </div>
            </section>
        </>
    )
}