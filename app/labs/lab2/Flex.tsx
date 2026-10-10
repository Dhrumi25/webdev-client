import "./index.css";

export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-width-75px" style={{ backgroundColor: "pink" }}>
          Column 1
        </div>
        <div
          style={{ backgroundColor: "#7070ff", color: "white" }}
        >
          Column 2
        </div>
        <div style={{ backgroundColor: "pink" }}>Column 3</div>
        <div
          className="wd-flex-grow-1"
          style={{ backgroundColor: "#7070ff", color: "white" }}
        >
          Column 4
        </div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-width-75px wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-flex-grow-1 wd-bg-color-red wd-fg-color-white">
          Column 3
        </div>
      </div>
    </div>
  );
}