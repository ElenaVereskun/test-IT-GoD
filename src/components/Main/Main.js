import { React } from 'react';
import Community from '@/src/components/Community/Community';
import RegionList from '@/src/components/RegionList/RegionList';
import SearchCommunity from '@/src/components/SearchCommunity/SearchCommunity';
import main from './main.module.css';

export default function Main() {
    return (
        <div className={main.main}>
            <h1 className={main.title}>Список общин</h1>
            <div className={main.search}>
                <RegionList />
                <SearchCommunity />
            </div>
            <Community />
        </div>
    );
}