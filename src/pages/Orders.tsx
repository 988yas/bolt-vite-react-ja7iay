import React from 'react'
import { Clock, MapPin } from 'lucide-react'

const Orders = () => {
  const orders = [
    {
      id: 1,
      restaurant: "Burger Palace",
      items: ["Cheeseburger", "Fries", "Coke"],
      status: "In Transit",
      estimatedDelivery: "15 min",
      address: "123 Main St, Anytown, USA"
    },
    {
      id: 2,
      restaurant: "Sushi Haven",
      items: ["California Roll", "Miso Soup", "Green Tea"],
      status: "Preparing",
      estimatedDelivery: "25 min",
      address: "456 Oak Ave, Somewhere, USA"
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

const OrderCard = ({ order }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-xl font-semibold mb-2">{order.restaurant}</h3>
    <p className="text-gray-600 mb-2">{order.items.join(", ")}</p>
    <div className="flex justify-between items-center mb-2">
      <span className="text-indigo-600 font-semibold">{order.status}</span>
      <div className="flex items-center text-gray-500">
        <Clock className="h-4 w-4 mr-1" />
        <span>{order.estimatedDelivery}</span>
      </div>
    </div>
    <div className="flex items-center text-gray-500">
      <MapPin className="h-4 w-4 mr-1" />
      <span>{order.address}</span>
    </div>
  </div>
)

export default Orders