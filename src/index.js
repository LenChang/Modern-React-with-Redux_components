// https://semantic-ui.com/

import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const getTime = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000).toLocaleTimeString();
};

const now = new Date();
const num = Math.floor(Math.random() * 100);

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this ?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Len"
          timeAgo={getTime(now, num)}
          content="Nice blog post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Ralph"
          timeAgo={getTime(now, num)}
          content="I like the subject"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
