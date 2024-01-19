import Image from 'next/image'
import Header from './components/Header'
import Invitation from './components/Invitation'
import Audio from './components/Audio'
import Couple from './components/Couple'
import Parents from './components/Parents'
import Outfit from './components/Outfit'

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="bg-[url('../public/background2.jpg')] bg-cover bg-no-repeat">
        <Invitation/>
        <Audio/>
        <Couple/>
        <Parents/>
        <Outfit/>
      </div>
    </main>
  )
}
