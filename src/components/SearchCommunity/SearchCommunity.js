import React from "react";
import Image from "next/image";
import InputSearchImg from '@/src/images/search-button.svg';

export default function SearchCommunity() {
    return (
        <section className="search-community">
            <div className="search-community__container">
                <Image src={InputSearchImg} className="search-community__input-img" />
                <input className="search-community__input" placeholder='... Найти общину'>
                </input>
            </div>
        </section>
    )
}