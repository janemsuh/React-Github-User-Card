import React from 'react';
import axios from 'axios';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        };
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/janemsuh/followers')
            .then(response => this.state({ followers: response.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='user-card'>
                <div className='img-container'>
                    <img src={this.props.data.avatar_url} alt='avatar' />
                </div>
                <div className='profile-data'>
                    <div className='name'>
                        {this.props.data.name}
                    </div>
                    <div className='location'>
                        {this.props.data.location}
                    </div>
                    <div className='following'>
                        `Follows: ${this.props.data.following}`;
                    </div>
                    <div className='followers'>
                        `Followers: ${this.props.data.followers}`;
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;