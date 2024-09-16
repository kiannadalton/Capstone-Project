import homepage_img from '../img/homepagecat.jpg';

function Home() {
  return (
    <div className="allGroups">
      <section className="homepage_section">
        <h1>The Cozy Cat Collective</h1>
        <img className="homepage_img" src={homepage_img} />
        <div className="homepage">
          <p>
            Welcome to The Cozy Cat Collective, where you can rent a friendly,
            affectionate cat for moments of joy, relaxation, and pure cuddles.
            Our cats are specially trained to provide comfort, whether you're
            looking to brighten your day or soothe your mind with some furry
            companionship. Ideal for relieving stress, boosting mental health,
            or simply adding fun to your day, each of our cats is ready to offer
            endless purrs and snuggles. You can book one for a quiet evening, a
            playful afternoon, or as a calming companion during challenging
            times. Let our whiskered friends bring warmth, happiness, and peace
            into your life!
          </p>
          <p>
            At The Cozy Cat Collective, we believe that everyone deserves a
            little extra love and joy in their life, and our cuddly cats are
            here to deliver just that. Whether you're looking to unwind after a
            long day or bring some playful energy to your home, our feline
            friends are ready to brighten your mood. Each cat is gentle,
            affectionate, and loves being around people, making them the
            purrfect companion for both relaxation and fun. No long-term
            commitment, just rent a cat for a few hours or a weekend and enjoy
            all the purrs without the hassle. Let us bring the magic of
            whiskers, paws, and purrs straight to you!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
