import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignUp.css';

const JoinCustomer = () => {
    const [activeTab, setActiveTab] = useState('user');
    const navigate = useNavigate();
    const location = useLocation();

    // 현재 경로에 따라 탭 상태를 설정
    useEffect(() => {
        if (location.pathname === '/join/seller') {
            setActiveTab('seller');
        } else {
            setActiveTab('user'); // 기본값은 소비자
        }
    }, [location.pathname]);

    const handleTabChange = (tab) => {
        if (tab === 'seller') {
            navigate('/join/seller'); // 판매자 페이지로 이동
        } else {
            navigate('/join/customer'); // 소비자 페이지로 이동
        }
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        birthdate: '',
        phone: '',
        terms: {
            all: false,
            personal: false,
            privacy: false,
            sms: false,
            marketing: false,
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'all') {
            setFormData({
                ...formData,
                terms: {
                    all: checked,
                    personal: checked,
                    privacy: checked,
                    sms: checked,
                    marketing: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                terms: { ...formData.terms, [name]: checked },
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 formData를 백엔드로 전송하는 로직 추가
        console.log('회원가입 데이터:', formData);
    };

    return (
        <div className="main">
            <div className="join-customer-container">
                <h2>회원가입</h2>
                <div className="tabs">
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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>아이디</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="4-20자리 / 영문, 숫자 사용 가능"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="8-16자리 / 영문 대소문자, 숫자 조합"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>비밀번호 확인</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="비밀번호를 다시 입력해주세요"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>이름</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름 입력"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>생년월일</label>
                        <input
                            type="date"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>전화번호</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="전화번호 입력"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="terms">
                        <label className="terms-name">약관</label>
                        <div className="terms-box">
                            <label>
                                <input
                                    type="checkbox"
                                    name="all"
                                    checked={formData.terms.all}
                                    onChange={handleCheckboxChange}
                                />
                                전체 동의
                            </label>
                            <p>마케팅 정보 수신 동의(이메일,SMS/MMS)(선택) 동의를 포함합니다.</p>
                            <label>
                                <input
                                    type="checkbox"
                                    name="personal"
                                    checked={formData.terms.personal}
                                    onChange={handleCheckboxChange}
                                    required
                                />
                                (필수) 개인회원 약관에 동의
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="privacy"
                                    checked={formData.terms.privacy}
                                    onChange={handleCheckboxChange}
                                    required
                                />
                                (필수) 개인정보 수집 및 이용에 동의
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="sms"
                                    checked={formData.terms.sms}
                                    onChange={handleCheckboxChange}
                                    required
                                />
                                (필수) SMS 발송 서비스 약관에 동의
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="marketing"
                                    checked={formData.terms.marketing}
                                    onChange={handleCheckboxChange}
                                />
                                (선택) 마케팅 정보 수신 동의 - 이메일, SMS/MMS
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">
                        동의하고 가입하기
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinCustomer;
