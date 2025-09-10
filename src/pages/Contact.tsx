import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Home,
  Building
} from 'lucide-react';

const quoteFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your address'),
  propertyType: z.enum(['residential', 'commercial']).refine((val) => val !== undefined, {
    message: 'Please select a property type',
  }),
  serviceNeeded: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Quote request:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "(520) 842-8930",
      subtitle: "24/7 Customer Support",
      action: "tel:+15208428930"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@freshairductcleaning.com",
      subtitle: "We respond within 2 hours",
      action: "mailto:info@freshairductcleaning.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Area",
      details: "All 50 States",
      subtitle: "Nationwide Coverage",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "24/7 Emergency Service",
      subtitle: "Regular Hours: 7 AM - 7 PM",
      action: null
    }
  ];

  const services = [
    "Residential Duct Cleaning",
    "Commercial Duct Cleaning", 
    "Dryer Vent Cleaning",
    "HVAC Maintenance",
    "Air Quality Testing",
    "Emergency Service"
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
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to improve your indoor air quality? Get your free quote today and join thousands of satisfied customers nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-700 flex items-center space-x-2">
                    <MessageSquare className="w-6 h-6" />
                    <span>Get Your Free Quote</span>
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll contact you within 2 hours with a personalized quote.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center space-x-2 text-green-800"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Thank you! We'll contact you within 2 hours.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center space-x-2 text-red-800"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Something went wrong. Please try again or call us directly.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          {...register('name')}
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Address *
                      </label>
                      <Input
                        id="address"
                        {...register('address')}
                        className={errors.address ? 'border-red-500' : ''}
                        placeholder="Street address, City, State, ZIP"
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                          Property Type *
                        </label>
                        <select
                          id="propertyType"
                          {...register('propertyType')}
                          className={`w-full rounded-md border ${errors.propertyType ? 'border-red-500' : 'border-input'} bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
                        >
                          <option value="">Select property type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                        </select>
                        {errors.propertyType && (
                          <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-1">
                          Service Needed *
                        </label>
                        <select
                          id="serviceNeeded"
                          {...register('serviceNeeded')}
                          className={`w-full rounded-md border ${errors.serviceNeeded ? 'border-red-500' : 'border-input'} bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
                        >
                          <option value="">Select service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.serviceNeeded && (
                          <p className="mt-1 text-sm text-red-600">{errors.serviceNeeded.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder="Tell us about any specific concerns or questions you have..."
                        rows={4}
                      />
                    </div>

                    <a
                      href="https://wa.me/15208428930?text=Hi, I'd like to get a free quote for air duct cleaning services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-accent-600 hover:bg-accent-700 text-white rounded-md px-6 py-3 text-lg font-medium transition-colors duration-200"
                    >
                      Get Quote on WhatsApp
                    </a>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Contact us today for immediate assistance. Our certified technicians are ready to help improve your indoor air quality.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-primary-600 mb-3 flex justify-center">
                          {info.icon}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <div className="text-primary-600 font-medium">{info.details}</div>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary-50 to-accent-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">NADCA Certified Technicians</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">30-Day Satisfaction Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">Licensed, Bonded & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">Emergency Service Available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">Free Estimates & Consultations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-1">Emergency Service</h3>
                      <p className="text-yellow-700 text-sm">
                        Need immediate assistance? We offer 24/7 emergency duct cleaning services for urgent situations like water damage, mold discovery, or severe air quality issues.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nationwide Service Coverage</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We proudly serve customers across all 50 states with the same high-quality, professional air duct cleaning services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-8">
                  <Home className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential Services</h3>
                  <p className="text-gray-600">
                    Professional duct cleaning for homes, apartments, and condos. Improve your family's indoor air quality and reduce energy costs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <Building className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Services</h3>
                  <p className="text-gray-600">
                    Comprehensive duct cleaning for offices, retail spaces, restaurants, and industrial facilities. Maintain healthy work environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Don't Wait - Call Today!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The sooner you clean your air ducts, the sooner you'll breathe cleaner air and save money on energy bills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15208428930"
                className="inline-flex items-center justify-center space-x-2 bg-accent-600 hover:bg-accent-700 transition-colors rounded-md px-8 py-4 text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call (520) 842-8930</span>
              </a>
              <a 
                href="https://wa.me/15208428930?text=Hi, I'd like to get a free quote for air duct cleaning services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-lg px-8 py-4 rounded-md text-white font-medium transition-all duration-200"
              >
                Get Quote on WhatsApp
              </a>
            </div>
            
            <div className="mt-8 text-blue-100">
              <p className="text-sm">
                ✓ Free Estimates ✓ NADCA Certified ✓ 30-Day Guarantee ✓ Licensed & Insured
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;