import { Card } from "@/components/ui/card";

const History = () => {
  const timelineEvents = [
    {
      year: "1889",
      title: "The Beginning",
      description: "Nintendo was founded by Fusajiro Yamauchi as a playing card company in Kyoto, Japan."
    },
    {
      year: "1980",
      title: "Game & Watch",
      description: "Nintendo's first major success in electronic gaming with portable LCD games."
    },
    {
      year: "1985",
      title: "Nintendo Entertainment System",
      description: "The NES revolutionized home gaming and saved the video game industry in North America."
    },
    {
      year: "1989",
      title: "Game Boy",
      description: "The portable gaming revolution began with the Game Boy and Tetris."
    },
    {
      year: "1996",
      title: "Nintendo 64",
      description: "3D gaming reached new heights with the N64 and classics like Super Mario 64."
    },
    {
      year: "2006",
      title: "Nintendo Wii",
      description: "Motion controls changed gaming forever, bringing families together worldwide."
    },
    {
      year: "2017",
      title: "Nintendo Switch",
      description: "The hybrid console that combines home and portable gaming in one innovative system."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Legacy of Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 130 years, Nintendo has been creating joy through games and bringing smiles to people around the world.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-nintendo-red via-nintendo-blue to-nintendo-purple"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8`}
              >
                <div className="flex-1">
                  <Card className={`p-6 shadow-console hover:shadow-glow transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
                  } max-w-md`}>
                    <div className="text-2xl font-bold text-nintendo-red mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="w-6 h-6 bg-nintendo-yellow rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;