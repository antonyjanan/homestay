// src/components/Gallery.js

import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const galleryImages = [
    "https://media-cdn.tripadvisor.com/media/photo-s/02/28/b9/b4/alleppey-kerala-backwater.jpg",
    "https://pix4.agoda.net/hotelimages/115/1155038/1155038_15120219440038196038.jpg?s=600x450",
    "https://pix10.agoda.net/hotelImages/210/2108730/2108730_17032406490051788810.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FauqousZgLVZUeZAUkpsChUkS_Oo%3D%2F1024x682%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F212195089-a2d4ffa861774380a97ed8c985eecb42.jpg&f=1&nofb=1&ipt=ecb236445a9ccf112bc3a896f8de4fe8f17e1bb647bf982e3ed121a332846a53&ipo=images",
    "https://www.elsashomestay.com/wp-content/uploads/2014/03/Alleppey-Homestay1.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5940f2725016e1c79e469470%2F1537259886928-U3S2V8K44PAITY24ASU1%2FAlleppey%2BBackwaters%2Btour&f=1&nofb=1&ipt=1aab04277d52162aaef477dfe2355ed1cc8bbda2b5be4868a8d779a32ed97154&ipo=images",
    "https://www.sreestours.com/wp-content/uploads/2016/04/backwater-resort-11.jpg",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhoneymoonbug.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F04%2FAlleppey-min.jpg&f=1&nofb=1&ipt=0bd9dcaf0278e98363559d5f1ed2d95804090c2388334015cec5bbf52f8ebd93&ipo=images",
  ];

  return (
    <div className="gallery">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
