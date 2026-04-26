import React from "react";
import Link from "next/link";

const links = [
  "https://similarto.us/Rosietaxicab.com/",
  "https://w3techs.com/sites/info/Rosietaxicab.com",
  "https://www.spyfu.com/overview/domain?query=Rosietaxicab.com",
  "https://www.whois.com/whois/Rosietaxicab.com",
  "https://www.semrush.com/info/Rosietaxicab.com",
  "https://www.woorank.com/en/www/Rosietaxicab.com",
  "https://www.woorank.com/en/www/Rosietaxicab.coming",
  "https://aboutus.org/Rosietaxicab.com",
  "http://www.who.is/whois/Rosietaxicab.com/",
  "http://www.sitedossier.com/site/Rosietaxicab.com",
  "http://www.serpanalytics.com/#competitor/Rosietaxicab.com/summary//1",
  "http://www.robtex.com/dns/Rosietaxicab.com.html",
  "https://www.quantcast.com/Rosietaxicab.com",
  "http://scamanalyze.com/check/Rosietaxicab.com.html",
  "http://www.infositeshow.com/sites/Rosietaxicab.com",
  "http://www.viewwhois.com/Rosietaxicab.com/",
  "http://rosietaxicab.com.hypestat.com/",
  "https://web.archive.org/web/*/Rosietaxicab.com/",
  "https://www.dnswhois.info/Rosietaxicab.com",
  "https://mywot.com/en/scorecard/Rosietaxicab.com",
  "https://whois.de/Rosietaxicab.com",
  "https://be1.ru/stat/Rosietaxicab.com",
  "https://www.rbls.org/Rosietaxicab.com",
  "https://hqindex.org/Rosietaxicab.com",
  "http://www.builtwith.com/rosietaxicab.com",
  "http://www.alexa.com/siteinfo/rosietaxicab.com",
  "http://whois.tools4noobs.com/info/rosietaxicab.com",
  "http://www.robtex.com/dns/rosietaxicab.com",
  "http://www.quantcast.com/rosietaxicab.com",
  "http://www.backtalk.com/?url=rosietaxicab.com/",
  "http://hostcrax.com/siteinfo/rosietaxicab.com",
  "http://siteranker.com/SiteInfo.aspxurl=rosietaxicab.com/&E=1",
  "https://www.whois.com/whois/rosietaxicab.com",
  "www.urltrends.com/rank/rosietaxicab.com",
  "https://hqindex.org/Rosietaxicab.com",
  "https://www.rbls.org/Rosietaxicab.com",
  "https://www.addtoany.com/share/?linkname=&linkurl=Rosietaxicab.com",
  "https://be1.ru/stat/Rosietaxicab.com",
  "https://a.pr-cy.ru/Rosietaxicab.com/",
  "https://web.archive.org/web/*/Rosietaxicab.com/",
  "https://www.dnswhois.info/Rosietaxicab.com",
  "https://mywot.com/en/scorecard/Rosietaxicab.com",
  "https://whois.de/Rosietaxicab.com",
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
