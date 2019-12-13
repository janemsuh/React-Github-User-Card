import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Followers from './Followers';

const Name = styled.p`
    font-weight: bold;
`

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/janemsuh/followers')
            .then(response => {
                this.setState({ followers: response.data })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='user-card'>
                <div className='img-container'>
                    <img src={this.props.data.avatar_url} alt='avatar' />
                </div>
                <div className='profile-data'>
                    <Name>{this.props.data.name} ({this.props.data.login})</Name>
                    <p>Lives in {this.props.data.location}</p>
                    <p>Follows {this.props.data.following} users</p>
                    <p>Has {this.props.data.followers} followers:</p>
                    <Followers followers={this.state.followers} />
                </div>
            </div>
        );
    }
}

export default UserCard;