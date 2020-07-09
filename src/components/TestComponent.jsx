import React from 'react'

// export default function TestComponent(props) {
//     return (
//         <p>Hello There {props.name}!</p>
//     )
// }

export default class TestComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Starter Name'
        }
    }

    onChange(e) {
        const newValue = e.target.value;
        this.setState({'name': newValue})
    }

    render() {
        const { name } = this.state;
        return (
            <>
                <input name="Name" type="text" value={name} onChange={this.onChange} />
                <p>{this.state.name}</p>
            </>
        )
    }
}
