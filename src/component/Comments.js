import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

class Comments extends React.Component {

  handleNewComment(comment) {
      console.log(comment.text);
  }

  render() {

    const venue = this.props.location.state.venues;
    
    return (
      <ReactDisqusComments
        shortname="mi-brews"
        identifier={venue.name + venue.id}
        title={venue.name}
        url="https://www.allentowngroup.com/mi-brews/"
        category_id={venue.id}
        onNewComment={this.handleNewComment} />
    );
  }
}
export default Comments;