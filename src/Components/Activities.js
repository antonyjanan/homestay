import React from "react";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-section">
      <div className="activity-header">
        <p>
          An ancient Christian ‘Tharavad’ (Ancestral House) at Kumarakom
          situated within 1.5 acres of land . Enjoy the richness of lush
          greenery with the warmth of staying with a Syrian Catholic family.
          Aqua Lilies is at Attipedika, a village around two kilometers from the
          main town of Kumarakom, near the Vembanad Lake. This Christian
          ‘Tharavad’ (Ancestral House) belong to an ancient aristocratic Syrian
          Christian family ‘Oruvettithara’ is built in the Kerala ‘Vastu’
          (architecture) style is complete with an 'Ara’ (wooden compartment
          used to store food grains) and a ‘Nilavara’ (cellar). The House is
          within 1.5 acres of land with a canal that connects to the lake as a
          boundary. The grounds are lush green with trees which makes it an
          ideal spot to laze around with a book in your hand, play some outdoor
          games or simply hang out with friends. The home consists of 5 Air
          Conditioned Bedrooms and 3 attached bath rooms and one common bath
          room for guests, Sit out, Dining Room, Kitchen and Work area. The
          Nilavara (cellar) has been converted to the host’s quarter. This
          property is suitable for small functions ( upto 150 people at a time
          in the open space) with ample parking space.
        </p>
      </div>
      <h2>Activities to Enjoy</h2>

      <div className="activities-container">
        <div className="activity">
          <img
            src="https://s3.amazonaws.com/lws_lift/timbercreek_trinity_hills/images/blog/1596138779_hiking_-_resized.jpg"
            alt="Hiking"
          />
          <h3>Hiking</h3>
          <p>
            Explore the beautiful trails around the homestay with guided hiking
            tours.
          </p>
        </div>
        <div className="activity">
          <img
            src="https://visitidaho.org/content/uploads/2015/09/kids-fishing.jpg"
            alt="Fishing"
          />
          <h3>Fishing</h3>
          <p>
            Relax by the serene lake and enjoy a peaceful fishing experience.
          </p>
        </div>
        <div className="activity">
          <img
            src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/11/Birdwatching-1.jpg?w=2500&ssl=1"
            alt="Bird Watching"
          />
          <h3>Bird Watching</h3>
          <p>Spot rare and exotic birds in their natural habitat.</p>
        </div>
        <div className="activity">
          <img
            src="https://1.bp.blogspot.com/-0hmOyu6hTAo/VXYfUUfoCTI/AAAAAAAAC_0/Hiy4P45oumI/s1600/solstice%2Bfire%2B072.jpg"
            alt="Campfire"
          />
          <h3>Campfire</h3>
          <p>
            Gather around a warm campfire and share stories under the stars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
