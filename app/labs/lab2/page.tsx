import Link from "next/link";
import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <Link href="/labs/lab2/tailwind">Tailwind CSS</Link>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This paragraph uses the style attribute directly on the element to
        set a green background and yellow text.
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        A third sample paragraph using the style attribute — purple
        background, white text.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the
          same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-id-selector-3">
          This is my own paragraph using a third ID with its own lavender
          background and black text.
        </p>
        <p id="wd-ai-id-selector">
          A fourth sample paragraph with its own id and color scheme — coral
          background, white text.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-your-class">
          This is my personal class, applied to both a paragraph and a
          heading, with a wine background and white text.
        </p>
        <h4 className="wd-your-class">
          This heading shares the same wine and white class as the paragraph
          above
        </h4>
        <p className="wd-ai-class-selector">
          An extra sample class applied to this paragraph — teal background,
          white text.
        </p>
        <h4 className="wd-ai-class-selector">
          This heading shares the same extra sample class as the paragraph
          above
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places
            in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as <br />
              .selector-2 .selector3 <br />
              meaning the descendant of some ancestor. <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-your-selector-5">
                This span is my own direct child selector, styled orange
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This span is an extra sample descendant selector, styled cyan
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-specificity">
        <h3>Specificity experiment</h3>
        <p id="wd-your-cascade" className="wd-your-cascade">
          This paragraph matches a p tag rule (light green), a class rule
          wd-your-cascade (pink), and an id rule #wd-your-cascade (purple).
          The id wins because id selectors have higher specificity than class
          selectors, which have higher specificity than tag selectors — so
          this paragraph should render with a purple background.
        </p>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          An extra sample paragraph that matches a p tag rule (green), a
          class rule wd-ai-cascade (yellow), and an id rule #wd-ai-cascade
          (red). The id rule should win, so this renders with a red
          background.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}