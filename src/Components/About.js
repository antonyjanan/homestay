import React from "react";
import "./About.css";
import NavigationBar from "./Navbar";

const About = () => {
  return (
    <>
      <NavigationBar />
      <div className="about-container">
        <div className="about-content">
          <h1>About Our Aqualillies Homestay</h1>
          <p>
            Nestled in the serene backwaters of Kumarakom, AquaLillies
            Waterfront Homestay offers an idyllic retreat surrounded by nature's
            splendor. Located just 10.1 km from the local bus stand and 13.8 km
            from Kottayam, our homestay provides easy access to both state
            transport and private vehicle options. Recognized by National
            Geographic Traveller as one of the ten paradises on Earth, Kumarakom
            captivates visitors with its lush green surroundings, majestic
            backwaters, and untouched natural beauty. This tranquil cluster of
            small islands offers a peaceful getaway, perfect for unwinding and
            immersing in the bounty of nature.
          </p>
          <p>
            At AquaLillies Homestay, we prioritize your comfort and relaxation.
            Our array of services, including ample parking, delicious homemade
            food, telephone access, and hot and cold water, ensure a hassle-free
            stay. We provide essential toiletries and many more amenities to
            cater to your needs. The homestay overlooks the picturesque
            backwaters, allowing guests to enjoy stunning views right from their
            rooms.
          </p>
          <p>
            Our in-house restaurant serves a variety of freshly prepared
            delicacies, offering you an authentic taste of Kerala's rich
            culinary heritage. Managed by a team of skilled professionals, we
            are dedicated to ensuring that every aspect of your stay is
            memorable and fulfilling.
          </p>
          <p>
            For those seeking adventure and leisure, we offer activities like
            canoeing, fishing, and barbecues, allowing you to create cherished
            memories amidst the serene landscape. Whether you are here to relax,
            explore, or indulge in the beauty of Kumarakom, AquaLillies
            Waterfront Homestay promises a rejuvenating experience that will
            stay with you long after you leave.
          </p>
          <p>
            Unwind and experience the tranquility of nature at AquaLillies
            Homestay, where comfort meets the charm of Kerala’s enchanting
            backwaters.
          </p>
        </div>
        <div className="gallery-container">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <img
              src="http://thealleppeyhouseboat.com/img/portfolio/g1.jpg"
              alt="Cozy Room"
              className="gallery-image"
            />
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcf.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1024x768%2F36924366.jpg%3Fk%3Dcd327d5fc634e9eff122c4917c3600e0ab631a32bb71e62d1f45453cc7ebd76a%26o%3D%26hp%3D1&f=1&nofb=1&ipt=fc7180b4345339842ac558f33126b40558247beaac5f4df04cff767728a518d8&ipo=images"
              alt="Scenic View"
              className="gallery-image"
            />
            <img
              src="https://amazemytrip.com/wp-content/uploads/2019/07/42c670d7-9102-4518-b308-32ef2b4a0176.jpg"
              alt="Outdoor Area"
              className="gallery-image"
            />
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBSWFngNEFTE%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d02b9212371a0f1b4b47db6f4a3e6488babe03094dd939b0494531c20574c2cc&ipo=images"
              alt="Dining Area"
              className="gallery-image"
            />
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrisoj.com%2Ftravel-guide%2Fwp-content%2Fuploads%2F2022%2F09%2FSpa-and-Massage-in-Alleppey-525x300.jpg&f=1&nofb=1&ipt=bb1e8d56523e40424329c53e1ffa9abcee2cb82b620970d416bb8c953f5d244c&ipo=images"
              alt="Spa Area"
              className="gallery-image"
            />
            <img
              src="https://media.weddingz.in/images/c7b412bd1c4595276c6f7298b115f315/lake-palace-resort-alleppey-alleppey-1.jpg"
              alt="Reception"
              className="gallery-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
