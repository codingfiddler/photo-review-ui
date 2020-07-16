import React, {PropTypes} from 'react'
import UserNavBar from '../components/userProfile/UserNavBar'

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <UserNavBar/>
            </div>
            
        )
    }
}
UserProfile.propTypes = {
};

export default UserProfile