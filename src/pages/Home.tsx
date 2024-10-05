import React from 'react'
import { Search } from 'lucide-react'

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to DeliverYas</h1>
      <p className="text-xl mb-8">Discover and order from the best restaurants in your area</p>
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your address"
            className="w-full px-4 py-2 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition duration-150 ease-in-out">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Wide Selection"
          description="Choose from hundreds of local restaurants"
          imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <FeatureCard
          title="Fast Delivery"
          description="Get your food delivered in 30 minutes or less"
          imageUrl="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        />
        <FeatureCard
          title="Easy Tracking"
          description="Track your order in real-time"
          imageUrl="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
        />
      </div>
    </div>
  )
}

const FeatureCard = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default Home