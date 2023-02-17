function Book(props) {
  const { author, title, img, children, getBook, id, order } = props;

  console.log(props, order);
  return (
    <article className='book'>
      <p className='order'>{`#${order}`}</p>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getBook.bind(null, id)}>Click me</button>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
}

export default Book;
