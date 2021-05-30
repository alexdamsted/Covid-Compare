const NewsLink = (props) => {
  return (
    <div>
      <h6 style={{ color: "#317ecc" }}>
        <u>
          <a onClick={props.toggle}>{props.Link}</a>
        </u>
      </h6>
    </div>
  );
};

export default NewsLink;
