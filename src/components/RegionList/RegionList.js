import React from "react";
import Image from "next/image";
import SelectImg from '@/src/images/list-check.svg';

export default function RegionList() {

    return (
        <section className="region-list">
            <button className="region-list__button" /* onClick={handleClick} */>Регион показов
                <Image src={SelectImg} className="region-list__button-img" />
                {/* <select className="region-list__select" >
                    <option >
                        <input className='region-list__checkbox'
                            type="checkbox" />
                        <label >Россия</label>
                    </option>
                    <option >
                        <input className='region-list__checkbox'
                            type="checkbox" />
                        <label >Россия</label>
                    </option>
                    <option >
                        <input className='region-list__checkbox'
                            type="checkbox" />
                        <label >Россия</label>
                    </option>
                </select> */}
            </button>

        </section>
    )
}