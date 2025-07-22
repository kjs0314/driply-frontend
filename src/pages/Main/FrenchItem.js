import React from 'react';
import { Link } from 'react-router-dom';
import './FrenchItem.css';

const FrenchItem = ({ p_id, p_price, p_name }) => {
    return (
        <li>
            <Link to={`/product/${p_id}`} className="product-link">
                {/* <img src={`../images/cosmetic${p_id}.JPG`} alt="" /> */}
                <div className="placeholder-img">이미지</div>
                {/* <div className="product-name">{p_name}</div> */}
                <div className="item-info">
                    <h3>프렌치 감성 가전 스타일</h3>
                    <p>
                        나만의 작은 카페,
                        <br />
                        OOO 커피 머신으로 시작해보세요.
                    </p>
                    <button className="more-btn">구매하기</button>
                </div>
            </Link>
        </li>
    );
};

export default FrenchItem;
