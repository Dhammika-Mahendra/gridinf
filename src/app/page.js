import Image from "next/image";
import D3Chart from "./components/D3Chart";
import Map from "./components/Map";
import NetworkMap from "./components/NetworkMap";

export default function Home() {
  return (
    <div >
      This is Next
      <NetworkMap></NetworkMap>
    </div>
  );
}
