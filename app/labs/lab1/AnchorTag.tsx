export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="https://discord.com" id="wd-your-link">
        Discord
      </a>
      <br />
      <a href="https://github.com/Dhrumi25" id="wd-your-github" target="_blank" rel="noreferrer">
        My GitHub
      </a>
      <br />
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" id="wd-ai-link">
        MDN: table element
      </a>
    </>
  );
}