import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [showCustomerService, setShowCustomerService] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowSearch(false);
            setIsClosing(false);
        }, 300);
    };

    const categories = [
        {
            id: 1,
            name: '카테고리',
            subcategories: [
                {
                    name: '홈카페 가전',
                    items: ['에스프레소 머신', '로스팅 머신', '캡슐 머신', '오븐, 에어프라이어', '전기포트'],
                },
                {
                    name: '홈카페 용품',
                    items: ['그릇, 커트러리', '컵, 잔, 텀블러', '커피, 티 용품', '주방잡화'],
                },
                {
                    name: '커피/차',
                    items: ['원두, 생두', '캡슐커피', '드립백', '찻잎, 티백, 분말'],
                },
                {
                    name: '식품',
                    items: ['베이커리', '카페 음료', '우유, 유제품'],
                },
                {
                    name: '인테리어',
                    items: ['테이블', '의자', '수납장', '선반', '조명', '기타'],
                },
            ],
        },
        {
            id: 2,
            name: '브랜드',
            subcategories: [],
        },
        // {
        //     id: 3,
        //     name: '구독',
        //     subcategories: [],
        // },
        {
            id: 4,
            name: '이벤트',
            subcategories: [],
        },
        {
            id: 5,
            name: '커뮤니티',
            subcategories: [],
        },
    ];

    return (
        <header className="header">
            <div className="top-menu">
                <ul>
                    <li>
                        <Link to="/signup">회원가입</Link>
                    </li>
                    |
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                    |<li>마이페이지</li>|
                    <li
                        className="customer-service"
                        onMouseEnter={() => setShowCustomerService(true)}
                        onMouseLeave={() => setShowCustomerService(false)}
                    >
                        고객센터 &nbsp;
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.827148 1.08887L5.00071 4.91122L9.17291 1.08887"
                                stroke="#8B8F93"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        {showCustomerService && (
                            <div className="customer-service-container">
                                <div className="customer-service-dropdown">
                                    <ul>
                                        <li>
                                            <Link to="/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to="/inquiry">1:1 문의</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-inquiry">상품 문의</Link>
                                        </li>
                                        <li>
                                            <Link to="/notice">공지사항</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </div>

            <div className="main-header">
                <div className="main-header-inner">
                    <div className="logo">
                        <Link to="/">DRIPLY</Link>
                    </div>
                    <nav className="main-nav">
                        <ul className="category-list">
                            {categories.map((category) => (
                                <li
                                    key={category.id}
                                    onMouseEnter={() => setActiveCategory(category.id)}
                                    onMouseLeave={() => setActiveCategory(null)}
                                >
                                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                                    {activeCategory === category.id && category.subcategories.length > 0 && (
                                        <div className="subcategory-container">
                                            <ul className="subcategory-list">
                                                {category.subcategories.map((subcat, index) => (
                                                    <div key={index} className="subcategory-column">
                                                        <h3>{subcat.name}</h3>
                                                        <ul>
                                                            {subcat.items.map((item, itemIndex) => (
                                                                <li key={itemIndex}>
                                                                    <Link
                                                                        to={`/category/${category.id}/${index}/${itemIndex}`}
                                                                    >
                                                                        {item}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-icons">
                        <button className="search-btn" onClick={() => setShowSearch(true)}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.1758 10.3457C20.1758 8.97852 19.916 7.69336 19.3965 6.49023C18.877 5.28711 18.166 4.23893 17.2637 3.3457C16.3613 2.45247 15.3086 1.74609 14.1055 1.22656C12.9023 0.707031 11.6172 0.447266 10.25 0.447266C8.88281 0.447266 7.59766 0.707031 6.39453 1.22656C5.19141 1.74609 4.13867 2.45247 3.23633 3.3457C2.33398 4.23893 1.62305 5.28711 1.10352 6.49023C0.583984 7.69336 0.324219 8.97852 0.324219 10.3457C0.324219 11.7129 0.583984 13.0026 1.10352 14.2148C1.62305 15.4271 2.33398 16.4798 3.23633 17.373C4.13867 18.2663 5.19141 18.9727 6.39453 19.4922C7.59766 20.0117 8.88281 20.2715 10.25 20.2715C11.6172 20.2715 12.9023 20.0117 14.1055 19.4922C15.3086 18.9727 16.3613 18.2663 17.2637 17.373C18.166 16.4798 18.877 15.4271 19.3965 14.2148C19.916 13.0026 20.1758 11.7129 20.1758 10.3457ZM10.25 17.9473C9.21094 17.9473 8.23112 17.7467 7.31055 17.3457C6.38997 16.9447 5.58333 16.4023 4.89062 15.7188C4.19792 15.0352 3.6556 14.2331 3.26367 13.3125C2.87174 12.3919 2.67578 11.403 2.67578 10.3457C2.67578 9.30664 2.87174 8.32682 3.26367 7.40625C3.6556 6.48568 4.19792 5.68359 4.89062 5C5.58333 4.31641 6.38997 3.77409 7.31055 3.37305C8.23112 2.97201 9.21094 2.77148 10.25 2.77148C11.2891 2.77148 12.2689 2.97201 13.1895 3.37305C14.11 3.77409 14.9167 4.31641 15.6094 5C16.3021 5.68359 16.8444 6.48568 17.2363 7.40625C17.6283 8.32682 17.8242 9.30664 17.8242 10.3457C17.8242 11.403 17.6283 12.3919 17.2363 13.3125C16.8444 14.2331 16.3021 15.0352 15.6094 15.7188C14.9167 16.4023 14.11 16.9447 13.1895 17.3457C12.2689 17.7467 11.2891 17.9473 10.25 17.9473ZM17.2227 19.0137L18.918 17.3457L23.6484 22.0762L21.9805 23.7715L17.2227 19.0137Z"
                                    fill="black"
                                />
                            </svg>
                        </button>

                        <Link to="/cart" className="cart-btn">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="40" height="40" fill="url(#pattern0_119_216)" />
                                <defs>
                                    <pattern
                                        id="pattern0_119_216"
                                        patternContentUnits="objectBoundingBox"
                                        width="1"
                                        height="1"
                                    >
                                        <use href="#image0_119_216" transform="scale(0.025)" />
                                    </pattern>
                                    <image
                                        id="image0_119_216"
                                        width="40"
                                        height="40"
                                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNGRjBGOEFCNUNFQzExRUM4ODdEODc3NkEyNUZDRDIwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNGRjBGOEFDNUNFQzExRUM4ODdEODc3NkEyNUZDRDIwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0ZGMEY4QTk1Q0VDMTFFQzg4N0Q4Nzc2QTI1RkNEMjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0ZGMEY4QUE1Q0VDMTFFQzg4N0Q4Nzc2QTI1RkNEMjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5LnF3WAAACHklEQVR42uyYzy8DQRTHu6IhilRpVZuWRIQLjlz8A06cuTr4S8TBnbP4E0gjrg5uEoSLH6kfXdE0mlYUpd7w3eSlaXen9kl72Jd8O9uZ2TefnZk3M7tGpVLxtbK1+VrcPEAPsOmmothOmrZA2ic9Q+p6UaR9AcA11Q50Aln/15sNuASQU9Isy59hoMvNAvQD4oU0XqN8jFQEvL8ZgMPooT2bOruoM/JXwPYGY6qbXUeR5kkBklHdNgJG2SApy8qKug0aTvPMMH7aVT9bpHlSB4rUwwVJb6RCndt7UF+BlpGn6qdIK78dWBEBVD2XJvWSLlDUSRpFD97VuT2Oh7gklZA3gR5MqAdzDETNOaicfWF9s2wSw7hj434bdaZYXgp5SZ32dXeSEIb5huW9NzB3ed1r5tPRdIOkH2ma5V2RVklHNvdtkA4xxJbdIh2QBLQiNsPyPkibDvcdQ9zMKp8ih4VolXM3ZrKlRwwwjjQrAPjEAk8M0NoJcgKAObYTifZgSRDwlY2Ka0C10Ucwd/ICgAUEW8TuENEIYADO7tl25caUjwdSGL5dAwbhKCN4kFeAXaQ+CcBQjTXQrWV0dxMdwDB7amnAsARgQnCRrgZMSgAm/wHQ1F2sdQCHkD4KAlq+YhKAMZwFTWHAT0nArHAUm/DpeKLROW5Zx/YDnIQlzMASU5YAPCNNk+aEv7qo95Jz12913tctD9ADbHH7FmAAalqfrFhIk2MAAAAASUVORK5CYII="
                                    />
                                </defs>
                            </svg>
                            <span className="cart-count">0</span>
                        </Link>
                    </div>
                </div>
            </div>

            {showSearch && (
                <div className={`search-modal ${isClosing ? 'fade-out' : ''}`}>
                    <div className="search-wrap">
                        <div className="search-header">
                            <h2>검색하기</h2>
                            <button className="close-btn" onClick={handleClose}>
                                ×
                            </button>
                        </div>

                        <div className="search-input">
                            <input type="text" placeholder="검색어를 입력해주세요." />
                            <button className="search-modal-btn">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.1758 10.3457C20.1758 8.97852 19.916 7.69336 19.3965 6.49023C18.877 5.28711 18.166 4.23893 17.2637 3.3457C16.3613 2.45247 15.3086 1.74609 14.1055 1.22656C12.9023 0.707031 11.6172 0.447266 10.25 0.447266C8.88281 0.447266 7.59766 0.707031 6.39453 1.22656C5.19141 1.74609 4.13867 2.45247 3.23633 3.3457C2.33398 4.23893 1.62305 5.28711 1.10352 6.49023C0.583984 7.69336 0.324219 8.97852 0.324219 10.3457C0.324219 11.7129 0.583984 13.0026 1.10352 14.2148C1.62305 15.4271 2.33398 16.4798 3.23633 17.373C4.13867 18.2663 5.19141 18.9727 6.39453 19.4922C7.59766 20.0117 8.88281 20.2715 10.25 20.2715C11.6172 20.2715 12.9023 20.0117 14.1055 19.4922C15.3086 18.9727 16.3613 18.2663 17.2637 17.373C18.166 16.4798 18.877 15.4271 19.3965 14.2148C19.916 13.0026 20.1758 11.7129 20.1758 10.3457ZM10.25 17.9473C9.21094 17.9473 8.23112 17.7467 7.31055 17.3457C6.38997 16.9447 5.58333 16.4023 4.89062 15.7188C4.19792 15.0352 3.6556 14.2331 3.26367 13.3125C2.87174 12.3919 2.67578 11.403 2.67578 10.3457C2.67578 9.30664 2.87174 8.32682 3.26367 7.40625C3.6556 6.48568 4.19792 5.68359 4.89062 5C5.58333 4.31641 6.38997 3.77409 7.31055 3.37305C8.23112 2.97201 9.21094 2.77148 10.25 2.77148C11.2891 2.77148 12.2689 2.97201 13.1895 3.37305C14.11 3.77409 14.9167 4.31641 15.6094 5C16.3021 5.68359 16.8444 6.48568 17.2363 7.40625C17.6283 8.32682 17.8242 9.30664 17.8242 10.3457C17.8242 11.403 17.6283 12.3919 17.2363 13.3125C16.8444 14.2331 16.3021 15.0352 15.6094 15.7188C14.9167 16.4023 14.11 16.9447 13.1895 17.3457C12.2689 17.7467 11.2891 17.9473 10.25 17.9473ZM17.2227 19.0137L18.918 17.3457L23.6484 22.0762L21.9805 23.7715L17.2227 19.0137Z"
                                        fill="#A3A3A3"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="search-tags">
                            <div className="tag-title">최근 검색어</div>

                            <div className="tag-list">
                                <span className="tag">#워플메이커</span>
                                <span className="tag">#완전기</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
