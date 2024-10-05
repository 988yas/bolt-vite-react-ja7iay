import React from 'react'
import { Star } from 'lucide-react'

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Burger Palace",
      cuisine: "American",
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
    },
    {
      id: 2,
      name: "Sushi Haven",
      cuisine: "Japanese",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      name: "Pasta Paradise",
      cuisine: "Italian",
      rating: 4.3,
      imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Restaurants Near You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

const RestaurantCard = ({ restaurant }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
      <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
      <div className="flex items-center">
        <Star className="h-5 w-5 text-yellow-400 mr-1" />
        <span>{restaurant.rating}</span>
      </div>
    </div>
  </div>
)

export default Restaurants