const Testimonials = () => {
  const reviews = [
    {
      name: "Maria Santos",
      role: "Business Traveler",
      content:
        "An exceptional stay that perfectly blends historic charm with modern luxury. The staff's attention to detail made my business trip feel like a vacation.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Tourist",
      content:
        "The location is perfect for exploring Vigan's heritage sites. The hotel itself is a beautiful piece of history with all the modern amenities you need.",
      rating: 5,
    },
    {
      name: "Ana Garcia",
      role: "Couple Stay",
      content:
        "From the moment we arrived, we were transported to a different era. The architecture, the service, the ambiance - everything was perfect.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-brown">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-cream mb-12 text-center">
          Guest Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal mb-6 font-inter italic">
                "{review.content}"
              </p>
              <div className="border-t pt-4">
                <h3 className="font-playfair font-bold text-lg text-brown">
                  {review.name}
                </h3>
                <p className="text-charcoal/70 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
