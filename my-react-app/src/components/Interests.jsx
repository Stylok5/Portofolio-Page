const Interests = () => {
  const interestsList = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331852.png",
      title: "Gaming",
      description: `
      Gaming has been my lifelong passion, sparked by my father's introduction to the world of video games. 
      It quickly became my primary hobby, providing thrilling experiences and unforgettable memories. 
      These gaming adventures also served as my gateway into the world of computers and technology, 
      fueling my interest in programming.
      I find that the creative freedom, problem-solving challenges, and continuous 
      development present in gaming align perfectly with my journey in software development. 
       `,
    },
    {
      image:
        "https://cdn.icon-icons.com/icons2/2240/PNG/512/world_travel_icon_134840.png",
      title: "Travelling",
      description: `I recently embarked on my first solo travel adventure to a foreign country, opting to stay in a hostel. 
        While the idea initially seemed daunting, it quickly transformed into one of the most thrilling and memorable journeys
         I've ever experienced. Along the way, I had the chance to meet some awesome software engineers who were living a fascinating lifestyle, 
         juggling work and exploration while on the road.
         Their stories and experiences served as a powerful catalyst, sparking a newfound interest within me and solidifying my 
         decision to dive into the world of programming. `,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/4472/4472584.png",
      title: "Music",
      description: `Music has been an essential part of my life, providing focus during workouts and coding sessions,
       while also having the ability to uplift my mood. From classical to rap, rock to instrumental soundtracks, 
       music has been a vital companion and motivator through even the most challenging coding sessions.`,
    },
  ];

  return (
    <div className="interestspage">
      <h1>Interests</h1>
      {interestsList.map((item, ind) => (
        <div className="listinterests" key={ind}>
          <div className="listInterestsContainer">
            <img src={item.image} />
            <div className="titledescription">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Interests;
