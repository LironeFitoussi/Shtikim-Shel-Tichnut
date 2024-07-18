function Comments({ commentsPromise }) {
    const comments = use(commentsPromise);
    return comments.map(comment => <p key={comment.id}>{comment}</p>);
}

function Page({ commentsPromise }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Comments commentsPromise={commentsPromise} />
        </Suspense>
    );
}