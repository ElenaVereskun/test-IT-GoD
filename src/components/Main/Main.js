import { React } from 'react';
import Community from '@/src/components/Community/Community';
import RegionList from '@/src/components/RegionList/RegionList';
import SearchCommunity from '@/src/components/SearchCommunity/SearchCommunity';

export default function Main() {
    return (
        <div className='main'>
            <h1 className='main__title'>Список общин</h1>
            <div className='main__search'>
                <RegionList />
                <SearchCommunity />
            </div>
            <Community />
        </div>
    );
}