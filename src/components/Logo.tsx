import Image from "next/image";

function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        src={"/assets/logo.png"}
        alt="irantools-logo"
        width={150}
        height={100} />
    </div>
  );
}
export default Logo