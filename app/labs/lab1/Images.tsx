export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />

      A photo from my trip to Italy:
      <br />
      <img
        id="wd-your-image"
        src="/images/italy.jpg"
        width="300px"
        alt="A photo from my trip to Italy"
      />
      <br />

      An extra sample image:
      <br />
      <img
        id="wd-ai-image"
        src="https://picsum.photos/id/1015/400/300"
        width="200px"
        alt="NASA sample image"
      />
    </div>
  );
}