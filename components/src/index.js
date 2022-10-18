import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Ankit"
          timeAgo="Today at 4:45PM"
          content="Nice Blog"
          avatar="https://avatars.dicebear.com/api/male/john.svg"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Akshat"
          timeAgo="Today at 2:00PM"
          content="Great going"
          avatar="https://avatars.dicebear.com/api/male/mary.svg"
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Gulshan"
          timeAgo="Yesterday at 9:45PM"
          content="Very detailed blog, loved it!"
          avatar="https://avatars.dicebear.com/api/male/sam.svg"
        />
      </ApprovalCard>
    </div>
  );
};

root.render(<App />);
