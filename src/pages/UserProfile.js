import React from 'react'
import UserNavBar from '../components/userProfile/UserNavBar'
import profile from './user_profile_photo.png'
//import Grid from '@material-ui/core/Grid'
import turtle from './facts-turtles.jpg'
import landscape from './landscape.jpg'

class UserProfile extends React.Component {
    render() {
        return (
            <div id= "container">
                <UserNavBar/>
                <div id="user information" >
                    <img src={profile} alt="profile" height='120' width='120' style={{ marginLeft : 
                    '5%', marginRight : '3.4%', verticalAlign : 'middle', marginTop : '2.5%'}}/>
                    <span> John Doe | </span>
                    <span> Brooklyn, New York | </span>
                    <span> Professional Photographer </span>
                </div>

                <div class = "user images">
                    <div class = "image container" style = {{float: 'left', marginLeft: '5%', marginRight: "3%", marginTop: '5%' }}>
                        <img src = {turtle} alt = "turtle_pic" height = "220" width = "230"/>
                    </div>

                    <div class = "image container" style = {{float: 'left', marginTop: '4.8%' }}>
                        <img src = {landscape} alt = "landscape" height = "220" width = "230"/>
                    </div>               
                </div>
            </div>           
        )
    }
}


export default UserProfile