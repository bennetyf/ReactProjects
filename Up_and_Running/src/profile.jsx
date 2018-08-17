import React from 'react';
import PropTypes from 'prop-types';
import Hobby from './hobby';

const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            liked:0,
            hobbies: ['skating','music']
        };
        this.hobby = React.createRef();
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.likedCallback();
            }, 4000);
    }

    likedCallback(){
        let liked = this.state.liked;
        liked ++;
        this.setState({
            liked
        });
    }

    addHobbyCallback(){
        let hobbyInput = this.hobby.current;
        let val = hobbyInput.value;
        if (val) {
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, val];
            this.setState({
                hobbies
            }, ()=>{
                    hobbyInput.value = '';
                });
        }
    }

    render() {
        return (
            <div className="profile-component">
                <h1>My name is: {this.props.name}</h1>
                <h2>My age is: {this.props.age}</h2>
                <button onClick={this.likedCallback}> LikeMe! </button>
                <h2>Number of Likes: {this.state.liked}</h2>
                <h2>My Hobbies: </h2>
                <ul>
                    {this.state.hobbies.map((hobby,i) => <Hobby key={i} hobby={hobby}/>)}
                </ul>
                <input type="text" ref={this.hobby} />
                <button onClick={this.addHobbyCallback}>Add A Hobby</button>
            </div>
        )
    }
}

Profile.protoTypes = propTypes;

export default Profile;