// src/components/Sidebar.jsx
import React from 'react';
import './MyPageSidebar.css';

const MyPageSidebar = () => (
    <div className="sidebar">
        <h2>홍*동</h2>
        <nav>
            <ul>
                <li className="font-bold">나의 쇼핑정보</li>
                <li>
                    <a href="/mypage/order-history">주문내역 조회</a>
                </li>
                <li>
                    <a href="/mypage/subscription">구독내역 조회</a>
                </li>
                <li>
                    <a href="/mypage/refund">취소/반품/교환 내역</a>
                </li>

                <li className="font-bold">나의 활동정보</li>
                <li>
                    <a href="/mypage/inquiries">문의관리</a>
                </li>
                <li>
                    <a href="/mypage/reviews">리뷰관리</a>
                </li>

                <li className="font-bold">나의 계정설정</li>
                <li>
                    <a href="/mypage/account-settings">회원정보수정</a>
                </li>
                <li>
                    <a href="/mypage/delivery-settings">배송지관리</a>
                </li>
                <li>
                    <a href="/mypage/coupons">쿠폰</a>
                </li>
            </ul>
        </nav>
    </div>
);

export default MyPageSidebar;
