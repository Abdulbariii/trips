import "./App.css";
import Title from "./component/Title";
import Btn from "./component/Btn";
import Card from "./component/Card";
import { useEffect, useState } from "react";
import Modal from "./component/Modal";

function App() {
  const data = [
    {
      name: "paris",
      price: "800$",
      image:
        "https://images.unsplash.com/photo-1562243885-2541f1032824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      loc: "europe",
    },
    {
      name: "Dubai",
      price: "400$",
      image:
        "https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      loc: "asia",
    },
    {
      name: "Erbil",
      price: "300$",
      image:
        "https://images.unsplash.com/photo-1608925086961-dbcd276a0e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      loc: "asia",
    },
    {
      name: "Egypt",
      price: "500$",
      image:
        "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      loc: "africa",
    },
    {
      name: "Berlin",
      price: "900$",
      image:
        "https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      loc: "europe",
    },
    {
      name: "London",
      price: "900$",
      image:
        "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      loc: "europe",
    },
  ];

  const [trips, setTrips] = useState(data);

  const [modal, setModal] = useState(false);

  const setTicket = () => {
    setModal(true);
  };

  const cancel = () => {
    setModal(false);
  };

  const locAsia = () => {
    setTrips(data);
    setTrips((trips) => {
      return trips.filter((trips) => {
        return trips.loc === "asia";
      });
    });
  };

  const locAfrica = () => {
    setTrips(data);
    setTrips((trips) => {
      return trips.filter((trips) => {
        return trips.loc === "africa";
      });
    });
  };

  const locEurope = () => {
    setTrips(data);
    setTrips((trips) => {
      return trips.filter((trips) => {
        return trips.loc === "europe";
      });
    });
  };

  const locAll = () => {
    setTrips(data);
    setTrips((trips) => {
      return trips.filter((trips) => {
        return trips;
      });
    });
  };
  console.log(trips.loc);

  return (
    <div className="App  flex text-center flex-wrap  mt-14 flex-col items-center justify-center lg:w-[36rem] md:w-[36rem] ">
      <Title />
      <Btn
        locAsia={locAsia}
        locAfrica={locAfrica}
        locEurope={locEurope}
        locAll={locAll}
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
