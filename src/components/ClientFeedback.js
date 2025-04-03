import React from "react";

const feedbacks = [
  { 
    name: "Amit Sharma", 
    comment: "Great service, highly recommend!", 
    image: "/clients/amit.jpg"
  },
  { 
    name: "Priya Verma", 
    comment: "Amazing maps, very detailed!", 
    image: "/clients/priya.jpg"
  },
  { 
    name: "Rajesh Kumar", 
    comment: "Helped me a lot in my research!", 
    image: "/clients/rajesh.jpg"
  },
  { 
    name: "Neha Gupta", 
    comment: "Accurate and up-to-date information.", 
    image: "/clients/neha.jpg"
  },
  { 
    name: "Anil Mehta", 
    comment: "Best website for Indian maps!", 
    image: "/clients/anil.jpg"
  },
  { 
    name: "Sneha Joshi", 
    comment: "Easy to use and very informative.", 
    image: "/clients/sneha.jpg"
  },
  { 
    name: "Ravi Malhotra", 
    comment: "I love the interactive features!", 
    image: "/clients/ravi.jpg"
  },
  { 
    name: "Kavita Iyer", 
    comment: "Best resource for travelers!", 
    image: "/clients/kavita.jpg"
  },
  { 
    name: "Vikas Rao", 
    comment: "Highly detailed and useful maps!", 
    image: "/clients/vikas.jpg"
  }
];

const ClientFeedback = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img 
              src={feedback.image} 
              alt={feedback.name} 
              className="w-20 h-20 mx-auto rounded-full border-2 border-blue-600 mb-3"
            />
            <h3 className="text-lg font-bold text-blue-600">{feedback.name}</h3>
            <p className="text-gray-700 mt-1">"{feedback.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
