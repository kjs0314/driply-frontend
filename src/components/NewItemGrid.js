import React from 'react';
import './NewItemGrid.css';

const NewItemGrid = () => {
    // 아이템 데이터 관리
    const items = [
        {
            id: 1,
            name: '[무료배송] 부쏠 스톤웨어 스프접시 24cm 그레이',
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
        <div className="new-item-grid">
            <h3 className="section-title">New Item</h3>
            <div className="item-grid">
                {items.map((item) => (
                    <div key={item.id} className="item-card">
                        <div className="item-thumbnail"></div>
                        <p className="item-brand">
                            스타우브{' '}
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2.80674 3.14165C3.70687 2.24179 4.92755 1.73628 6.20034 1.73628C7.47313 1.73628 8.69381 2.24179 9.59394 3.14165L11.0003 4.54685L12.4067 3.14165C12.8495 2.6832 13.3792 2.31753 13.9648 2.06597C14.5504 1.8144 15.1803 1.68199 15.8176 1.67645C16.455 1.67091 17.087 1.79236 17.6769 2.03371C18.2668 2.27506 18.8028 2.63147 19.2534 3.08216C19.7041 3.53284 20.0605 4.06877 20.3019 4.65867C20.5432 5.24858 20.6647 5.88064 20.6591 6.51798C20.6536 7.15532 20.5212 7.78518 20.2696 8.37079C20.0181 8.95641 19.6524 9.48607 19.1939 9.92885L11.0003 18.1237L2.80674 9.92885C1.90688 9.02872 1.40137 7.80804 1.40137 6.53525C1.40137 5.26246 1.90688 4.04179 2.80674 3.14165V3.14165Z"
                                    stroke="#D9D9D9"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </p>
                        <p className="item-name">{item.name}</p>
                        <p className="original-price">{item.originalPrice}</p>
                        <p className="item-price">
                            <span className="discount">{item.discount}</span> {item.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewItemGrid;
