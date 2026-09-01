import Image from "next/image";

export default function LogoBrand({ footer = false }: { footer?: boolean }) {
  return (
    <span className={footer ? "brand brand-footer" : "brand"}>
      <Image className="logo logo-light" src="/assets/logo1.png" alt="Xamogelo Conseil & Marketing" width={594} height={420} priority={!footer} />
      <Image className="logo logo-dark" src="/assets/logo2.png" alt="Xamogelo Conseil & Marketing" width={594} height={420} priority={!footer} />
    </span>
  );
}
