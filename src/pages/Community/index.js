import React, { useState } from 'react';
import './index.css';
import CommunityCard from './CommunityCard';

const mockPosts = Array.from({ length: 37 }).map((_, i) => ({
    id: i + 1,
    user: '하루커피한잔',
    userDesc: '30대 집순이의 싱글라이프 #홈카페',
    image: `https://picsum.photos/seed/${i + 1}/300/300`,
    hashtags: ['#오늘의홈카페', '#제품소개'],
    content: '새로산 제품으로 꾸며본 우리집 홈카페 소개합니다!',
    likes: Math.floor(Math.random() * 50),
    comments: Math.floor(Math.random() * 20),
}));

const PAGE_SIZE = 16;

const Community = () => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(mockPosts.length / PAGE_SIZE);

    const pagedPosts = mockPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <div className="main">
            <div className="community-page">
                <div className="community-header">
                    <h1> </h1>
                    <button className="community-post-btn">
                        글쓰기{' '}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.43628 5.45215L8.00103 10.5486L13.564 5.45215"
                                stroke="white"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="community-grid">
                    {pagedPosts.map((post) => (
                        <CommunityCard
                            key={post.id}
                            user={post.user}
                            userDesc={post.userDesc}
                            image={post.image}
                            hashtags={post.hashtags}
                            content={post.content}
                            likes={post.likes}
                            comments={post.comments}
                        />
                    ))}
                </div>
                <div className="community-pagination">
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.91113 10.1729L4.08878 5.99929L7.91113 1.82709"
                                stroke="#8B8F93"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button key={idx} className={page === idx + 1 ? 'active' : ''} onClick={() => setPage(idx + 1)}>
                            {idx + 1}
                        </button>
                    ))}
                    <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.08887 1.82715L7.91122 6.00071L4.08887 10.1729"
                                stroke="#8B8F93"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Community;
