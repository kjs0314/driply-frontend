import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NewItemGrid from '../../components/NewItemGrid';
import './SubcategoryPage.css';

const SubcategoryPage = () => {
    const { categoryId, subcatId, itemIndex } = useParams(); // URL 파라미터 가져오기
    const location = useLocation();
    const { categoryName, subcatName, itemName } = location.state || {}; // 상태 데이터 가져오기

    return (
        <div className="main">
            <div className="subcategory-page">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    {/* <a href="/">홈카페</a> &gt; */}
                    <a href={`/category/${categoryId}`}>{categoryName || '홈카페 가전'}</a> &gt; &nbsp;
                    <span>{subcatName || '에스프레소머신'}</span> &gt; &nbsp;
                </div>

                {/* 배너 */}
                <div className="category-banner">
                    <h2>홈카페 가전</h2>
                    <p> 머그컵</p>
                    <p> 찻잔 </p>
                </div>
                <NewItemGrid />
            </div>
        </div>
    );
};

export default SubcategoryPage;
