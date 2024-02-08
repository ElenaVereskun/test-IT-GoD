import React from "react";
import popup from './popupRegionList.module.css';

interface MyPopupOpen {
    isListOpen:boolean
}

export default function PopupRegionList({isListOpen}: MyPopupOpen) {
    return (
        <div className={isListOpen ? `${popup.container}` : `${popup.containerBlock}`}>
            <ol className={popup.select}>
                <li className={popup.countryItem} >
                    <div className={popup.countryContainer}>
                        <input className={popup.checkbox}
                            type="checkbox" />
                        <label className={popup.text}>Россия</label>
                    </div>
                    <ol className={popup.regions} >
                        <li className={popup.regionsItem} >
                            <input className={popup.checkbox}
                                type="checkbox" />
                            <label className={popup.text}>Дальневосточный ФО</label>
                        </li>
                        <li className={popup.regionsItem} >
                            <input className={popup.checkbox}
                                type="checkbox" />
                            <label className={popup.text}>Приволжский ФО</label>
                        </li>
                        <li className={popup.regionsItem} >
                            <input className={popup.checkbox}
                                type="checkbox" />
                            <label className={popup.text}>Северо-Западный ФО</label>
                        </li>
                        <li className={popup.regionsItem} >
                            <input className={popup.checkbox}
                                type="checkbox" />
                            <label className={popup.text}>Северо-Кавказский ФО</label>
                        </li>
                        <li className={popup.regionsItem} >
                            <input className={popup.checkbox}
                                type="checkbox" />
                            <label className={popup.text}>Сибирский ФО</label>
                        </li>
                        <li className={popup.regionsItem} >
                            <input className={popup.checkbox}
                                type="checkbox" />
                            <label className={popup.text}>Уральский ФО</label>
                        </li>
                        <li className={popup.regionsItem} >
                            <input className={popup.checkbox}
                                type="checkbox" />
                            <label className={popup.text}>Южный ФО</label>
                        </li>
                    </ol>

                </li>
                <li className={popup.countryItem} >
                    <input className={popup.checkbox}
                        type="checkbox" />
                    <label className={popup.text}>Беларусь</label>
                </li>
                <li className={popup.countryItem} >
                    <input className={popup.checkbox}
                        type="checkbox" />
                    <label className={popup.text}>Украина</label>
                </li>
            </ol>
        </div>

    )
}