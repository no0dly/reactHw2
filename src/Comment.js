import React, {Component} from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    const { onDelete, id } = this.props;
    onDelete(id);
  }
  render() {
    const { text } = this.props;
    return (
      <div>
        <p> { text } </p>
        <span
          className="delete"
          onClick={this.handleDelete}
        >
          delete
        </span>
      </div>
    );
  }
}

export default Comment;