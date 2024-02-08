import { React } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ComImage from '@/src/images/community__image.svg';
import community from './community.module.css'

export default function Community() {
    
    return (
        <section className={community.community}>
            <div className={community.info}>
                <h2 className={community.title}>Название общины</h2>
                <p className={community.about}>Значимость этих проблем
                    настолько очевидна, что существующая теория говорит о возможностях
                    модели развития! Прежде всего, высокое качество позиционных исследований
                    позволяет выполнить важные задания по разработке
                    распределения внутренних резервов и ресурсов. </p>
                <p className={community.adress}>Москва, Ул. Мира 233</p>
                <div className={community.buttons}>
                    <Link href="/details">
                        <button className={community.buttonDetail}>Подробнее об общине</button>
                    </Link>
                    <button className={community.buttonWebsite}>Посмотреть сайт</button>
                </div>
            </div>
            <Image className={community.image} src={ComImage} />
        </section>
    )
}