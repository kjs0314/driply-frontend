import React from 'react';
import './CollectionTab.css';

const currentBoxes = [
    { id: 1, title: '이번달 박스 1' },
    { id: 2, title: '이번달 박스 2' },
];

const previousBoxes = [
    { id: 3, title: '이전 박스 1' },
    { id: 4, title: '이전 박스 2' },
    { id: 5, title: '이전 박스 3' },
    { id: 6, title: '이전 박스 4' },
    { id: 7, title: '이전 박스 5' },
    { id: 8, title: '이전 박스 6' },
];

const CollectionTab = () => (
    <div className="collection-tab">
        <section className="box-section">
            <div className="box-label">이번달 드리플리 박스</div>
            <div className="box-list box-list--current">
                {currentBoxes.map((box) => (
                    <div className="box-card" key={box.id}>
                        {/* 이미지나 내용 추가 가능 */}
                        <div className="box-card-img" />
                    </div>
                ))}
            </div>
        </section>
        <section className="box-section">
            <div className="box-label">이전 드리플리 박스</div>
            <div className="box-list box-list--previous">
                {previousBoxes.map((box) => (
                    <div className="box-card" key={box.id}>
                        <div className="box-card-img" />
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default CollectionTab;
