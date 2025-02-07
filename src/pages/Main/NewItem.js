import React from 'react';
import { Link } from 'react-router-dom';
import './NewItem.css';

const NewItem = ({ p_id, p_price, p_name }) => {
    return (
        <li>
            <Link to={`/detailView/${p_id}`} className="product-link">
                {/* <img src={`../images/cosmetic${p_id}.JPG`} alt="" /> */}
                <div className="placeholder-img">이미지</div>
                <div className="product-info">
                    <div className="product-name">{p_name}</div>
                    <div className="product-price">{p_price.toLocaleString()}원</div>
                    <div className="product-tags">
                        {/* <span className="tag-hot">조기품절</span>
            <span className="tag-new">NEW</span> */}
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default NewItem;
