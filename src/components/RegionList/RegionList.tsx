'use client'
import { useState } from "react";
import Image from "next/image";
import SelectImg from '@/src/images/list-check.svg';
import PopupRegionList from '@/src/components/PopupRegionList/PopupRegionList';
import regionList from './regionList.module.css';


export default function RegionList() {

    const [isListOpen, setIsListOpen] = useState(false);

    function handleListOpen() {
        if (isListOpen) {
            setIsListOpen(false);
        } else {
            setIsListOpen(true);
        }
    }

    return (
        <section className={regionList.container}>
            <button className={regionList.button} onClick={handleListOpen}>Регион показов
                <Image src={SelectImg} className={regionList.buttonImg} alt="выбор региона" />
            </button>
            <PopupRegionList
                isListOpen={isListOpen} />
        </section>
    )
}