import React from 'react';

// import { Link } from 'react-router-dom';
import BestItem from './BestItem';
import NewItem from './NewItem';
import WoodItem from './WoodItem';
import FrenchItem from './FrenchItem';
import ImageSlider from './ImageSlider';
import './index.css';

const data = [
    {
        p_id: '1',
        p_name: '에스프레소 커피머신 아이보리',
        p_price: '259,000',
    },
    {
        p_id: '2',
        p_name: '에스프레소 커피머신 아이보리',
        p_price: '259,000',
    },
    {
        p_id: '3',
        p_name: '에스프레소 커피머신 아이보리',
        p_price: '259,000',
    },
    {
        p_id: '4',
        p_name: '에스프레소 커피머신 아이보리',
        p_price: '259,000',
    },
];

const MainPage = () => {
    const bannerData = [
        {
            id: 1,
            image: '/images/banner/banner1.png',
            alt: '배너이미지1',
        },
        {
            id: 2,
            image: '/images/banner/banner2.png',
            alt: '배너이미지2',
        },
        {
            id: 3,
            image: '/images/banner/banner3.png',
            alt: '배너이미지3',
        },
    ];

    return (
        <div className="main">
            <div className="visual">
                <ImageSlider slides={bannerData} />
            </div>

            <div className="intro ">
                <div className="collection">
                    <h3> # FW COLLECTION</h3>
                    <h2>
                        평범한 일상에 특별한 취향을 담아,
                        <br />
                        감성가전
                    </h2>
                </div>
                <p>
                    당신의 모든 이야기는 가치가 있고,
                    <br />
                    당신의 취향들이므로 모든 순간이 새롭게 만들어집니다.
                </p>
            </div>

            <div className="best-item">
                <h2>Best Item</h2>
                <ul>
                    {data.map((pro) => (
                        <BestItem key={pro.p_id} p_id={pro.p_id} p_name={pro.p_name} p_price={pro.p_price} />
                    ))}
                </ul>
            </div>

            <div className="new-item">
                <h2>New Item</h2>
                <ul>
                    {data.slice(0, 2).map((pro) => (
                        <NewItem key={pro.p_id} p_id={pro.p_id} p_name={pro.p_name} p_price={pro.p_price} />
                    ))}
                </ul>
            </div>

            <div className="wood-item">
                <h2>우드 스타일</h2>
                <ul>
                    {data.slice(0, 1).map((pro) => (
                        <WoodItem key={pro.p_id} p_id={pro.p_id} p_name={pro.p_name} p_price={pro.p_price} />
                    ))}
                </ul>
            </div>

            <div className="french-item">
                <h2>프렌치 스타일</h2>
                <ul>
                    {data.slice(0, 1).map((pro) => (
                        <FrenchItem key={pro.p_id} p_id={pro.p_id} p_name={pro.p_name} p_price={pro.p_price} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MainPage;
