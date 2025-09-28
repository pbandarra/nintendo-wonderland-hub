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
    <div className="w-full">
      <Cal 
        namespace="nintendo-support"
        calLink="pedro-bandarra-9mne32/nintendo-support"
        style={{width:"100%",height:"600px",overflow:"scroll"}}
        config={{"layout":"month_view"}}
      />
    </div>
  );
};

export default Scheduling;