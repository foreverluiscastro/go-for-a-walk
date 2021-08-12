import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Box } from '../styles';
import WalkerPostLink from '../components/WalkerPostLink';


function WalkerPosts({ user }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then(setPosts)
    }, []);

    return (
        <Wrapper>
            <Box>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <WalkerPostLink key={post.id} post={post}/>
                    ))
                ) : (
                    <>
                    <h2>There are no job postings.</h2>
                    </>
                )}
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
`;

export default WalkerPosts;