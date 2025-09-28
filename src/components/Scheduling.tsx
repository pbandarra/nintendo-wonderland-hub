import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Scheduling = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"nintendo-support"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-background via-accent/20 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-nintendo-red to-nintendo-blue bg-clip-text text-transparent">
            Schedule Your Nintendo Support Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a personalized consultation with our Nintendo experts to get help with your console, games, or technical issues.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-xl">
          <Cal 
            namespace="nintendo-support"
            calLink="pedro-bandarra-9mne32/nintendo-support"
            style={{width:"100%",height:"600px",overflow:"scroll"}}
            config={{"layout":"month_view"}}
          />
        </div>
      </div>
    </section>
  );
};

export default Scheduling;