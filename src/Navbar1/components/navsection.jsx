import React from 'react'
import { useState } from 'react'
import { Services, Link, Gallery, Arrow } from '../../icons'
import classNames from 'classnames';
import DropDownMenu from './dropdownmenu';

function NavbarPart() {

    const linkStyle = "flex items-center justify-center gap-2 cursor-pointer relative group";
    const iconStyle = "text-indigo-300 text-2xl";
    const textStyle = "text-zinc-300 text-lg transition-all group-hover:text-white";

    const [isClick, setIsClick] = useState(false)

    const menuIcon = () => {
        isClick ? setIsClick(false) : setIsClick(true);
    }

    return (
        <nav className='pt-12 pl-20'>
            <div className='flex flex-col items-start gap-8'>

                <a href="/" className={linkStyle}>
                    <Services className={iconStyle} />
                    <h4 className={textStyle}>Our Services</h4>
                </a>

                <a href="/" className={linkStyle}>
                    <Link className={iconStyle} />
                    <h4 className={textStyle}>My Links</h4>
                </a>

                <div className='relative'>
                    <div onClick={menuIcon} className={linkStyle}>

                        <Gallery className={iconStyle} />
                        <h4 className={textStyle}>Our Gallery</h4>

                        <Arrow className={classNames({
                            "text-lg -rotate-90 transition-all duration-200  text-zinc-300": true,
                            "rotate-90": isClick
                        })} />

                    </div>


                    <DropDownMenu
                    isClick={isClick} />
                </div>



            </div>
        </nav>
    )
}

export default NavbarPart