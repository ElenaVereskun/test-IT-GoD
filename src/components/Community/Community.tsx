import Image from 'next/image';
import Link from 'next/link';
import community from './community.module.css';
import MyCommunity from '@/src/interface';

export default function Community({ title, about, adress, image }: MyCommunity) {

    return (
        <section className={community.container}>
            <div className={community.info}>
                <h2 className={community.title}>{title}</h2>
                <p className={community.about}>{about} </p>
                <p className={community.adress}>{adress}</p>
                <div className={community.buttons}>
                    <Link href="/details">
                        <button className={community.buttonDetail}>Подробнее об общине</button>
                    </Link>
                    <button className={community.buttonWebsite}>Посмотреть сайт</button>
                </div>
            </div>
            <Image className={community.image} src={image} alt='фото общины' />
        </section>
    )
}