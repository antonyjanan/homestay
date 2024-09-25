import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "LIJU ANTONY",
    Header: "homestay for those who enjoy nature and tradition",
    text: "A specially recommended homestay for those who enjoy nature and tradition. It's a kind of ancestral home that is situated two kilometres away from Kumarakom market. The rooms are spacious and well-maintained, even though a bit of maintenance needs to be done. They have kitchen access for those who book the entire rooms for their stay, and those who do not can order the food at a reasonable price from there. Overall, I felt a homely atmosphere.",
  },
  {
    id: 2,
    name: "Jishna",
    Headers: "Good Service",
    text: "I went as part of office trip , the Aqua Lillies Water Front Heritage Home Stay is nice and traditional . Good service .. Supportive Management . Homely Atmosphere .Calm atmosphere .Good place to stay . All the rooms have AC facilities..",
  },
  {
    id: 3,
    name: "Visakh V",
    Headers: "A Quiet place for enjoying with friends.",
    text: "''Aqua Lilli's Water Front Home Stay'' located very near to Attippeedika, Kumarakom. The location is very nice and have a silent atmosphere. This home has 5 rooms and one of which is traditional Ara-Nira. All the rooms have AC units. Cook is available (from 7AM to 7PM ) and food was tasty.",
  },
  {
    id: 4,
    name: "georgeen george",
    Headers: "A great place to be with family",
    text: "Aqua Lilies is just a few kilometers away from Kumarakom Police Station. A truly homely place with break out facilities for kids. Since it was Onam season we had swing/oonjal too.Make sure you try fishing options at Metran Kaayal. Also take the ksrtc boat ride to Muhamma from the Kumarakom boat jetty.Food at Aqua Lilies is awesome.",
  },
  {
    id: 5,
    name: "Jeril Binoy",
    Headers: "A Perfect place for everyone",
    text: "The place is very traditional and have all the modern amenities.The location is great, rooms were comfortable and quiet, Clean wash rooms and linen, tasty food, helpful people. the country boat ride and fishing were real fun. Thank you Kosygin chettan and his team for a wonderful and memorable stay.",
  },
  {
    id: 6,
    name: "Blesson",
    Headers: "Absolute enjoyable Family Vacations",
    text: "We couldn't have asked for a better place. We felt it's our own family native home. We stayed with extended family for 5 days and it was a wonderful experience. Mr Andrew took care of all of us well.In House food arrangement by Mrs Molly (cook) was delicious with variety of dishes available.Would definitely love to come again and would highly recommend to all",
  },
  {
    id: 7,
    name: "ashok k",
    Headers: "Awesome Home stay - Aqua Lillys Kumarakom",
    text: "Awesome place. Excellent location and a pleasant home stay. Mr.Kosigen's hospitality at this place make you fell very special. Absolute worth it.. Eager to visit again. We just did not want to vacate with one night stay but had to leave to check into our next excited Houseboat",
  },
  {
    id: 8,
    name: "Joy Mathew",
    Headers: "Value for money home stay",
    text: "A warm welcome home-stay Forget all your troubles for the duration of your stay and let Mr Kosygin - owner of the home stay - take care of you with all your demands. An excellent host who will look after you very well and fill you with sweet memories to come come back again and again",
  },
  {
    id: 9,
    name: "Adam H",
    Headers: "Great place to relax and stay stress free",
    text: "Aqua lilies is a great place for friends, family or solo travellers to stay and relax. Kumarakom is a beautiful back water village surrounded by lush palm trees and paddy fields. The locals here are extremely friendly and Kosygin and his team will make you feel just like you are at home. From just a short stay I now see why Kerala is known as 'Gods own country'. The rooms are nice and clean.",
  },
  {
    id: 10,
    name: "Nitesh Mozika",
    Headers: "Aqua Lillies: A great place in Kumarakom",
    text: "We stayed in Aqua Lillies for 2 nights. Very close to Vembanad lake and surrounded by lush green palm trees. The USP of the property is its water-front. Having breakfast and dinner by the side of the river was a unique experience. Mr. Kosygin's personal care of the guests is unforgettable. Food was homely and excellent. It was a fantastic experience.",
  },
];

const MAX_TEXT_LENGTH = 100;

const Testimonials = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const truncateText = (text, isExpanded) => {
    if (isExpanded || text.length <= MAX_TEXT_LENGTH) {
      return text;
    }
    return text.substring(0, MAX_TEXT_LENGTH) + "...";
  };
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
    <div className="testimonials">
      <h2>What Our Guests Say</h2>
      <div className="testimonials-container">
        {duplicatedTestimonials.map((testimonial) => {
          const isExpanded = expanded[testimonial.id];
          return (
            <div key={testimonial.id} className="testimonial">
              <h5>{testimonial.Headers}</h5>
              <p>
                "{truncateText(testimonial.text, isExpanded)}"
                {testimonial.text.length > MAX_TEXT_LENGTH && (
                  <span
                    className="read-more"
                    onClick={() => toggleExpand(testimonial.id)}
                  >
                    {isExpanded ? " Show less" : " Read more"}
                  </span>
                )}
              </p>
              <h3>- {testimonial.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
