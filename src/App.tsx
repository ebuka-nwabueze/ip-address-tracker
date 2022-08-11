import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { getIp } from "./Api/api";
import Map from "./components/Map";
import { GetIpResponse } from "./types/types";
import "./App.css";
import Spinner from "./components/Spinner";


function App() {
  const [mapData, setMapData] = useState<GetIpResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(false);

  const getIpData = async (searchString: string) => {
    try {
      const data = (await getIp(searchString)) as GetIpResponse;
      if (data) setLoading(false);
      setMapData(data);
      console.log(mapData);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMapData(null);
    setLoading(true);
    await getIpData(searchInput);
    // console.log(mapData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getIpData("");
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (mapData === null || loading) return <Spinner />
  if (error) return <h1  className="spinnerContainer" style={{ color: "red" }}>"...error occured"</h1>;

  return (
    <>
      <div className="top__details">
        <h1 className="top__details-heading">IP Address Tracker</h1>

        <form action="" className="input-form" onSubmit={onSubmit}>
          <div className="input-control">
            <input
              type="text"
              id="input"
              name="input"
              className="input-field"
              onChange={handleChange}
              value={"" || searchInput}
              placeholder="search for any IP address or domain "
            />
            <button className="btn">
              <HiOutlineChevronRight
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              />
            </button>
          </div>
        </form>

        <div className="top__details-info">
          <div className="top__details-info-box">
            <p>IP Address</p>
            <h2>{mapData?.ip}</h2>
          </div>
          <div className="top__details-info-box">
            <p>Location</p>
            <h2>{`${mapData?.location?.region}, ${mapData?.location?.country}`}</h2>
          </div>
          <div className="top__details-info-box">
            <p>Timezone</p>
            <h2>{mapData?.location?.timezone}</h2>
          </div>
          <div className="top__details-info-box">
            <p>ISP</p>
            <h2>{mapData?.isp}</h2>
          </div>
        </div>
      </div>
        {/* <Map geocodes={[37.40599,37.40599]}/> */}
 
        <Map geocodes={[mapData?.location?.lat, mapData?.location?.lng]}/>
   
    </>
  );
}

export default App;
