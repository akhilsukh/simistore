import '../styles/index.css'
import React, { useEffect, useState } from "react";
import countapi from "countapi-js";

function MyApp({ Component, pageProps }) {
  const key = "8125a197-987b-428f-921c-78b32f9e3c03"
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    getVisits();
  }, []);

  const getVisits = async () => {
    try {
      // countapi.set(key, 0)
      //     .then((result) => {
      //       setVisits(result.value)
      //     });
      countapi.visits(key)
          .then((result) => {
            setVisits(result.value)
          });
    } catch (err) {
      console.log(err.message)
    }
  };
  return <div>
    <Component {...pageProps} />
    <div className="py-8 mx-auto">
      <p className={"text-center"}>
        Visits: {visits}
      </p>
    </div>
  </div>
}

export default MyApp
