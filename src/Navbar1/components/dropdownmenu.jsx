import classNames from 'classnames';
import React from 'react'

function DropDownMenu({isClick}) {

    const dropDownStyle = 'flex items-center gap-2 group cursor-pointer';
    const bollStyle = "w-2 h-2 rounded-full shadow-md";
    const ddTextStyle = 'text-zinc-400 text-sm transition-all font-medium group-hover:text-zinc-100'

    return (
        <div className={classNames({
            "w-full flex flex-col gap-4 transition-all duration-400 items-start absolute top-12 left-8" : true,
            "pointer-events-none opacity-0 -translate-y-full" : !isClick,
            "pointer-events-auto opacity-100 translate-x-0" : isClick
        })}>

            <div className={dropDownStyle}>

                <div
                    className={`${bollStyle} bg-red-500 shadow-red-700`}>
                </div>
                <h6 className={ddTextStyle}>First Gallery</h6>

            </div>

            <div className={dropDownStyle}>

                <div
                    className={`${bollStyle} bg-green-500 shadow-green-700`}>
                </div>
                <h6 className={ddTextStyle}>Secondary Gallery</h6>

            </div>

            <div className={dropDownStyle}>

                <div
                    className={`${bollStyle} bg-blue-500 shadow-blue-700`}>
                </div>
                <h6 className={ddTextStyle}>Thert Gallery</h6>

            </div>

        </div>
    )
}

export default DropDownMenu