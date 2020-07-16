import React from 'react'
import EditUserNavBar from '../components/editUser/EditUserNavBar'

class EditUser extends React.Component {
    render() {
        return (
            <div>
                <EditUserNavBar/>
                <p> Hello this is the user profile</p>
            </div>
        )
    }
}

export default EditUser