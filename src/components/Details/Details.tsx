import Image from 'next/image';
import details from './details.module.css';
import MyCommunity from '@/src/interface';

export default function Details({title, info, adress,image}:MyCommunity) {

    return (
        <section className={details.container}>
            <h1 className={details.title}>{title}</h1>
            <div className={details.about}>
                <p className={details.info}>{info}</p>
                <Image src={image} className={details.photo} width={587} height={308} alt='фото общины' />
            </div>
            <p className={details.info}>{info}</p>
            <p className={details.adress}>{adress}</p>
            <button className={details.buttonWebsite}>Посмотреть сайт</button>
        </section>
    )
}