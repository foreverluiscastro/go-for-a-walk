import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PostLink({ post }) {
    const postTime = post.time

    function convertTime(postTime) {
        const time = postTime.split("T")[1].split(".")[0].split(":").slice(0, -1)
        if (time.length > 1) {
            time[2] = time[0] < 12 ? "AM" : "PM" ;
            time[0] = time[0] > 12 ? time[0] -12 : time[0];
            time.splice(1, 0, ":")
        }
        return time.join("")
    }

    return (
        <WrapperChild>
            <Link>
                <h1>{post.number_of_dogs} dog(s) for {post.trip_time_in_minutes} minutes</h1>
                <h2>At: {convertTime(postTime)}</h2>
                <h3>{post.date}</h3>
            </Link>
        </WrapperChild>
    )
}

const WrapperChild = styled.div`
  flex: 1;
`;

export default PostLink;