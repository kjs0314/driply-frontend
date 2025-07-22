import React from 'react';
import './CommunityCard.css';

const CommunityCard = ({
    user = '하루커피한잔',
    userDesc = '30대 집순이의 싱글라이프 #홈카페',
    profileImg,
    image,
    hashtags = ['#오늘의홈카페', '#제품소개'],
    content = '새로산 제품으로 꾸며본 우리집 홈카페 소개합니다!',
    likes = 17,
    bookmarks = 17,
    comments = 17,
}) => (
    <div className="community-card">
        <div className="community-card-header">
            <div className="community-profile">
                {profileImg ? (
                    <img src={profileImg} alt={user} className="community-profile-img" />
                ) : (
                    <div className="community-profile-placeholder" />
                )}
                <div>
                    <div className="community-user">{user}</div>
                    <div className="community-user-desc">{userDesc}</div>
                </div>
            </div>
        </div>
        <div className="community-card-img" style={{ backgroundImage: `url(${image})` }} />
        <div className="community-card-actions">
            <span>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.17188 2.17232C2.92199 1.42244 3.93922 1.00118 4.99988 1.00118C6.06053 1.00118 7.07777 1.42244 7.82788 2.17232L8.99988 3.34332L10.1719 2.17232C10.5409 1.79028 10.9822 1.48555 11.4703 1.27592C11.9583 1.06628 12.4832 0.955938 13.0143 0.951323C13.5454 0.946708 14.0721 1.04791 14.5637 1.24904C15.0553 1.45016 15.5019 1.74717 15.8775 2.12274C16.253 2.49832 16.55 2.94492 16.7512 3.43651C16.9523 3.92809 17.0535 4.45481 17.0489 4.98593C17.0443 5.51705 16.9339 6.04193 16.7243 6.52994C16.5146 7.01796 16.2099 7.45934 15.8279 7.82832L8.99988 14.6573L2.17188 7.82832C1.42199 7.07821 1.00073 6.06098 1.00073 5.00032C1.00073 3.93967 1.42199 2.92244 2.17188 2.17232V2.17232Z"
                        stroke="#6F7174"
                        stroke-width="1.66667"
                        stroke-linejoin="round"
                    />
                </svg>

                {likes}
            </span>
            <span>
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.3334 16.5L7.50008 13.1667L1.66675 16.5V3.16667C1.66675 2.72464 1.84234 2.30072 2.1549 1.98816C2.46746 1.67559 2.89139 1.5 3.33341 1.5H11.6667C12.1088 1.5 12.5327 1.67559 12.8453 1.98816C13.1578 2.30072 13.3334 2.72464 13.3334 3.16667V16.5Z"
                        stroke="#6F7174"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                {bookmarks}
            </span>
            <span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 16.5L11.038 12.587H14.8333C15.7538 12.587 16.5 11.8408 16.5 10.9203V3.16667C16.5 2.24619 15.7538 1.5 14.8333 1.5H3.16667C2.24619 1.5 1.5 2.24619 1.5 3.16667V10.9203C1.5 11.8408 2.24619 12.587 3.16667 12.587H7.125L9 16.5Z"
                        stroke="#6F7174"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                {comments}
            </span>
        </div>
        <div className="community-card-hashtags">
            {hashtags.map((tag, i) => (
                <span key={i} className="community-hashtag">
                    {tag}
                </span>
            ))}
        </div>
        <div className="community-card-content">{content}</div>
    </div>
);

export default CommunityCard;
