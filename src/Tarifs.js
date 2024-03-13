import React from 'react'
import Navbar from './components/Navbar'
import Profil from './components/Profil'
import Footer from './components/Footer'

function Tarifs() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <h1 className='text-white text-4xl text-center my-8'>Nos Tarifs</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          <div>
            <Profil 
            imgS={'https://picsum.photos/200'}
            imgA={'Réplique'}
            title={'Pack 1'}
            description={'Réplique + 150 billes + Cache bouche + Lunettes'}
            />
          </div>
          <div>
            <Profil 
            imgS={'https://picsum.photos/200'}
            imgA={'Réplique'}
            title={'Pack 2'}
            description={'Réplique + 200 billes + Cache bouche + Lunettes + Gilet'}
            />
          </div>
          <div>
            <Profil 
            imgS={require('./Assets/pack1.jpg')}
            imgA={'Réplique'}
            title={'Pack 3'}
            description={'Réplique + 300 billes + Cache bouche + Lunettes + Gilet'}
            />
          </div>
          <div>
            <Profil 
            imgS={require('./Assets/pack1.jpg')}
            imgA={'Réplique'}
            title={'Pack 4'}
            description={'Réplique + 400 billes + Cache bouche + Lunettes + Gilet + Casquette'}
            />
          </div>
          <div>
            <Profil 
            imgS={require('./Assets/pack1.jpg')}
            imgA={'Réplique'}
            title={'Pack 5'}
            description={'Réplique + 500 billes + Cache bouche + Lunettes + Gilet + Casquette + Gants'}
            />
          </div>
          <div>
            <Profil 
            imgS={require('./Assets/pack1.jpg')}
            imgA={'Réplique'}
            title={'Pack 6'}
            description={'Réplique + 600 billes + Cache bouche + Lunettes + Gilet + Casquette + Gants + Bottes'}
            />
        </div>
        <div>
            <Profil 
            imgS={require('./Assets/pack1.jpg')}
            imgA={'Réplique'}
            title={'Pack 7'}
            description={'Réplique + 700 billes + Cache bouche + Lunettes + Gilet + Casquette + Gants + Bottes + Combinaison'}
            />
        </div>
      </div>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Tarifs