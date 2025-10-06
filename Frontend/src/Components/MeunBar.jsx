import { Menu, X} from 'lucide-react'
import React from 'react'

function MeunBar() {
  return (
    <section className='w-2/4 h-screen bg-red-500/15 fixed top-0 left-0 z-50 '>
        <Menu />
        <X />
    </section>
  )
}

export default MeunBar