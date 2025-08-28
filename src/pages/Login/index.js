import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab, setLoginForm } from './loginSlice';
import './index.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const activeTab = useSelector((state) => state.login.activeTab);
    const loginForm = useSelector((state) => state.login.loginForm);

    // 탭 전환
    const handleTabChange = (tab) => {
        dispatch(setActiveTab(tab));
        // 필요하다면 탭 전환 시 입력값 초기화도 가능
        // dispatch(resetLoginForm());
    };

    const handleSignup = () => {
        if (activeTab === 'user') {
            navigate('/join/customer');
        } else {
            navigate('/join/seller');
        }
    };

    // input 입력값 변경
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(setLoginForm({ [name]: value }));
    };

    // 로그인 제출
    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리
        console.log('로그인 정보:', loginForm, activeTab);
        // 필요하다면 로그인 성공 시 폼 초기화
        // dispatch(resetLoginForm());
    };

    return (
        <div className="main">
            <div className="login-container">
                <h2>로그인</h2>
                <div className="login-tabs">
                    <button
                        className={`tab ${activeTab === 'user' ? 'active' : ''}`}
                        onClick={() => handleTabChange('user')}
                    >
                        소비자
                    </button>
                    <button
                        className={`tab ${activeTab === 'seller' ? 'active' : ''}`}
                        onClick={() => handleTabChange('seller')}
                    >
                        판매자
                    </button>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="아이디"
                        value={loginForm.username}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        value={loginForm.password}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="login-options">
                        <Link to="/find-id">아이디 찾기</Link>|<Link to="/find-password">비밀번호 찾기</Link>
                    </div>
                    <button type="submit" className="login-btn">
                        로그인
                    </button>
                    <button type="button" className="signup-btn" onClick={handleSignup}>
                        {activeTab === 'user' ? '소비자 ' : '판매자 '}
                        회원가입
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
