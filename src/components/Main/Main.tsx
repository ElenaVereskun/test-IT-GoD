import Community from '@/src/components/Community/Community';
import RegionList from '@/src/components/RegionList/RegionList';
import SearchCommunity from '@/src/components/SearchCommunity/SearchCommunity';
import main from './main.module.css';
import ComImage from '@/src/images/community__image.svg';

export default function Main() {

    return (
        <div className={main.container}>
            <h1 className={main.title}>Список общин</h1>
            <div className={main.search}>
                <RegionList />
                <SearchCommunity />
            </div>
            <Community
                title='Название общины'
                about='Значимость этих проблем настолько очевидна,
             что существующая теория говорит о возможностях модели 
             развития! Прежде всего, высокое качество позиционных 
             исследований позволяет выполнить важные задания по разработке 
             распределения внутренних резервов и ресурсов'
                adress='Москва, Ул. Мира 233'
                image={ComImage} />
        </div>
    );
}