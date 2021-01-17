import React from "react";

//In this case, we are seeing why useState is important in the first place.

//Hence, the title of this: error-example.js

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "hello people";
    console.log(title); //even though we update the title,
    //the react fragment is not re-rendered. Because of that,
    //the website won't display "hello people"
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
