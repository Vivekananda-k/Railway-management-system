import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const stations = [
  {
    id: 1,
    name: 'Bengaluru City Railway Station',
    location: 'Gubbi Thotadappa Road, Majestic, Bengaluru',
    facilities: ['Parking', 'Food Court', 'Waiting Room', 'ATM'],
    contact: '+91 12345-67890',
    timing: '24/7',
  },
  {
    id: 2,
    name: 'Mysuru Junction',
    location: 'Irwin Road, Medar Block, Mysuru',
    facilities: ['Parking', 'Restrooms', 'Medical', 'ATM'],
    contact: '+91 12345-67891',
    timing: '5:00 AM - 11:00 PM',
  },
  {
    id: 3,
    name: 'Ajmer Junction',
    location: 'Kutchery Road, Ajmer',
    facilities: ['Waiting Room', 'Medical', 'ATM', 'Food Court'],
    contact: '+91 12345-67892',
    timing: '24/7',
  },
  {
    id: 4,
    name: 'New Delhi Railway Station',
    location: 'Bhavbhuti Marg, Ajmeri Gate, New Delhi',
    facilities: ['Parking', 'Lounge', 'ATM', 'Food Court'],
    contact: '+91 12345-67893',
    timing: '24/7',
  },
  {
    id: 5,
    name: 'Mumbai Central',
    location: 'Dr. Anandrao Nair Marg, Mumbai',
    facilities: ['Parking', 'Medical', 'ATM', 'Restrooms'],
    contact: '+91 12345-67894',
    timing: '24/7',
  },
  {
    id: 6,
    name: 'Pune Junction',
    location: 'Station Road, Pune',
    facilities: ['Parking', 'Food Court', 'Restrooms', 'Medical'],
    contact: '+91 12345-67895',
    timing: '5:00 AM - 11:30 PM',
  },
  {
    id: 7,
    name: 'Chennai Central',
    location: 'Wall Tax Road, Park Town, Chennai',
    facilities: ['Parking', 'ATM', 'Waiting Room', 'Medical'],
    contact: '+91 12345-67896',
    timing: '24/7',
  },
  {
    id: 8,
    name: 'Hyderabad Deccan',
    location: 'Nampally, Hyderabad',
    facilities: ['Parking', 'ATM', 'Restrooms', 'Food Court'],
    contact: '+91 12345-67897',
    timing: '4:00 AM - 11:00 PM',
  },
  {
    id: 9,
    name: 'Patna Junction',
    location: 'Patna Junction, Mahendru, Patna',
    facilities: ['Parking', 'ATM', 'Medical', 'Restrooms'],
    contact: '+91 12345-67898',
    timing: '24/7',
  },
  {
    id: 10,
    name: 'Kanpur Central',
    location: 'GT Road, Kanpur',
    facilities: ['Parking', 'Food Court', 'ATM', 'Medical'],
    contact: '+91 12345-67899',
    timing: '24/7',
  },
];


export default function Stations() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Stations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <div key={station.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{station.name}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <span className="text-gray-600">{station.location}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <span className="text-gray-600">{station.contact}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                    <span className="text-gray-600">{station.timing}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Available Facilities</h3>
                    <div className="flex flex-wrap gap-2">
                      {station.facilities.map((facility) => (
                        <span
                          key={facility}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
