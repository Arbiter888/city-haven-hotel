import { Wifi, Car, Clock, MapPin, Phone, Utensils, Tv, Lock } from "lucide-react";

const HotelInfo = () => {
  const facilities = [
    { icon: <Wifi className="w-6 h-6" />, label: "Free WiFi" },
    { icon: <Utensils className="w-6 h-6" />, label: "Restaurant" },
    { icon: <Clock className="w-6 h-6" />, label: "24/7 Front Desk" },
    { icon: <Car className="w-6 h-6" />, label: "Airport Shuttle" },
    { icon: <Tv className="w-6 h-6" />, label: "Flat-screen TV" },
    { icon: <Lock className="w-6 h-6" />, label: "Safety Deposit Box" },
  ];

  const nearbyPlaces = [
    { name: "Calle Crisologo", distance: "100 yd" },
    { name: "Herritage Park Vigan", distance: "300 yd" },
    { name: "Hong Kong, Ocean Park", distance: "600 yd" },
    { name: "Ilocos Sur Bicentennial Park", distance: "1,050 yd" },
  ];

  const restaurants = [
    { name: "Vivientes Pizza House", type: "Restaurant", distance: "50 yd" },
    { name: "Abuelitas Restaurant", type: "Restaurant", distance: "50 yd" },
    { name: "Legacy Super Club", type: "Cafe/bar", distance: "50 yd" },
  ];

  return (
    <section id="hotel-info" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Main Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-brown mb-6">
            Welcome to Ciudad Fernandina Hotel
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Located in the heart of historic Vigan, just 100 metres from Calle Crisologo,
            Ciudad Fernandina Hotel offers a perfect blend of comfort and convenience.
            This 3-star hotel features air-conditioned rooms with free WiFi, a restaurant,
            and exceptional service through our 24-hour front desk.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-brown text-center mb-8">
            Hotel Facilities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-gold mb-2">{facility.icon}</div>
                <span className="text-charcoal text-sm font-medium">
                  {facility.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Surroundings */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair font-bold text-brown mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gold" />
              Nearby Attractions
            </h3>
            <div className="space-y-4">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-cream last:border-0 pb-2"
                >
                  <span className="text-charcoal">{place.name}</span>
                  <span className="text-charcoal/60 text-sm">{place.distance}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair font-bold text-brown mb-6 flex items-center">
              <Utensils className="w-5 h-5 mr-2 text-gold" />
              Dining Options
            </h3>
            <div className="space-y-4">
              {restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-cream last:border-0 pb-2"
                >
                  <div>
                    <p className="text-charcoal">{restaurant.name}</p>
                    <p className="text-charcoal/60 text-sm">{restaurant.type}</p>
                  </div>
                  <span className="text-charcoal/60 text-sm">{restaurant.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-playfair font-bold text-brown mb-6 flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-2 text-gold" />
            Our Location
          </h3>
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.6576737171903!2d120.38523147507825!3d17.575197083980825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e65767371fa35%3A0x1739df05cc06fd31!2sCiudad%20Fernandina%20Hotel!5e0!3m2!1sen!2sph!4v1710644547372!5m2!1sen!2sph"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Airport Information */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-playfair font-bold text-brown mb-4 flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2 text-gold" />
            Transportation
          </h3>
          <p className="text-charcoal mb-2">
            Laoag International Airport is 79 km away
          </p>
          <p className="text-charcoal/80">
            We offer a paid airport shuttle service for your convenience
          </p>
        </div>
      </div>
    </section>
  );
};

export default HotelInfo;
