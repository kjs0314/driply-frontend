import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('user');
    return (
        <div className="main">
            <div className="login-container">
                <h2>로그인</h2>
                <div className="login-tabs">
                    <button
                        className={`tab ${activeTab === 'user' ? 'active' : ''}`}
                        onClick={() => setActiveTab('user')}
                    >
                        소비자
                    </button>
                    <button
                        className={`tab ${activeTab === 'seller' ? 'active' : ''}`}
                        onClick={() => setActiveTab('seller')}
                    >
                        판매자
                    </button>
                </div>
                <form className="login-form">
                    <input type="text" placeholder="아이디" />
                    <input type="password" placeholder="비밀번호" />
                    <div className="login-options">
                        <Link to="/find-id">아이디 찾기</Link>|<Link to="/find-password">비밀번호 찾기</Link>
                    </div>
                    <button type="submit" className="login-btn">
                        로그인
                    </button>
                    <button type="button" className="signup-btn">
                        {activeTab === 'user' ? '소비자 ' : '판매자 '}
                        회원가입
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
