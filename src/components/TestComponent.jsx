import React from 'react'
import Axios from 'axios';

// Pure functional component
// export default function TestComponent(props) {
//     return (
//         <p>Hello There {props.name}!</p>
//     )
// }

export default class TestComponent extends React.Component {

    state = {
        name: 'Starter name'
    }

    handleChange = e => {
        const newValue = e.target.value;
        this.setState({'name': newValue});
    }

    render() {
        const { name } = this.state;
        return (
            <>
                <input name="Name" type="text" value={name} onChange={this.handleChange} />
                <p>{this.state.name}</p>
            </>
        )
    }
}
