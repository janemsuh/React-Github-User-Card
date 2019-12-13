import React from 'react';

class Followers extends React.Component {
    render() {
        return (
            <div className='follower-list'>
                {this.props.followers.map(follower => {
                    return (
                        <div key={follower.id}>
                            <p>{follower.login}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Followers;