import React from 'react';
import './CategoryPage.css';

const CategoryPage = () => {
    const items = [
        {
            id: 1,
            name: '[무료배송] 부쎄 스톤웨어 스프점시 24cm 그레이',
            price: '29,500',
            originalPrice: '51,000',
            discount: '42%',
        },
        {
            id: 2,
            name: '[무료배송] 부쎄 스톤웨어 스프점시 24cm 그레이',
            price: '29,500',
            originalPrice: '51,000',
            discount: '42%',
        },
        {
            id: 3,
            name: '[무료배송] 부쎄 스톤웨어 스프점시 24cm 그레이',
            price: '29,500',
            originalPrice: '51,000',
            discount: '42%',
        },
        {
            id: 4,
            name: '[무료배송] 부쎄 스톤웨어 스프점시 24cm 그레이',
            price: '29,500',
            originalPrice: '51,000',
            discount: '42%',
        },
        {
            id: 5,
            name: '[무료배송] 부쎄 스톤웨어 스프점시 24cm 그레이',
            price: '29,500',
            originalPrice: '51,000',
            discount: '42%',
        },
    ];

    return (
        <div className="main">
            <div className="category-page">
                <div className="category-sidebar">
                    <h3>홈카페 가전</h3>
                    <ul>
                        <li>에스프레소 머신</li>
                        <li>로스팅 머신</li>
                        <li>캡슐 머신</li>
                        <li>오븐, 에어프라이어</li>
                        <li>전기포트</li>
                    </ul>
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

                    <h3 className="section-title">New Item</h3>
                    <div className="item-grid">
                        {items.map((item) => (
                            <div key={item.id} className="item-card">
                                <div className="item-thumbnail"></div>
                                <p className="item-brand">스타일브</p>
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">
                                    <span className="discount">{item.discount}</span> {item.price}
                                </p>
                                <p className="original-price">{item.originalPrice}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
