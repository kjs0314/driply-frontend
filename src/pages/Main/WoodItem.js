import React from 'react';
import { Link } from 'react-router-dom';
import './WoodItem.css';

const WoodItem = ({ p_id, p_price, p_name }) => {
    return (
        <li>
            <Link to={`/detailView/${p_id}`} className="product-link">
                {/* <img src={`../images/cosmetic${p_id}.JPG`} alt="" /> */}
                <div className="placeholder-img">이미지</div>
                {/* <div className="product-name">{p_name}</div> */}
                <div className="item-info">
                    <h3>우드 감성 가전</h3>
                    <p>
                        나만의 특별한 공간,
                        <br />
                        OOO 카페 라이프로 시작해보세요.
                    </p>
                    <button className="more-btn">구매하기</button>
                </div>
            </Link>
        </li>
    );
};

export default WoodItem;
