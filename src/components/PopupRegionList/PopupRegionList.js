import React from "react";

export default function PopupRegionList({ isListOpen }) {

    return (
        <div className={isListOpen ? 'popup__container' : 'popup__container_block'}>
            <ol className="popup__select">
                <li className="popup__country-item" >
                    <div className="popup__country-container">
                        <input className='popup__checkbox'
                            type="checkbox" />
                        <label className='popup__text'>Россия</label>
                    </div>
                    <ol className="popup__regions" >
                        <li  className="popup__regions-item" >
                            <input className='popup__checkbox'
                                type="checkbox" />
                            <label className='popup__text'>Дальневосточный ФО</label>
                        </li>
                        <li  className="popup__regions-item" >
                            <input className='popup__checkbox'
                                type="checkbox" />
                            <label className='popup__text'>Приволжский ФО</label>
                        </li>
                        <li  className="popup__regions-item" >
                            <input className='popup__checkbox'
                                type="checkbox" />
                            <label className='popup__text'>Северо-Западный ФО</label>
                        </li>
                        <li  className="popup__regions-item" >
                            <input className='popup__checkbox'
                                type="checkbox" />
                            <label className='popup__text'>Северо-Кавказский ФО</label>
                        </li>
                        <li  className="popup__regions-item" >
                            <input className='popup__checkbox'
                                type="checkbox" />
                            <label className='popup__text'>Сибирский ФО</label>
                        </li>
                        <li  className="popup__regions-item" >
                            <input className='popup__checkbox'
                                type="checkbox" />
                            <label className='popup__text'>Уральский ФО</label>
                        </li>
                        <li  className="popup__regions-item" >
                            <input className='popup__checkbox'
                                type="checkbox" />
                            <label className='popup__text'>Южный ФО</label>
                        </li>
                    </ol>

                </li>
                <li className="popup__country-item" >
                    <input className='popup__checkbox'
                        type="checkbox" />
                    <label className='popup__text'>Беларусь</label>
                </li>
                <li className="popup__country-item" >
                    <input className='popup__checkbox'
                        type="checkbox" />
                    <label className='popup__text'>Украина</label>
                </li>
            </ol>
        </div>

    )
}