export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">
          Portrait
        </div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-wide wd-bg-color-green wd-fg-color-white">
          Wide box
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This is a long sentence to prove the box keeps its declared 120px
          width and 60px height no matter how much text is inside it.
        </div>
      </div>
    </div>
  );
}