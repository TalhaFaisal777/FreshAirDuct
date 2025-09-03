import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Wind, 
  Shield, 
  Heart, 
  Zap, 
  CheckCircle, 
  Star,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Wind className="w-12 h-12 text-sky-blue-500" />,
      title: "Residential Cleaning",
      description: "Professional air duct cleaning for homes of all sizes. Improve your family's air quality today."
    },
    {
      icon: <Shield className="w-12 h-12 text-leaf-green-500" />,
      title: "Commercial Cleaning", 
      description: "Keep your business environment healthy with our comprehensive commercial duct cleaning services."
    },
    {
      icon: <Heart className="w-12 h-12 text-sky-blue-500" />,
      title: "Health Benefits",
      description: "Reduce allergens, dust, and contaminants that can affect your health and well-being."
    },
    {
      icon: <Zap className="w-12 h-12 text-leaf-green-500" />,
      title: "Energy Savings",
      description: "Clean ducts improve HVAC efficiency, reducing energy costs by up to 30%."
    }
  ];

  const benefits = [
    "Better Air Quality",
    "Reduced Energy Bills",
    "Eliminate Odors",
    "Remove Allergens",
    "Extend HVAC Life",
    "Improve Airflow"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Dallas, TX",
      rating: 5,
      comment: "Amazing service! The team was professional and thorough. Our air quality has improved dramatically."
    },
    {
      name: "Mike Chen",
      location: "Los Angeles, CA", 
      rating: 5,
      comment: "Best decision we made for our home. The difference in air quality is night and day."
    },
    {
      name: "Jennifer Martinez",
      location: "Miami, FL",
      rating: 5,
      comment: "Professional, punctual, and excellent results. Highly recommend Fresh Air Duct Cleaning."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "50", label: "States Served" },
    { number: "24/7", label: "Emergency Service" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=100" 
            alt="Clean modern home interior" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-blue-600/80 to-sky-blue-800/80"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Breathe Easier with
                <span className="text-white block drop-shadow-lg">Fresh Air Duct Cleaning</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Professional air duct cleaning services nationwide. Improve your indoor air quality today with NADCA certified technicians.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span>NADCA Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent-400" />
                  <span>Nationwide Service</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-accent hover:opacity-90 text-lg px-8 py-4 border-0 hover-lift"
                >
                  Get Free Quote
                </Button>
                <a 
                  href="tel:+1-800-FRESH-AIR"
                  className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 rounded-md px-8 py-4 text-lg font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>1-800-FRESH-AIR</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-white drop-shadow-md">{stat.number}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive air duct cleaning solutions for residential and commercial properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover-lift border-0 shadow-vibrant">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Difference</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional duct cleaning makes a dramatic difference in air quality and system efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
                <img 
                  src="https://cdn.prod.website-files.com/689559298f0c7d56cb01a5be/68acea3555e4476267635836_dirty-air-duct.webp" 
                  alt="Dirty air duct filled with dust and debris before cleaning"
                  className="w-full h-64 object-cover"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  BEFORE
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dirty, Clogged Ducts</h3>
              <p className="text-gray-600">Accumulated dust, debris, and contaminants restrict airflow and reduce air quality.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
                <img 
                  src="https://www.bay-restoration.com/images/pages/duct-cleaning.jpg" 
                  alt="Clean air duct after professional cleaning - spotless interior"
                  className="w-full h-64 object-cover"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div className="absolute top-4 left-4 bg-leaf-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  AFTER
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean, Fresh Ducts</h3>
              <p className="text-gray-600">Professional cleaning restores optimal airflow and eliminates contaminants.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Fresh Air Duct Cleaning?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience and 50,000+ satisfied customers, we're the trusted choice for air duct cleaning nationwide.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-leaf-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=100" 
                  alt="Professional HVAC technician inspecting and cleaning air ductwork"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-blue-600/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Professional Service</h4>
                  <p className="text-sm opacity-90">Expert technicians with state-of-the-art equipment</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-sky-blue-50 to-white rounded-2xl p-8 shadow-lg border border-sky-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Inspection</h4>
                      <p className="text-gray-600">Thorough assessment of your duct system</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="gradient-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cleaning</h4>
                      <p className="text-gray-600">Professional cleaning with industry-leading equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Testing</h4>
                      <p className="text-gray-600">Quality verification and air flow testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nationwide Coverage</h2>
            <p className="text-xl text-gray-600 mb-8">
              We proudly serve customers across all 50 states with the same high-quality service
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-lg">
              <MapPin className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-900">Serving All 50 States</span>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="gradient-primary hover:opacity-90 border-0 hover-lift">
                Find Service in Your Area
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from satisfied customers nationwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Breathe Cleaner Air?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get your free quote today and join thousands of satisfied customers who trust Fresh Air Duct Cleaning
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-accent hover:opacity-90 text-lg px-8 py-4 border-0 hover-lift">
                Get Free Quote Now
              </Button>
              <a 
                href="tel:+1-800-FRESH-AIR"
                className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 rounded-md px-8 py-4 text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call 1-800-FRESH-AIR</span>
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-2 text-blue-100">
              <Clock className="w-4 h-4" />
              <span>We respond within 2 hours • 24/7 Emergency Service</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;