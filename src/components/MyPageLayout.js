import React from 'react';
import { Outlet } from 'react-router-dom'; // 하위 라우트를 렌더링하기 위해 사용
import Sidebar from './MyPageSidebar';
import './MyPageLayout.css';

const MyPageLayout = () => {
    return (
        <div className="main">
            <div className="mypage-layout">
                {/* 사이드바 */}
                <Sidebar />

                {/* 콘텐츠 영역 */}
                <div className="content">
                    {/* 상단 검은색 바 */}
                    <div className="top-bar"></div>

                    {/* 하위 라우트 콘텐츠 렌더링 */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MyPageLayout;
