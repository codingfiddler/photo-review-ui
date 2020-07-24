import React from 'react'
import HomeNavBar from '../components/home/HomeNavBar'
import Login from "../components/home/Login"
class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeNavBar />
                <Login />
            </div>
        )
    }
}

export default Home
