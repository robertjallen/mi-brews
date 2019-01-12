import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

class Comments extends React.Component {

  handleNewComment(comment) {
      console.log(comment.text);
  }

  render() {

    const venueID = this.props.location.state.venues.id;
    console.log(venueID);

    return (
      <ReactDisqusComments
        shortname="allentowngroup"
        identifier={venueID}
        title="Brewery Thread"
        url="https://www.allentowngroup.com/mi-brews/brewery"
        // url="http://localhost:3000"
        category_id="entertainment"
        onNewComment={this.handleNewComment} />
    );
  }
}
export default Comments;