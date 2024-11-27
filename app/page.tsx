import Image from "next/image";

export default function Home() {
  return (
    <div >

      <Image
      src="/M.png"
      alt="Pic"
      width={50}
      height={50}
      className="bg-white flex justify-center"
      />
    </div>
  );
}
