import React from 'react'
import { User, Mail, Phone, MapPin } from 'lucide-react'

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "789 Pine St, Elsewhere, USA"
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <User className="h-12 w-12 text-indigo-600 mr-4" />
          <h2 className="text-2xl font-semibold">{user.name}</h2>
        </div>
        <div className="space-y-3">
          <ProfileItem icon={<Mail className="h-5 w-5" />} text={user.email} />
          <ProfileItem icon={<Phone className="h-5 w-5" />} text={user.phone} />
          <ProfileItem icon={<MapPin className="h-5 w-5" />} text={user.address} />
        </div>
        <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

const ProfileItem = ({ icon, text }) => (
  <div className="flex items-center text-gray-600">
    <span className="mr-2">{icon}</span>
    <span>{text}</span>
  </div>
)

export default Profile