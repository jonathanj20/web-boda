export default function Outfit() {
    return (
        <>
            <section class="p-7 w-10/12 bg-white mx-auto mt-5 border-4 border-yellow-500 font-serif text-center" id="outfit">
                <div class="h-14 mb-5 sm:mb-15">
                    <h2>Código de vestimenta</h2>
                    <img src="/separator2.png" alt="separator" class="mx-auto relative bottom-14" />
                </div>
                <div class="space-y-16 sm:flex sm:flex-row sm:space-y-0 sm:w-3/6 sm:justify-between mx-auto">
                    <div>
                        <img src="/vestido.png" alt="vestido para mujer" class="mx-auto" />
                        <p>Para mujeres</p>
                        <p>Vestido largo</p>
                    </div>
                    <div>
                        <img src="/traje.png" alt="traje para hombre" class="mx-auto" />
                        <p>Para hombres</p>
                        <p>Traje formal</p>
                    </div>
                </div>
            </section>
        </>
    )
}