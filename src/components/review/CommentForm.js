import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import AssignmentLateSharpIcon from '@material-ui/icons/AssignmentLateSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';

class CommentForm extends React.Component {

    render() {

        return (
            <Container maxWidth="md" style={{ borderRadius: '5px', borderStyle: 'solid', borderWidth: '1px', padding: "20px" }}>
                <form onSubmit>

                    {/* Your name: 
                    <input 
                        type="text"
                        placeholder="Please enter your name"
                        onChange={this.handleChange('name')}
                        style={{margin: "10px"}}
                    /> */}

                    {/* <AssignmentTurnedInSharpIcon style={{color: 'green'}}/> */}
                    <textarea
                        style={{ width: "100%", borderRadius: "5px" }}
                        placeholder="Leave a positive review..."
                    >
                    </textarea>

                    {/* <AssignmentLateSharpIcon style={{color: 'red'}}/>
                    <textarea 
                        style={{ width: "100%", borderRadius: "5px" }}
                        placeholder="Leave a constructive review..."
                        onChange={this.handleChange('negativeComment')}
                    >
                    </textarea> */}

                    <Button style={{ backgroundColor: "#32e0c4", width: "100%" }}>Submit</Button>

                </form>
            </Container>
        )
    }
}

export default CommentForm
