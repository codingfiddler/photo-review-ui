import React from 'react'
import HomeNavBar from '../components/home/HomeNavBar'
import SignIn from "../components/home/SignIn"

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeNavBar />
                <SignIn />
            </div>
        )
    }
}

export default Home
