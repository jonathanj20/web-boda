export default function Parents() {
    return (
        <>
            <section class="bg-[url('../public/background1.jpg')] bg-cover bg-no-repeat p-7 mt-5">
                <div class="h-20 mb-10">
                    <h2 class="text-center text-xl">Nuestros padres</h2>
                    <img src="/separator.png" alt="separator" class="mx-auto relative bottom-20" />
                </div>
                <div class="flex flex-col gap-y-11 mx-auto text-center sm:flex-row sm:w-3/6 sm:justify-between">
                    <div>
                        <p class="text-2xl">Antonia y Salvador</p>
                        <p>Padres de la novia</p>
                    </div>
                    <div>
                        <p class="text-2xl">Sandra y Valentín</p>
                        <p>Padres del novio</p>
                    </div>
                </div>
            </section>
        </>
    )
}