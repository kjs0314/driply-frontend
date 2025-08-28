import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from './communitySlice';
import './index.css';
import CommunityCard from './CommunityCard';

const PAGE_SIZE = 16;

const Community = () => {
    const dispatch = useDispatch();
    // 상태 사용
    const page = useSelector((state) => state.community.page);
    const mockPosts = useSelector((state) => state.community.mockPosts);

    const totalPages = Math.ceil(mockPosts.length / PAGE_SIZE);
    const pagedPosts = mockPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <div className="main">
            <div className="community-page">
                <div className="community-header">
                    <h1>커뮤니티</h1>
                    <button className="community-post-btn">
                        글쓰기{' '}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.43628 5.45215L8.00103 10.5486L13.564 5.45215"
                                stroke="white"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
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
                    <button disabled={page === 1} onClick={() => dispatch(setPage(page - 1))}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.91113 10.1729L4.08878 5.99929L7.91113 1.82709"
                                stroke="#8B8F93"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            className={page === idx + 1 ? 'active' : ''}
                            onClick={() => dispatch(setPage(idx + 1))}
                        >
                            {idx + 1}
                        </button>
                    ))}
                    <button disabled={page === totalPages} onClick={() => dispatch(setPage(page + 1))}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.08887 1.82715L7.91122 6.00071L4.08887 10.1729"
                                stroke="#8B8F93"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Community;
