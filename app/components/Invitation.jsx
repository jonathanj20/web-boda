export default function Invitation() {
    return (
        <>
            <section class="bg-[url('../public/background1.jpg')] bg-cover bg-no-repeat p-7">
                <div class="space-y-4 mb-5">
                    <label for="namePerson" class="block text-center font-mono uppercase">Ingrese su primer nombre y apellido</label>
                    <div class="space-y-3 sm:flex sm:justify-center sm:items-center sm:space-y-0">
                        <input type="text" placeholder="Ingrese su nombre" class="outline-none block mx-auto sm:mx-2" id="namePerson" />
                        <button class="block mx-auto border-2 border-gray-500 rounded px-2 py-1 sm:mx-2" id="invitationsBtn">Aceptar</button>
                    </div>
                </div>
                <div class="border-4 border-yellow-500 bg-white w-8/12 mx-auto space-y-4 p-3 text-center font-mono">
                    <h2 class="uppercase -tracking-tight">invitación para</h2>
                    <p id="username" class="text-2xl">Nombre</p>
                    <p class="uppercase">Adultos - <span id="adults">0</span></p>
                    <p class="hidden uppercase" id="paragraphChildren">Niños - <span id="kid">0</span></p>
                </div>
            </section>
        </>
    )
}