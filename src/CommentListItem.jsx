export default function CommentListItem ({comment}) {
    return (
        <li className="commentListItem">
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <div className="commentListItem-footer">
                <h4>{comment.created_at}</h4>
                <h4>{comment.votes}</h4>
            </div>
        </li>
    )
} 