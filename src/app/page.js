import Image from "next/image";
import D3Chart from "./components/D3Chart";
import Map from "./components/Map";
import NetworkMap from "./components/NetworkMap";
import OptionBox from "./components/OptionBox";
import GraphBox from "./components/GraphBox";

export default function Home() {

  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "stretch", 
        justifyContent: "center", 
        height: "100vh",
        width: "100vw", 
        }}
      >
      <GraphBox></GraphBox>
      <NetworkMap></NetworkMap>
      <OptionBox></OptionBox>
    </div>
  );
}
