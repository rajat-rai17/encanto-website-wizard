import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import InteractiveCard from "@/components/InteractiveCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Wrench, Leaf, Phone, Building, Eye, Star } from "lucide-react";
import { useEffect, useState } from "react";
const WhyChooseUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const advantages = [{
    title: "Stress-Free Maintenance",
    description: "Our systems are designed for minimal maintenance with robust components and proactive support services.",
    icon: Wrench,
    features: ["Preventive maintenance schedules", "24/7 technical support hotline", "Quick response time for repairs", "Genuine spare parts availability", "Trained technician network"]
  }, {
    title: "Long-term Relationships",
    description: "We build lasting partnerships with our clients through consistent service and continuous improvement.",
    icon: CheckCircle,
    features: ["Dedicated account management", "Regular system health checks", "Performance optimization reviews", "Upgrade consultation services", "Extended warranty options"]
  }, {
    title: "Quick Support Response",
    description: "Our technical team ensures rapid response to any service requests or technical issues.",
    icon: Clock,
    features: ["Same-day response guarantee", "Remote diagnostic capabilities", "Emergency service availability", "Mobile service units", "Real-time system monitoring"]
  }, {
    title: "End-to-End Service",
    description: "Complete project lifecycle management from initial consultation to ongoing maintenance.",
    icon: Shield,
    features: ["Site survey and consultation", "Custom design and engineering", "Professional installation", "Commissioning and testing", "Training and handover"]
  }, {
    title: "Sustainability Focus",
    description: "Environmentally conscious solutions that reduce carbon footprint and promote sustainable development.",
    icon: Leaf,
    features: ["Energy-efficient operations", "Reduced vehicle emissions", "Space optimization benefits", "Long-lasting materials", "Eco-friendly manufacturing"]
  }, {
    title: "Technology Advantage",
    description: "Advanced control systems and smart technology integration for superior performance.",
    icon: Phone,
    features: ["IoT-enabled monitoring", "Mobile app integration", "Predictive maintenance alerts", "Remote troubleshooting", "Data analytics and reporting"]
  }];
  const testimonials = [{
    client: "Nirmitee Developers",
    project: "Suman Apartments",
    quote: "Encanto Industries delivered an exceptional parking solution that perfectly fits our space constraints. The installation was smooth and the system has been running flawlessly.",
    rating: 5
  }, {
    client: "Nadkarni Foundation",
    project: "21st Century Hospital",
    quote: "The tower parking system has significantly improved our patient experience by providing quick and convenient parking. The support team is always responsive.",
    rating: 5
  }];
  const highlightedProjects = [{
    name: "Suman Apartments",
    client: "Nirmitee Developers"
  }, {
    name: "Kamal Nivas",
    client: "Eskay Elevators Ltd"
  }, {
    name: "Hawa Mahal",
    client: "H. Rishabraj"
  }, {
    name: "Sagar Darshan",
    client: "Anmol Nirmitee Developers"
  }, {
    name: "21st Century Hospital, Vapi",
    client: "Nadkarni Foundation"
  }];
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-tech-gradient"></div>
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`transition-all duration-1000 transform ${isLoaded ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text animate-pulse-slow text-white">Why Choose Us?</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-blue-100 animate-slideInRight delay-300">
                Experience the difference with our comprehensive approach to parking solutions
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section - Updated background color */}
        <section style={{
        backgroundColor: '#F0F8FF'
      }} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 transform transition-all duration-700 hover:scale-105">
                About Encanto Industries
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-sky-600 mx-auto rounded-full animate-pulse"></div>
            </div>
            
            <InteractiveCard hoverEffect="lift" className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-200 group">
              <CardHeader>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                    <Building className="w-8 h-8 text-white group-hover:animate-bounce" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  Welcome to <span className="font-semibold transition-colors duration-300 text-sky-400">Encanto Industries</span>, your premier destination for innovative parking solutions tailored to the demands of modern urban living.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  At Encanto, we are committed to revolutionizing the way cities approach parking. Our space-efficient systems are designed to optimize convenience, efficiency, and sustainability. Discover a new era in parking with our cutting-edge technology and unwavering commitment to excellence. Say goodbye to parking woes and hello to a seamless parking experience with Stack Parking.
                </p>
              </CardContent>
            </InteractiveCard>
          </div>
        </section>

        {/* Our Vision Section - Updated background color */}
        <section style={{
        backgroundColor: '#F5FBFF'
      }} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 transform transition-all duration-700 hover:scale-105">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-sky-600 mx-auto rounded-full animate-pulse"></div>
            </div>
            
            <InteractiveCard hoverEffect="glow" className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-200 group">
              <CardHeader>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                    <Eye className="w-8 h-8 text-white group-hover:animate-bounce" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  Encanto Industries is driven by a singular mission: to revolutionize urban parking and create a better parking experience for all. With a focus on innovation, efficiency, and sustainability, we're building a future where finding parking is hassle-free and cities are free to thrive without parking congestion.
                </p>
              </CardContent>
            </InteractiveCard>
          </div>
        </section>

        {/* Highlighted Projects Section - Updated background color */}
        

        {/* Key Advantages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transform transition-all duration-700 hover:scale-105">
                Our Competitive Advantages
              </h2>
              <p className="text-xl text-muted-foreground animate-slideInRight delay-200">
                What sets us apart in the parking solutions industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => <InteractiveCard key={index} hoverEffect="tilt" className="transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-fade-in-up group" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4 neon-blue group-hover:animate-pulse transform transition-all duration-300 group-hover:scale-110">
                      <advantage.icon className="h-6 w-6 text-primary group-hover:animate-bounce" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 group-hover:text-slate-700 transition-colors duration-300">{advantage.description}</p>
                    <ul className="space-y-2">
                      {advantage.features.map((feature, idx) => <li key={idx} className="flex items-start text-sm text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                          {feature}
                        </li>)}
                    </ul>
                  </CardContent>
                </InteractiveCard>)}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 relative" style={{
        backgroundColor: '#F5FBFF'
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 bg-white"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transform transition-all duration-700 hover:scale-105">
                  Commitment to Excellence
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 animate-pulse" />
                    <div>
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors duration-300">Quality Assurance</h3>
                      <p className="text-muted-foreground hover:text-slate-700 transition-colors duration-300">
                        Rigorous testing and quality control processes ensure reliable performance 
                        and longevity of our parking systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 animate-pulse" />
                    <div>
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors duration-300">Customer-Centric Approach</h3>
                      <p className="text-muted-foreground hover:text-slate-700 transition-colors duration-300">
                        We prioritize customer satisfaction through personalized service, 
                        transparent communication, and responsive support.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 animate-pulse" />
                    <div>
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors duration-300">Continuous Innovation</h3>
                      <p className="text-muted-foreground hover:text-slate-700 transition-colors duration-300">
                        Investment in research and development keeps us at the forefront 
                        of parking technology and industry best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <InteractiveCard hoverEffect="glow" className="glass-effect transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-300 group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Our Promise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-effect rounded-lg p-4 neon-blue transform transition-all duration-300 hover:scale-105 group-hover:bg-blue-50">
                    <h4 className="font-semibold text-primary mb-2 group-hover:animate-pulse">Reliability</h4>
                    <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">Systems designed for 99%+ uptime with minimal maintenance requirements.</p>
                  </div>
                  
                  <div className="glass-effect rounded-lg p-4 neon-blue transform transition-all duration-300 hover:scale-105 group-hover:bg-blue-50">
                    <h4 className="font-semibold text-primary mb-2 group-hover:animate-pulse">Safety</h4>
                    <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">Multiple safety features and fail-safe mechanisms protect vehicles and users.</p>
                  </div>
                  
                  <div className="glass-effect rounded-lg p-4 neon-blue transform transition-all duration-300 hover:scale-105 group-hover:bg-blue-50">
                    <h4 className="font-semibold text-primary mb-2 group-hover:animate-pulse">Support</h4>
                    <p className="text-muted-foreground group-hover:text-slate-700 transition-colors duration-300">Comprehensive support throughout the system lifecycle with guaranteed response times.</p>
                  </div>
                </CardContent>
              </InteractiveCard>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        

        <Footer />
        <WhatsAppButton />
      </div>
    </div>;
};
export default WhyChooseUs;