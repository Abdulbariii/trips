import "./App.css";
import Title from "./component/Title";
import Btn from "./component/Btn";
import Card from "./component/Card";
import { useEffect, useState } from "react";
import Modal from "./component/Modal";

function App() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const [modal, setModal] = useState(false);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTrips(data);
  };
  const asia = "http://localhost:3000/trips?loc=asia";
  const africa = "http://localhost:3000/trips?loc=africa";
  const europe = "http://localhost:3000/trips?loc=europe";

  const setAsia = () => {
    setUrl(asia);
  };
  const setAfrica = () => {
    setUrl(africa);
  };
  const setEurope = () => {
    setUrl(europe);
  };

  const setAll = () => {
    setUrl("http://localhost:3000/trips");
  };

  const setTicket = () => {
    setModal(true);
  };

  const cancel = () => {
    setModal(false);
  };

  console.log(trips);

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div className="App  flex text-center flex-wrap  mt-14 flex-col items-center justify-center lg:w-[36rem] md:w-[36rem] ">
      <Title />
      <Btn
        setAsia={setAsia}
        setAll={setAll}
        setAfrica={setAfrica}
        setEurope={setEurope}
      />
      {trips.map((places) => (
        <Card
          name={places.name}
          price={places.price}
          image={places.image}
          setTicket={setTicket}
        ></Card>
      ))}

      {modal && <Modal cancel={cancel}></Modal>}
    </div>
  );
}

export default App;
