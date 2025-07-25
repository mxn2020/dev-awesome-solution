// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Bed, Wifi, Car, Coffee, Star, Calendar, Users, User, Utensils, Wine, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, H3, P, Div, Footer, Input } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions for type-safe dynamic IDs
const getRoomCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['noID', 'noID', 'noID', 'noID'];
  return ids[index] || 'noID';
};

const getAmenityId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['noID', 'noID', 'noID', 'noID', 'noID', 'noID'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['noID', 'noID', 'noID', 'noID', 'noID'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentFeatureSlide, setCurrentFeatureSlide] = useState(0);
  const [bookingForm, setBookingForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
    name: '',
    email: '',
    phone: ''
  });
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingForm);
    alert('Booking request submitted! We will contact you shortly.');
  };

  const rooms = [
    {
      name: "Standard Room",
      price: "€89",
      image: "/api/placeholder/400/300",
      features: ["Free WiFi", "Air Conditioning", "Private Bathroom", "TV"],
      description: "Comfortable standard room with modern amenities"
    },
    {
      name: "Deluxe Room",
      price: "€129",
      image: "/api/placeholder/400/300",
      features: ["Free WiFi", "Air Conditioning", "Mini Bar", "City View"],
      description: "Spacious deluxe room with beautiful city views"
    },
    {
      name: "Executive Suite",
      price: "€199",
      image: "/api/placeholder/400/300",
      features: ["Free WiFi", "Separate Living Area", "Premium Amenities", "River View"],
      description: "Luxurious suite with separate living area and premium services"
    },
    {
      name: "Family Room",
      price: "€159",
      image: "/api/placeholder/400/300",
      features: ["Free WiFi", "Extra Space", "Family Amenities", "Garden View"],
      description: "Perfect for families with extra space and child-friendly amenities"
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, name: "Free WiFi" },
    { icon: <Car className="w-6 h-6" />, name: "Free Parking" },
    { icon: <Coffee className="w-6 h-6" />, name: "Restaurant" },
    { icon: <Bed className="w-6 h-6" />, name: "Room Service" },
    { icon: <Users className="w-6 h-6" />, name: "Conference Rooms" },
    { icon: <Star className="w-6 h-6" />, name: "Concierge Service" }
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-black" />,
      title: "Prime Location",
      description: "Located in the heart of Nijmegen with easy access to historic sites and shopping"
    },
    {
      icon: <Utensils className="w-8 h-8 text-black" />,
      title: "Fine Dining",
      description: "Award-winning restaurant serving local and international cuisine"
    },
    {
      icon: <Bed className="w-8 h-8 text-black" />,
      title: "Luxury Comfort",
      description: "Elegantly appointed rooms with premium amenities and modern facilities"
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: "Business Facilities",
      description: "State-of-the-art conference rooms and business center for corporate events"
    },
    {
      icon: <Wine className="w-8 h-8 text-black" />,
      title: "Rooftop Bar",
      description: "Stunning rooftop bar with panoramic views of Nijmegen and craft cocktails"
    }
  ];

  const nextFeatureSlide = () => {
    setCurrentFeatureSlide((prev) => (prev + 1) % Math.ceil(features.length / getCardsPerSlide()));
  };

  const prevFeatureSlide = () => {
    setCurrentFeatureSlide((prev) => (prev - 1 + Math.ceil(features.length / getCardsPerSlide())) % Math.ceil(features.length / getCardsPerSlide()));
  };

  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 4; // default
  };

  return (
    <Container componentId="noID">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper for Van der Valk hotel website"
        className="min-h-screen bg-white"
      >
        {/* Header */}
        <Header 
          devId="noID" 
          devName="Hotel Header" 
          devDescription="Hotel website header with navigation"
          className="bg-white shadow-sm sticky top-0 z-50"
        >
          <Nav 
            devId="noID" 
            devName="Hotel Navigation" 
            devDescription="Primary navigation for hotel website"
            className="container mx-auto px-4 py-4 flex items-center justify-between"
          >
            <Div 
              devId="noID" 
              devName="Hotel Logo" 
              devDescription="Van der Valk hotel logo and brand"
              className="flex items-center space-x-3"
            >
              <Div devId="noID" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Bed className="w-6 h-6 text-white" />
              </Div>
              <Div devId="noID" className="flex flex-col">
                <Span 
                  devId="noID" 
                  devName="Hotel Brand Name" 
                  devDescription="Van der Valk brand name"
                  className="text-xl font-bold text-gray-900"
                >
                  Van der Valk
                </Span>
                <Span 
                  devId="noID" 
                  devName="Hotel Location" 
                  devDescription="Hotel location - Nijmegen"
                  className="text-sm text-gray-600"
                >
                  Nijmegen
                </Span>
              </Div>
            </Div>
            
            <Div 
              devId="noID" 
              devName="Navigation Links" 
              devDescription="Main navigation links"
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#rooms" className="text-gray-700 hover:text-blue-600 transition-colors">Rooms</a>
              <Link to="/restaurant" className="text-gray-700 hover:text-blue-600 transition-colors">Restaurant</Link>
              <a href="#amenities" className="text-gray-700 hover:text-blue-600 transition-colors">Amenities</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </Div>

            <Div 
              devId="nav-actions" 
              devName="Navigation Actions" 
              devDescription="Navigation buttons and user menu"
              className="flex items-center space-x-4"
            >
              {isAuthenticated ? (
                <Div 
                  devId="user-section" 
                  devName="User Section" 
                  devDescription="Authenticated user welcome area"
                  className="flex items-center space-x-4"
                >
                  <Span 
                    devId="welcome-message" 
                    devName="Welcome Message" 
                    devDescription="Welcome message for authenticated user"
                    className="text-gray-700"
                  >
                    Welcome, {user?.name?.split(' ')[0]}!
                  </Span>
                  <Link to="/dashboard">
                    <Button 
                      devId="nav-dashboard-button"
                      devName="Navigation Dashboard Button"
                      devDescription="Dashboard button in navigation header"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                </Div>
              ) : (
                <Div 
                  devId="auth-buttons" 
                  devName="Authentication Buttons" 
                  devDescription="Login and register buttons"
                  className="flex items-center space-x-2"
                >
                  <Link to="/login">
                    <Button 
                      devId="nav-login-button"
                      devName="Navigation Login Button"
                      devDescription="Login button in navigation header"
                      variant="ghost" 
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      devId="nav-register-button"
                      devName="Navigation Register Button"
                      devDescription="Register button in navigation header"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Book Now
                    </Button>
                  </Link>
                </Div>
              )}
            </Div>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Container componentId="hero-section">
          <Section 
            devId="hero-content" 
            devName="Hero Content" 
            devDescription="Main hero section with hotel introduction"
            className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20"
          >
            <Div 
              devId="noID" 
              devName="Hero Background" 
              devDescription="Hero background overlay"
              className="absolute inset-0 bg-black opacity-40"
            ></Div>
            <Div 
              devId="hero-content-wrapper" 
              devName="Hero Content Wrapper" 
              devDescription="Hero content container with animation"
              className={`relative container mx-auto px-4 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <H1 
                devId="hero-title" 
                devName="Hero Title" 
                devDescription="Main hero title for Van der Valk Nijmegen"
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Welcome to Van der Valk
                <Span 
                  devId="noID" 
                  devName="Nijmegen Highlight" 
                  devDescription="Highlighted Nijmegen text"
                  className="block text-yellow-400"
                >
                  Nijmegen
                </Span>
              </H1>
              <P 
                devId="hero-description" 
                devName="Hero Description" 
                devDescription="Hero section description"
                className="text-xl mb-8 max-w-2xl mx-auto"
              >
                Experience luxury and comfort in the heart of the Netherlands' oldest city. 
                Modern amenities meet historic charm at our premier hotel.
              </P>
              <Div 
                devId="hero-cta-buttons" 
                devName="Hero CTA Buttons" 
                devDescription="Call-to-action buttons in hero section"
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  devId="noID"
                  devName="Book Now Button"
                  devDescription="Primary booking button in hero section"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Your Stay
                </Button>
                <Button 
                  devId="noID"
                  devName="Explore Rooms Button"
                  devDescription="Secondary button to explore rooms"
                  variant="outline"
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all"
                  onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Rooms
                </Button>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Features Section */}
        <Container componentId="features-section">
          <Section devId="noID" className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
            <Div devId="noID" className="container mx-auto px-4">
              <Div devId="noID" className="text-center mb-12">
                <H2 devId="noID" className="text-4xl font-bold text-black mb-4">Why Choose Van der Valk Nijmegen?</H2>
                <P devId="noID" className="text-black max-w-2xl mx-auto">
                  Discover what makes our hotel the perfect choice for your stay in Nijmegen
                </P>
              </Div>
              <Div devId="noID" className="relative">
                {/* Carousel Container */}
                <Div devId="noID" className="overflow-hidden">
                  <Div 
                    devId="noID" 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentFeatureSlide * 100}%)`,
                    }}
                  >
                    {Array.from({ length: Math.ceil(features.length / getCardsPerSlide()) }).map((_, slideIndex) => (
                      <Div key={slideIndex} devId="noID" className="w-full flex-shrink-0">
                        <Div devId="noID" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                          {features
                            .slice(slideIndex * getCardsPerSlide(), (slideIndex + 1) * getCardsPerSlide())
                            .map((feature, index) => (
                              <Card 
                                key={slideIndex * getCardsPerSlide() + index} 
                                devId={getFeatureCardId(slideIndex * getCardsPerSlide() + index)}
                                devName={`${feature.title} Feature Card`}
                                devDescription={`Feature card highlighting ${feature.title}`}
                                className="text-center p-6 hover:shadow-lg transition-shadow bg-white border border-yellow-300"
                              >
                                <CardContent devId="noID" className="p-0">
                                  <Div devId="noID" className="mb-4 flex justify-center">{feature.icon}</Div>
                                  <H3 devId="noID" className="text-xl font-semibold text-black mb-2">{feature.title}</H3>
                                  <P devId="noID" className="text-gray-800">{feature.description}</P>
                                </CardContent>
                              </Card>
                            ))}
                        </Div>
                      </Div>
                    ))}
                  </Div>
                </Div>
                
                {/* Navigation Arrows */}
                {Math.ceil(features.length / getCardsPerSlide()) > 1 && (
                  <>
                    <Button
                      devId="noID"
                      devName="Previous Features Button"
                      devDescription="Navigate to previous features in carousel"
                      onClick={prevFeatureSlide}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      devId="noID"
                      devName="Next Features Button"
                      devDescription="Navigate to next features in carousel"
                      onClick={nextFeatureSlide}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}
                
                {/* Carousel Indicators */}
                {Math.ceil(features.length / getCardsPerSlide()) > 1 && (
                  <Div devId="noID" className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: Math.ceil(features.length / getCardsPerSlide()) }).map((_, index) => (
                      <Button
                        key={index}
                        devId="noID"
                        onClick={() => setCurrentFeatureSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentFeatureSlide === index 
                            ? 'bg-black' 
                            : 'bg-black bg-opacity-30 hover:bg-opacity-50'
                        }`}
                      />
                    ))}
                  </Div>
                )}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Rooms Section */}
        <Container componentId="noID">
          <Section devId="noID" id="rooms" className="py-16">
            <Div devId="noID" className="container mx-auto px-4">
              <Div devId="noID" className="text-center mb-12">
                <H2 devId="noID" className="text-4xl font-bold text-gray-900 mb-4">Our Rooms & Suites</H2>
                <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
                  Choose from our selection of comfortable and elegantly designed accommodations
                </P>
              </Div>
              <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {rooms.map((room, index) => (
                  <Card 
                    key={index} 
                    devId={getRoomCardId(index)}
                    devName={`${room.name} Room Card`}
                    devDescription={`Room card for ${room.name} - ${room.price} per night`}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Div devId="noID" className="h-48 bg-gray-200 relative">
                      <img 
                        src={room.image} 
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge 
                        devId="noID"
                        className="absolute top-4 right-4 bg-blue-600 text-white"
                      >
                        {room.price}/night
                      </Badge>
                    </Div>
                    <CardContent devId="noID" className="p-4">
                      <H3 devId="noID" className="text-xl font-semibold text-gray-900 mb-2">{room.name}</H3>
                      <P devId="noID" className="text-gray-600 mb-3">{room.description}</P>
                      <Div devId="noID" className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} devId="noID" variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </Div>
                      <Button 
                        devId="noID"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => {
                          setBookingForm(prev => ({ ...prev, roomType: room.name.toLowerCase().replace(' ', '-') }));
                          document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Select Room
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Amenities Section */}
        <Container componentId="noID">
          <Section devId="noID" id="amenities" className="py-16 bg-gray-50">
            <Div devId="noID" className="container mx-auto px-4">
              <Div devId="noID" className="text-center mb-12">
                <H2 devId="noID" className="text-4xl font-bold text-gray-900 mb-4">Hotel Amenities</H2>
                <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
                  Enjoy our comprehensive range of facilities and services
                </P>
              </Div>
              <Div devId="noID" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {amenities.map((amenity, index) => (
                  <Div 
                    key={index} 
                    devId={getAmenityId(index)}
                    devName={`${amenity.name} Amenity`}
                    devDescription={`Hotel amenity: ${amenity.name}`}
                    className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Div devId="noID" className="text-blue-600 mb-3 flex justify-center">{amenity.icon}</Div>
                    <P devId="noID" className="text-sm font-medium text-gray-900">{amenity.name}</P>
                  </Div>
                ))}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Booking Form Section */}
        <Container componentId="noID">
          <Section devId="noID" id="booking-form" className="py-16">
            <Div devId="noID" className="container mx-auto px-4">
              <Div devId="noID" className="max-w-2xl mx-auto">
                <Div devId="noID" className="text-center mb-8">
                  <H2 devId="noID" className="text-4xl font-bold text-gray-900 mb-4">Book Your Stay</H2>
                  <P devId="noID" className="text-gray-600">
                    Fill out the form below and we'll get back to you with availability and pricing
                  </P>
                </Div>
                <Card 
                  devId="noID" 
                  devName="Booking Form Card" 
                  devDescription="Hotel booking request form"
                  className="p-6"
                >
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                      <Div devId="noID">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                        <Input
                          devId="noID"
                          devName="Check-in Date Input"
                          devDescription="Date picker for check-in date"
                          type="date"
                          value={bookingForm.checkIn}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, checkIn: e.target.value }))}
                          required
                          className="w-full"
                        />
                      </Div>
                      <Div devId="noID">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                        <Input
                          devId="noID"
                          devName="Check-out Date Input"
                          devDescription="Date picker for check-out date"
                          type="date"
                          value={bookingForm.checkOut}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, checkOut: e.target.value }))}
                          required
                          className="w-full"
                        />
                      </Div>
                    </Div>
                    
                    <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                      <Div devId="noID">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                        <select
                          value={bookingForm.guests}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </Div>
                      <Div devId="noID">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                        <select
                          value={bookingForm.roomType}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, roomType: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="standard">Standard Room</option>
                          <option value="deluxe">Deluxe Room</option>
                          <option value="executive-suite">Executive Suite</option>
                          <option value="family">Family Room</option>
                        </select>
                      </Div>
                    </Div>

                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input
                        devId="noID"
                        devName="Guest Name Input"
                        devDescription="Input field for guest full name"
                        type="text"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </Div>

                    <Div devId="noID" className="grid md:grid-cols-2 gap-4">
                      <Div devId="noID">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <Input
                          devId="noID"
                          devName="Guest Email Input"
                          devDescription="Input field for guest email address"
                          type="email"
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                          required
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </Div>
                      <Div devId="noID">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <Input
                          devId="noID"
                          devName="Guest Phone Input"
                          devDescription="Input field for guest phone number"
                          type="tel"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                          required
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </Div>
                    </Div>

                    <Button 
                      devId="noID"
                      devName="Submit Booking Button"
                      devDescription="Submit button for booking form"
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Submit Booking Request
                    </Button>
                  </form>
                </Card>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Contact Section */}
        <Container componentId="noID">
          <Section devId="noID" id="contact" className="py-16 bg-gray-900 text-white">
            <Div devId="noID" className="container mx-auto px-4">
              <Div devId="noID" className="text-center mb-12">
                <H2 devId="noID" className="text-4xl font-bold mb-4">Contact Us</H2>
                <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                  Get in touch with our friendly staff for any questions or special requests
                </P>
              </Div>
              <Div devId="noID" className="grid md:grid-cols-3 gap-8 text-center">
                <Div 
                  devId="noID" 
                  devName="Contact Address" 
                  devDescription="Hotel address and location information"
                >
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <H3 devId="noID" className="text-xl font-semibold mb-2">Address</H3>
                  <P devId="noID" className="text-gray-300">
                    Laan van Westenenk 10<br />
                    6516 AH Nijmegen<br />
                    Netherlands
                  </P>
                </Div>
                <Div 
                  devId="noID" 
                  devName="Contact Phone" 
                  devDescription="Hotel phone contact information"
                >
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <H3 devId="noID" className="text-xl font-semibold mb-2">Phone</H3>
                  <P devId="noID" className="text-gray-300">
                    +31 24 123 4567<br />
                    Available 24/7
                  </P>
                </Div>
                <Div 
                  devId="noID" 
                  devName="Contact Email" 
                  devDescription="Hotel email contact information"
                >
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <H3 devId="noID" className="text-xl font-semibold mb-2">Email</H3>
                  <P devId="noID" className="text-gray-300">
                    info@vandervalk-nijmegen.nl<br />
                    reservations@vandervalk-nijmegen.nl
                  </P>
                </Div>
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="noID" 
          devName="Hotel Footer" 
          devDescription="Hotel website footer with links and information"
          className="bg-gray-800 text-white py-8"
        >
          <Div devId="noID" className="container mx-auto px-4">
            <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
              <Div devId="noID" className="text-gray-300 mb-4 md:mb-0">
                © 2024 Van der Valk Hotel Nijmegen. All rights reserved.
              </Div>
              <Div devId="noID" className="flex space-x-6">
                <Link to="/restaurant" className="text-gray-300 hover:text-white transition-colors">Restaurant</Link>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a>
              </Div>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};