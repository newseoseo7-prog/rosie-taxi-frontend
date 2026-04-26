import React from "react";
import Link from "next/link";
const links = [
    "https://gLENDALETAXIS.COM",
    "https://Guccinow.com",
    "https://airport.blog",
    "https://losangelesairport.social",
    "https://losangelesairport.me",
    "https://airports.agency",
    "https://losangelesairport.online",
    "https://losangelesairport.today",
    "https://losangelesairport.live",
    "https://airport.money",
    "https://airports.social",
    "https://google1.us",
    "https://googlenow.cloud",
    "https://google365.solutions",
    "https://googlenow.cloud",
    "https://google365.solutions",
    "https://google365.info",
    "https://googleproject.org",
    "https://googlenow.shop",
    "https://googlenow.online",
    "https://googlenow.xyz",
    "https://thegoogle.xyz",
    "https://lax.zone",
    "https://venturataxicab.com",
    "https://googletaxi.co",
    "https://googlenow.org",
    "https://theamazon.us",
    "https://googlenow.co",
    "https://theamazon.us",
    "https://googlenow.co",
    "https://airport.baby",
    "https://amazononline.co",
    "https://sanlimousine.com",
    "https://uberpro.today",
    "https://uberme.live",
    "https://taxicabs.live",
    "https://theojai.college",
    "https://taxicab.live",
    "https://taxicab.college",
    "https://taxicabs.college",
    "https://ubernow.info",
    "https://ojai.rent",
    "https://ojaitaxicabs.com",
    "https://ojai.solutions",
    "https://ojai.live",
    "https://airport.monster",
    "https://lahere.com",
    "https://thebalenciaga.com",
    "https://losangelesairport.co",
    "https://uberhere.com",
    "https://airportcabs.org",
    "https://losangelesairport.info",
    "https://airports.digital",
    "https://theairport.info",
    "https://airportpark.org",
    "https://taxisglendale.com",
    "https://camarillotaxicab.com",
    "https://rosiescabservice.com",
    "https://airportservicecenter.com",
    "https://malibuway.com",
    "https://thetomford.com",
    "https://gucciservices.com",
    "https://iphoneplan.com",
    "https://mybalenciaga.com",
    "https://samsungnow.com",
    "https://lyftmenow.com",
    "https://getlyftnow.com",
    "https://ojaitaxiservice.com",
    "https://pasadenataxis.com",
    "https://ventura.monster",
    "https://airportonline.org",
    "https://venturagov.org",
    "https://taxisventura.com",
    "https://oxnardtransit.com",
    "https://oxnardtransitcenter.com",
    "https://uberme.org",
    "https://taxinearmenow.com",
    "https://lyftnow.com",
    "https://getubers.com",
    "https://venturatransportation.com",
    "https://oxnardcar.com",
    "https://oxnardtransport.com",
    "https://taxisoxnard.com",
    "https://oxnardcabs.com",
    "https://losangeles.live",
    "https://lax.it.com"
  ];
  

function LinksPage() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-10 my-24 lg:space-y-12 lg:mb-28">
        <div className="text-center dark:text-white">
          <h2 className="text-3xl font-bold md:text-5xl">Rosietaxicab Links</h2>
          <div className="grid grid-cols-1 gap-4 mt-10">
            {links.map((url, index) => (
              <Link key={index} href={"/"} className="text-blue-400" target="_blank">
                {url}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default LinksPage;
