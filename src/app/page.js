// import Image from "next/image";
// import HomeBanner from "./component/HomeBanner";
// import Footer from "./component/Footer";
// import Header from "./component/Header";

// export default function Home() {
//   return (
//     <div>
//       <Header/>
//       <HomeBanner/>
//       <Footer/>
//     </div>
//   );
// }

import HomeBanner from "./component/HomeBanner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Content from "./component/Content";
import ClientsSection from "./component/Client";
import AddOnServices from "./component/AddOnServices";
import BrochureRequest from "./component/BrochureRequest";
import CompanyClients from "./component/ClientSlider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HomeBanner />
      </main>
      <Content/>
      <ClientsSection/>
      <AddOnServices/>
      <CompanyClients/>
      <BrochureRequest/>
      <Footer />
    </div>
  );
}


