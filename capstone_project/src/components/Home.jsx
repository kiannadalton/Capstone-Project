import homepage_img from '../img/homepagecat.jpg';

function Home() {
  return (
    <section>
      <h1>The Cozy Cat Collective</h1>
      <img src={homepage_img} />
      <p className="homepage">
        Welcome to The Cozy Cat Collective, where you can rent a friendly, affectionate
        cat for moments of joy, relaxation, and pure cuddles. Our cats are
        specially trained to provide comfort, whether you're looking to brighten
        your day or soothe your mind with some furry companionship. Ideal for
        relieving stress, boosting mental health, or simply adding fun to your
        day, each of our cats is ready to offer endless purrs and snuggles. You
        can book one for a quiet evening, a playful afternoon, or as a calming
        companion during challenging times. Let our whiskered friends bring
        warmth, happiness, and peace into your life!
      </p>
    </section>
  );
}

export default Home;
