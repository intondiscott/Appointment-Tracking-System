import Image from "next/image";
export default function NotFound() {
  return (
    <Image
      className='rounded-full w-full '
      src={"/assets/404.gif"}
      alt='404'
      width={800}
      height={600}
    />
  );
}
