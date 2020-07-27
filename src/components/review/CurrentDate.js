import React from 'react';

export class CurrentDate extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date =
                (today.getMonth() + 1) + '/' +
                today.getDate() + '/' +
                today.getFullYear() + ' ' +
                today.getHours() + ':' +
                today.getMinutes();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            this.state.date
        );
    }
}

export default CurrentDate