import React from "react";

const FileInput = ({ createNewChat }) => {
  return (
    <div>
      <form>
        <div className="file-input-container">
          <span className="file-input-label">Choose a file</span>
          <input type="file" />
        </div>
        <button type="submit" onClick={createNewChat}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileInput;
