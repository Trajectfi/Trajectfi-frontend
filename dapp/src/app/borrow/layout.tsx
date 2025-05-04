import Header from "../../../components/_components/Header";
import SideBar from "../../../components/_components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#090a20]">
      <SideBar />

      <div className="flex flex-col w-full  ">
        <Header />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
