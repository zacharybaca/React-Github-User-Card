import React from 'react';
import styled from 'styled-components';



const ProfileImage = styled.img`
    width: 300px;
    height: 300px;
`

const ProfileDiv = styled.div`
    display: flex;
`



const UserCard = (props) => {
    return (
        <div>
            <ProfileDiv>
                <ProfileImage  src = {props.avatar_url} alt="Profile" />
            </ProfileDiv>

            <div>
                <h1>{props.name}</h1>
                <h3>{props.location}</h3>
                <h4>{props.followers}</h4>
            </div>
        </div>
    )
}

export default UserCard;