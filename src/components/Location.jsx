import "daisyui/dist/full.css";
import React from "react";
import createReactClass from "create-react-class";

var MapFrame = createReactClass({
  render: function () {
    return (
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4703.353290676521!2d-77.00333465336493!3d-12.140640225082901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b81aa4bc5e29%3A0x700b54327e2e5b95!2sDo%C3%B1a%20Maria%20172%2C%20Lima%2015049!5e0!3m2!1sen!2spe!4v1703520633903!5m2!1sen!2spe"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="object-center rounded-box"
        ></iframe>
      </div>
    );
  },
});

function Location() {
  return (
    <div className="columns-1">
        <div className="p-10">
            <h1 className="text-5xl font-bold">Ubicación</h1>
            <p className="text-xl">Calle Doña Maria 172, San Miguel</p>
        </div>
        <MapFrame/>
    </div>
  );
}

export default Location;
