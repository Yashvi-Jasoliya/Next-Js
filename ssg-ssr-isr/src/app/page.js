import Image from "next/image";

// In next js by default components are server component
// vs code terminal shows server side data 
// Inspect -> console  is shows client side data 
export default function Home() {

    console.log("Hiii")
  return (
    <h1>This is homepage</h1>
  );
}
