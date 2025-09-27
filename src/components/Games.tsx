import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import marioCharacter from "@/assets/mario-character.jpg";
import zeldaCharacter from "@/assets/zelda-character.jpg";
import pokemonCharacter from "@/assets/pokemon-character.jpg";

const Games = () => {
  const games = [
    {
      title: "Super Mario",
      character: marioCharacter,
      description: "Join Mario on incredible adventures through the Mushroom Kingdom!",
      genre: "Platformer",
      color: "bg-nintendo-red"
    },
    {
      title: "The Legend of Zelda",
      character: zeldaCharacter,
      description: "Embark on epic quests in the magical world of Hyrule.",
      genre: "Adventure",
      color: "bg-nintendo-green"
    },
    {
      title: "Pokémon",
      character: pokemonCharacter,
      description: "Catch, train, and battle with your favorite Pokémon!",
      genre: "RPG",
      color: "bg-nintendo-yellow"
    }
  ];

  const popularTitles = [
    "Super Mario Odyssey",
    "The Legend of Zelda: Breath of the Wild",
    "Pokémon Scarlet & Violet",
    "Mario Kart 8 Deluxe",
    "Super Smash Bros. Ultimate",
    "Animal Crossing: New Horizons"
  ];

  return (
    <section className="py-20 bg-gradient-games">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Legendary Game Franchises
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the iconic characters and worlds that have captivated gamers for generations.
          </p>
        </div>

        {/* Main franchises */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <Card
              key={game.title}
              className="overflow-hidden shadow-gaming hover:shadow-glow transition-all duration-500 hover:scale-105 group bg-white/95 backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={game.character}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className={`absolute top-4 right-4 ${game.color} text-white`}>
                  {game.genre}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {game.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {game.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular titles */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Popular Titles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {popularTitles.map((title, index) => (
              <Badge
                key={title}
                variant="secondary"
                className="text-lg py-2 px-4 bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-colors cursor-pointer"
              >
                {title}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;