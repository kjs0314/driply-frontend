import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section1">
                    <h4> </h4>
                    <ul>
                        <li>NEW</li>
                        <li>주말가전</li>
                        <li>생활가전</li>
                        <li>계절가전</li>
                        <li>ETC.</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>고객센터</h4>
                    <ul>
                        <li>123-4567</li>
                        <li>공지사항</li>
                        <li>회원가입</li>
                        <li>나의쇼핑</li>
                        <li>공지사항</li>
                        <li>고객센터</li>
                        <li>이용안내</li>
                        <li>주문조회</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>ABOUT ORTE</h4>
                    <ul>
                        <li>드리플에 대하여</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>SOCIAL</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/">
                            <img src="images/instagram.png" alt="instagram" />
                        </a>
                        <a href="https://www.naver.com/">
                            <img src="images/naver.png" alt="naver" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img src="images/youtube.png" alt="youtube" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    <p>
                        Copyright © <strong>드리플 글로벌</strong> all rights reserved.
                    </p>
                </div>
                <div className="footer-links">
                    <span>회사소개</span>
                    <span>이용약관</span>
                    <span>개인정보처리방침</span>
                    <span>이용안내</span>
                </div>
            </div>
            <div className="company-info">
                <p>
                    주식회사 000&nbsp;&nbsp;|&nbsp;&nbsp; 대표자: 000 &nbsp;&nbsp;|&nbsp;&nbsp; TEL: 123-4567
                    &nbsp;&nbsp;|&nbsp;&nbsp; 사업자등록번호: 123-45-78910
                </p>
                <p>주소: 123456 서울특별시 강남구 00동</p>
                <p>
                    통신판매업신고 2022-서울강남-0123 &nbsp;&nbsp; [사업자정보확인] &nbsp;&nbsp;|&nbsp;&nbsp; 팩스:
                    02-111-2222
                </p>
                <p>
                    개인정보관리책임자: <strong>책임자</strong> (abc@g-naver.com)
                </p>
            </div>
        </footer>
    );
};

export default Footer;
