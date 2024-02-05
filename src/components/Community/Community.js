import { React } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ComImage from '@/src/images/community__image.svg'

export default function Community() {
    return (
        <section className='community'>
            <div className='community__info'>
                <h2 className='community__title'>Название общины</h2>
                <p className='community__about'>Значимость этих проблем
                    настолько очевидна, что существующая теория говорит о возможностях
                    модели развития! Прежде всего, высокое качество позиционных исследований
                    позволяет выполнить важные задания по разработке
                    распределения внутренних резервов и ресурсов. </p>
                <p className='community__adress'>Москва, Ул. Мира 233</p>
                <div className='community__buttons'>
                    <Link href="/details">
                        <button className='community__button-detail'>Подробнее об общине</button>
                    </Link>
                    <button className='community__button-website'>Посмотреть сайт</button>
                </div>
            </div>
            <Image className='community__image' src={ComImage} />
        </section>
    )
}