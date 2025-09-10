import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  Building, 
  Wind, 
  Thermometer, 
  TestTube,
  CheckCircle,
  Phone,
  Clock,
  Shield
} from 'lucide-react';

const Services = () => {
  const residentialServices = [
    {
      title: "Complete Duct System Cleaning",
      description: "Comprehensive cleaning of all supply and return air ducts, registers, and grilles.",
      features: ["All air ducts cleaned", "Register removal & cleaning", "Before/after photos", "Air flow testing"]
    },
    {
      title: "HVAC Component Cleaning", 
      description: "Deep cleaning of your HVAC system components for optimal performance.",
      features: ["Blower fan cleaning", "Evaporator coil cleaning", "Heat exchanger cleaning", "Filter replacement"]
    },
    {
      title: "Sanitization & Deodorization",
      description: "EPA-approved antimicrobial treatments to eliminate odors and contaminants.",
      features: ["Antimicrobial treatment", "Odor elimination", "Mold prevention", "Long-lasting protection"]
    }
  ];

  const commercialServices = [
    {
      title: "Office Buildings",
      description: "Maintain healthy indoor air quality for your employees and visitors.",
      features: ["Minimal disruption", "After-hours service", "Compliance reporting", "Maintenance plans"]
    },
    {
      title: "Retail Spaces",
      description: "Keep your customers comfortable with clean, fresh air circulation.",
      features: ["Flexible scheduling", "Quick turnaround", "Professional appearance", "Customer satisfaction"]
    },
    {
      title: "Restaurants & Hotels",
      description: "Specialized cleaning for hospitality industry with strict health standards.",
      features: ["Health code compliance", "Grease removal", "Kitchen exhaust cleaning", "Guest comfort priority"]
    }
  ];

  const additionalServices = [
    {
      icon: <Wind className="w-8 h-8 text-primary-600" />,
      title: "Dryer Vent Cleaning",
      description: "Prevent fires and improve efficiency with professional dryer vent cleaning.",
      price: "Starting at $99"
    },
    {
      icon: <Thermometer className="w-8 h-8 text-primary-600" />,
      title: "HVAC Maintenance",
      description: "Regular maintenance to keep your system running efficiently year-round.",
      price: "Starting at $149"
    },
    {
      icon: <TestTube className="w-8 h-8 text-primary-600" />,
      title: "Air Quality Testing",
      description: "Comprehensive testing to identify allergens, mold, and other contaminants.",
      price: "Starting at $199"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Inspection",
      description: "Comprehensive assessment of your entire duct system using advanced camera equipment.",
      duration: "30-60 minutes"
    },
    {
      step: 2,
      title: "System Preparation",
      description: "Protect your home and prepare equipment for the cleaning process.",
      duration: "15-30 minutes"
    },
    {
      step: 3,
      title: "Professional Cleaning",
      description: "Deep cleaning using powerful vacuum systems and specialized brushes.",
      duration: "2-4 hours"
    },
    {
      step: 4,
      title: "Sanitization",
      description: "Apply EPA-approved antimicrobial treatments for long-lasting protection.",
      duration: "30 minutes"
    },
    {
      step: 5,
      title: "Final Inspection",
      description: "Quality verification with before/after photos and air flow testing.",
      duration: "30 minutes"
    }
  ];

  const faqs = [
    {
      question: "How often should I have my air ducts cleaned?",
      answer: "The National Air Duct Cleaners Association (NADCA) recommends cleaning your air ducts every 3-5 years for most homes, or more frequently if you have pets, allergies, or live in a dusty environment."
    },
    {
      question: "How long does the cleaning process take?",
      answer: "Most residential duct cleaning services take 3-5 hours to complete, depending on the size of your home and the complexity of your HVAC system."
    },
    {
      question: "Will duct cleaning reduce my energy bills?",
      answer: "Yes, clean ducts can improve your HVAC system's efficiency by up to 30%, which can lead to significant energy savings on your monthly bills."
    },
    {
      question: "Is your cleaning process safe for my family and pets?",
      answer: "Absolutely. We use EPA-approved, non-toxic cleaning agents and follow strict safety protocols. Your family and pets can remain in the home during the cleaning process."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive air duct cleaning solutions for residential and commercial properties nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/17542798161?text=Hi, I'd like to get a free quote for air duct cleaning services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent-600 hover:bg-accent-700 text-white rounded-md px-8 py-4 text-lg font-medium transition-colors duration-200"
              >
                Get Quote on WhatsApp
              </a>
              <a 
                href="tel:+15208428930"
                className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 rounded-md px-8 py-4 text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>(520) 842-8930</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Home className="w-8 h-8 text-primary-600" />
              <h2 className="text-4xl font-bold text-gray-900">Residential Services</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive air duct cleaning services designed specifically for homes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {residentialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building className="w-8 h-8 text-primary-600" />
              <h2 className="text-4xl font-bold text-gray-900">Commercial Services</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional duct cleaning solutions for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive HVAC and indoor air quality services to keep your system running perfectly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <div className="text-2xl font-bold text-primary-600">{service.price}</div>
                    <a 
                      href="https://wa.me/17542798161?text=Hi, I'd like to schedule your service."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white rounded-md px-4 py-2 font-medium transition-colors duration-200"
                    >
                      Schedule on WhatsApp
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, thorough, and efficient. Here's what to expect during your service
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.step}
                </div>
                <div className="ml-6 flex-grow">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our air duct cleaning services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Schedule Your Service?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free quote and breathe easier with professionally cleaned air ducts
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://wa.me/17542798161?text=Hi, I'd like to get a free quote for air duct cleaning services now."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent-600 hover:bg-accent-700 text-lg px-8 py-4 rounded-md text-white font-medium transition-colors duration-200"
              >
                Get Quote on WhatsApp
              </a>
              <a 
                href="tel:+15208428930"
                className="flex items-center justify-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 rounded-md px-8 py-4 text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call (520) 842-8930</span>
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>NADCA Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;