function BlogPost({ post }) {
    return (
      <article>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        {/* post content */}
      </article>
    );
  }