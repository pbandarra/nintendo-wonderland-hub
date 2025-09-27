import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import switchConsole from "@/assets/switch-console.jpg";
import switchOled from "@/assets/switch-oled.jpg";

const Consoles = () => {
  const consoles = [
    {
      name: "Nintendo Switch",
      image: switchConsole,
      price: "$299.99",
      features: [
        "Hybrid gaming experience",
        "Detachable Joy-Con controllers",
        "Up to 9 hours battery life",
        "720p handheld / 1080p docked"
      ],
      badge: "Popular",
      badgeColor: "bg-nintendo-blue"
    },
    {
      name: "Nintendo Switch OLED",
      image: switchOled,
      price: "$349.99",
      features: [
        "7-inch OLED screen",
        "Enhanced audio",
        "64GB internal storage",
        "Adjustable wide stand"
      ],
      badge: "Premium",
      badgeColor: "bg-nintendo-purple"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Nintendo Consoles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience gaming like never before with our innovative hybrid consoles that adapt to your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {consoles.map((console, index) => (
            <Card
              key={console.name}
              className="overflow-hidden shadow-console hover:shadow-glow transition-all duration-500 hover:scale-105 group"
            >
              <div className="relative">
                <img
                  src={console.image}
                  alt={console.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className={`absolute top-4 right-4 ${console.badgeColor} text-white`}>
                  {console.badge}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {console.name}
                  </h3>
                  <span className="text-2xl font-bold text-nintendo-red">
                    {console.price}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {console.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-nintendo-yellow rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="gaming" size="lg" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consoles;