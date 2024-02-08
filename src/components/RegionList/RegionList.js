'use client'
import { React, useState,useEffect } from "react";
import Image from "next/image";
import SelectImg from '@/src/images/list-check.svg';
import PopupRegionList from '@/src/components/PopupRegionList/PopupRegionList';
import regionList from './regionList.module.css';


export default function RegionList() {

    const [isListOpen, setIsListOpen] = useState(false);

    function handleListOpen() {
        setIsListOpen(true);
    }

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setIsListOpen(false);
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, []);
    
    return (
        <section>
            <button className={regionList.button} onClick={handleListOpen}>Регион показов
                <Image src={SelectImg} className={regionList.buttonImg} />
                <PopupRegionList isListOpen={isListOpen} />
            </button>
        </section>
    )
}