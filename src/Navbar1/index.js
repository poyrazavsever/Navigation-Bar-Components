import React from "react"
import { Plus } from "../icons";
import NavbarPart from './components/navsection';

function NavbarOne() {

  const buttonStyle = "flex group items-center px-4 py-2 gap-2 w-full mx-auto transition-all duration-200 rounded-lg font-medium text-lg"
  const buttonTextStyle = "text-3xl transition-all duration-200";

  return (
    <div className='w-80 h-screen bg-neutral-900 relative'>

      <div className='flex w-full justify-center pt-12 items-center gap-2'>

        <h3 className='text-2xl font-semibold text-indigo-100 tracking-widest'><span className='text-indigo-400'>ΒΕΓ</span>Αγ</h3>

        <span className='w-6 h-[3px] bg-grayy'></span>

        <p className='text-lg text-grayy font-medium'>Blog</p>

      </div>

      <NavbarPart />

      <div className="absolute bottom-16 left-9 w-3/4 flex flex-col gap-4 justify-center items-center">

        <button className={`text-green-400 bg-green-700 hover:text-green-500 hover:bg-green-800  ${buttonStyle}`}>
          <Plus className={`${buttonTextStyle} text-green-400 group-hover:text-green-500`}/>
          Fotoğraf Ekle
        </button>

        <div className="h-[1px] w-full bg-zinc-700 rounded-sm"></div>

        <button className={`text-zinc-400  hover:text-zinc-100 hover:bg-zinc-500 border border-zinc-500  ${buttonStyle}`}>
          <Plus className={`${buttonTextStyle} text-zinc-400 group-hover:text-zinc-200`}/>
          Linkleri Güncelle
        </button>

        <button className={`text-zinc-400  hover:text-zinc-100 hover:bg-zinc-500 border border-zinc-500  ${buttonStyle}`}>
          <Plus className={`${buttonTextStyle} text-zinc-400 group-hover:text-zinc-200`}/>
          Animasyon Ekle
        </button>

        <div className="h-[1px] w-full bg-zinc-700 rounded-sm"></div>

        <button className={`text-red-500  hover:text-red-200 hover:bg-red-700 border border-red-700  ${buttonStyle}`}>
          <Plus className={`${buttonTextStyle} text-red-500 group-hover:text-red-200`}/>
          Fotoğraf Sil
        </button>

      </div>
      

    </div> 
  )
}

export default NavbarOne