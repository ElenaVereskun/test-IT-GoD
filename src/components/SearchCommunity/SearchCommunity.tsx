import React from "react";
import Image from "next/image";
import InputSearchImg from '@/src/images/search-button.svg';
import searchCommunity from './searchCommunity.module.css';


export default function SearchCommunity() {
    
    return (
        <section>
            <div className={searchCommunity.container}>
                <Image src={InputSearchImg} className={searchCommunity.inputImg} alt="поиск" />
                <input className={searchCommunity.input} placeholder='... Найти общину'>
                </input>
            </div>
        </section>
    )
}