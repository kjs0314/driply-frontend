import React from 'react';
import NewItemGrid from '../../components/NewItemGrid';
import { useLocation, useParams } from 'react-router-dom';
import './CategoryPage.css';

const categories = [
    {
        id: 'category',
        name: '카테고리',
        subcategories: [
            {
                name: '홈카페 가전',
                id: 0,
                items: ['에스프레소 머신', '로스팅 머신', '캡슐 머신', '오븐, 에어프라이어', '전기포트'],
            },
            {
                name: '홈카페 용품',
                id: 1,
                items: ['그릇, 커트러리', '컵, 잔, 텀블러', '커피, 티 용품', '주방잡화'],
            },
            {
                name: '커피/차',
                id: 2,
                items: ['원두, 생두', '캡슐커피', '드립백', '찻잎, 티백, 분말'],
            },
            {
                name: '식품',
                id: 3,
                items: ['베이커리', '카페 음료', '우유, 유제품'],
            },
            {
                name: '인테리어',
                id: 4,
                items: ['테이블', '의자', '수납장', '선반', '조명', '기타'],
            },
        ],
    },
    {
        id: 'brand',
        name: '브랜드',
        subcategories: [],
    },
    // {
    // id: 3,
    // name: '구독',
    // subcategories: [],
    // },
    {
        id: 'event',
        name: '이벤트',
        subcategories: [],
    },
    {
        id: 'community',
        name: '커뮤니티',
        subcategories: [],
    },
];

const CategoryPage = () => {
    const location = useLocation();
    const { categoryId, subcategoryId } = useParams();
    const { category, subcat } = location.state || {};

    const currentCategory = category || categories.find((cat) => cat.id === categoryId);
    const currentSubcat = subcat || currentCategory?.subcategories?.find((sub) => sub.id === parseInt(subcategoryId));

    return (
        <div className="main">
            <div className="category-page">
                <div className="category-sidebar">
                    <h3>{currentSubcat ? currentSubcat.name : '카테고리'}</h3>
                    <ul>{currentSubcat && currentSubcat.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>

                <div className="category-main">
                    <div className="category-banner">
                        <h2>
                            나에게 맞는
                            <br />
                            전기포트 A to Z
                        </h2>
                        <p>월간 가전 가이드 vol.2</p>
                    </div>
                </div>
            </div>
            <NewItemGrid />
        </div>
    );
};

export default CategoryPage;
