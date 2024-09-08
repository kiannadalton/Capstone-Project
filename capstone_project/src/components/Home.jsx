import homepage_img from '../img/homepage.jpg';

function Home() {
  return (
    <section>
      <h1>Lunar Looms</h1>
      <img src={homepage_img} />
      <p className="homepage">
        Welcome to our world of exquisite needlework, where every stitch is
        inspired by the delicate beauty of moths and their intricate patterns.
        Our collection features handmade creations that blend traditional
        techniques with designs drawn from the natural elegance of these gentle
        creatures, offering you one-of-a-kind pieces that are both captivating
        and unique. From elegant embroidery to intricate lacework, each item
        reflects the artistry and care that goes into our work, as well as the
        enchanting inspiration behind it. We invite you to explore our gallery
        and discover something special that captures the grace and mystery of
        nature. Whether you're seeking a thoughtful gift or a statement piece
        for your home, our creations bring warmth and wonder to any space. Thank
        you for supporting the art of handcrafting and celebrating the beauty of
        the natural world with us.
      </p>
    </section>
  );
}

export default Home;
