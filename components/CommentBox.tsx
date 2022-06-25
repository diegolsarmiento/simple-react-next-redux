import React from 'react';
import { connect } from 'react-redux';

class CommentBox extends React.Component<{comment: string}, {comment: string}> {
    
    title = 'Add comment';
    buttonText = 'Submit Comment';
    state = { comment: ''};
    
    handleChange = (event: any) => {
        this.setState({ comment: event.target.value});
    }
    
    handleSubmit = (event: any) => {
        event.preventDefault();
        //TODO: this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }
    
    render () {
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} role="box">
                        <h4>{this.title}</h4>
                        <textarea aria-label="text-comment" onChange={this.handleChange} value={this.state.comment} />
                        <div>
                            <button>{this.buttonText}</button>
                        </div>
                    </form>
                    {/* TODO: onClick={this.props.fetchComments */}
                    <button aria-label="async-button" >Fetch Comments</button>
                </div>
            </div>
        )
    }
}

export default connect()(CommentBox);