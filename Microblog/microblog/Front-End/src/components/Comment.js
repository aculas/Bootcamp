import React from "react";

// Comment List: shows a list of comments that gets passed down as props.

function Comment({ deleteComment, text, id }) {
  function handleDelete(evt) {
    deleteComment(id);
  }

  return (
    <div>
      <p>
        {deleteComment && (
          <i className="fa fa-times text-danger mr-2" onClick={handleDelete} />
        )}

        {text}
      </p>
    </div>
  );
}

export default Comment;
