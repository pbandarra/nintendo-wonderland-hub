import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      category: "Consoles",
      questions: [
        {
          question: "What's the difference between Nintendo Switch and Switch OLED?",
          answer: "The Nintendo Switch OLED features a larger 7-inch OLED screen with more vibrant colors, enhanced audio, 64GB internal storage (double that of the standard Switch), and an improved adjustable stand. Both consoles play the same games and offer the same gaming experience."
        },
        {
          question: "Can I play Nintendo Switch games on TV and handheld mode?",
          answer: "Yes! The Nintendo Switch is a hybrid console that seamlessly transitions between TV mode (docked) and handheld mode. Simply dock your Switch to play on TV at 1080p, or undock it for portable gaming at 720p resolution."
        },
        {
          question: "How long does the Nintendo Switch battery last?",
          answer: "Battery life varies depending on the game and usage. The newer Nintendo Switch model offers 4.5-9 hours of battery life, while the OLED model provides similar performance. Less demanding games like 2D platformers will last longer than intensive 3D games."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "My Joy-Con controllers are drifting. What should I do?",
          answer: "Joy-Con drift can often be resolved by recalibrating the controllers in System Settings > Controllers and Sensors > Calibrate Control Sticks. If the issue persists, you may need to clean around the analog sticks or contact Nintendo Support for repair options."
        },
        {
          question: "How do I transfer data to a new Nintendo Switch?",
          answer: "You can transfer your user data, save data, and some settings from one Nintendo Switch to another using the System Transfer feature in System Settings. Make sure both consoles are updated to the latest system version and connected to the internet."
        },
        {
          question: "Why won't my Nintendo Switch connect to Wi-Fi?",
          answer: "First, check if other devices can connect to your Wi-Fi network. Try restarting your Switch and router. Ensure your network uses WPA/WPA2 security (WEP is not supported). You can also try connecting closer to your router or using a wired connection with a LAN adapter."
        }
      ]
    },
    {
      category: "Digital Games",
      questions: [
        {
          question: "Can I share digital games between multiple Nintendo Switch consoles?",
          answer: "Yes, with some limitations. Your Nintendo Account can be linked to multiple consoles, but you can only have one Primary Console. Digital games can be played on any console with your account, but on non-primary consoles, you need an internet connection and can't play simultaneously on both."
        },
        {
          question: "What happens to my digital games if my Nintendo Switch breaks?",
          answer: "Your digital games are tied to your Nintendo Account, not the console. You can redownload your purchased games on a new or repaired console by signing in with the same Nintendo Account. Save data can be recovered if you have Nintendo Switch Online cloud backup enabled."
        },
        {
          question: "Can I get a refund for digital games purchased from Nintendo eShop?",
          answer: "Nintendo generally doesn't offer refunds for digital purchases unless required by local law. However, you may be eligible for a refund if you haven't downloaded the software or if there are technical issues. Contact Nintendo Customer Support for assistance with specific cases."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about Nintendo consoles, technical support, and digital games.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-2xl font-bold text-nintendo-red mb-4 flex items-center">
                <div className="w-2 h-8 bg-nintendo-red rounded-full mr-3"></div>
                {category.category}
              </h3>
              
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={`${categoryIndex}-${faqIndex}`}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-border rounded-lg px-6 py-2 shadow-sm hover:shadow-console transition-shadow"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-nintendo-blue transition-colors">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;