import React from "react";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";


export default function Hippa() {

    return (
        <>
            <main className="nc-PageHome relative overflow-hidden">
                <div className="container relative space-y-24 my-24 lg:space-y-28 lg:mb-28">

                    <h1 className={"text-4xl font-semibold"}>10 Fantastic Things To Do In Santa Monica.</h1>



                    <CitiesInfoSection
                        heading="1. EXPLORE THE SANTA MONICA PIER"
                        text={
                            <>
                                <p className={"dark:text-neutral-800"}>This historic beachfront landmark is home to several attractions, including an amusement park and aquarium. Take a stroll along the pier or hop on one of the many rides, from bumper cars to ferries wheels.
                                </p>

                            </>


                        }
                        image="/images/0007_DCItineraries_TeenagersLASantaMonicaPierNight_Credit-SantaMonicaPier-1-1920x840-1.webp" // Replace with actual Malibu Pier
                        imagePosition="right"

                    />


                    <CitiesInfoSection
                        heading="2. HIT THE BEACH"
                        text={
                            <>

                                <p >
                                    With miles of beautiful beaches, it’s hard not to take advantage of all that sand and surf. Whether you want to body surf, relax on a lounge chair or take a surfing lesson, Santa Monica has it all!
                                </p>
                            </>
                        }
                        image="/images/LAX-paradise-cove-beach-cafe-escale-a-malibu-2_1-1024x512-1.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />
                    <CitiesInfoSection
                        heading="3. CATCH SOME WAVES AT VENICE BEACH
"
                        text={
                            <>
                            <p>
                                Just a short bus ride away, Venice Beach is one of Los Angeles’ most popular attractions and home to world-famous Muscle Beach! Here you can surf waves like a pro (or just watch others do so) while taking in the lively ambiance along the boardwalk!
                            </p>


                            </>
                        }
                        image="/images/il_fullxfull.2189688763_hd3r-scaled.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />


                    <CitiesInfoSection
                        heading="4. SHOP ALONG THIRD STREET PROMENADE

"
                        text={
                            <>
                                <p>
                                    This pedestrian-only shopping destination offers plenty of options with something for everyone—from retail shops and department stores to gourmet restaurants and artisanal coffee houses. Whether it’s vintage finds or designer labels you’re after, you’ll find it all in Santa Monica! Spend an afternoon strolling through Third Street Promenade for an array of boutique stores as well as larger retail chains.
                                </p>


                            </>
                        }
                        image="/images/promenade-street-santa-monica.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />
                    <CitiesInfoSection
                        heading="5. TAKE IN SOME ARTS


"
                        text={
                            <>
                                <p>
                                    Located near downtown Santa Monica is Bergamot Station, where numerous art galleries feature works by famous and emerging artists from around the world.


                                </p>


                            </>
                        }
                        image="/images/take-in-some-art.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />
                    <CitiesInfoSection
                        heading="6. VISIT & RELAX AT THE PALISADES PARK


"
                        text={
                            <>
                                <p>
                                    Get away from the hustle and bustle of the city and take a leisurely stroll through this breathtaking park that offers sweeping ocean views, lush greenery and more than twenty acres of recreational activities—including tennis courts and jogging trails.


                                </p>


                            </>
                        }
                        image="/images/palisades-park.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />
                    <CitiesInfoSection
                        heading="7. CATCH A SHOW AT THE SANTA MONICA PLAYHOUSE


"
                        text={
                            <>
                                <p>
                                    This small theater specializes in presenting plays that focus on social issues as well as musicals and improv comedy show that will keep your entire group entertained!


                                </p>


                            </>
                        }
                        image="/images/2017-10-02.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />
                    <CitiesInfoSection
                        heading="8. TASTE YOUR WAY THROUGH SANTA MONICA SEAFOOD MARKET & CAFE


"
                        text={
                            <>
                                <p>
                                    Since 1981, they have been serving up fresh seafood sourced daily from local fishermen—and it doesn’t get any fresher than this! From their ceviche bar to their creative dishes featuring local organic produce, you won’t be disappointed!


                                </p>


                            </>
                        }
                        image="/images/Clams.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />
                    <CitiesInfoSection
                        heading="9. TOUR LACMA (LOS ANGELES COUNTY MUSEUM OF ART)


"
                        text={
                            <>
                                <p>
                                    With over 120 galleries featuring everything from pre-historic sculptures to modern-day impressionists’ artwork, there’s something for everyone here at LACMA!


                                </p>


                            </>
                        }
                        image="/images/USA_Evening_Los_Angeles_County_Museum_of_Art_Los_566640_1280x854.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />
                    <CitiesInfoSection
                        heading="10. EXPERIENCE ARTS & CULTURE AT BERGAMOT STATION


"
                        text={
                            <>
                                <p>
                                    Take some time out of your vacation schedule to explore some art galleries where modern works by both renowned artists and local emerging talent can be admired!


                                </p>


                            </>
                        }
                        image="/images/Art810x482.webp"  // Replace with actual Malibu Pier image URL
                        imagePosition="right"

                    />


                    <CitiesInfoSection
                        heading="About The Author RYAN RAIKER
"
                        className={"max-w-4xl mx-auto"}
                        text={
                            <>


                                <p>
                                    “ I write about tech, marketing, business, and more..”
                                    <a
                                    href="https://ryanraiker.medium.com/"
                                    className={"text-blue-800"}
                                >RYAN RAIKER</a>
                                </p>


                            </>
                        }
                        image="/images/LH8s7eX-_400x400.webp"  // Replace with actual Malibu Pier image URL
                        imageClass={"max-w-[200px] max-h-[200px] "}

                        imagePosition="left"

                    />
                    <div className="flex container flex-wrap justify-center mt-8">
                        <nav className="flex flex-wrap gap-4 ">


                            <a href="/blog/1-2" className="px-4 py-2 border rounded-lg   ">1</a>
                            <a href="/blog/2-2" className="px-4 py-2 border  hover:bg-gray-300   rounded-lg ">2</a>
                            <a href="/blog/3-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">3</a>
                            <a href="/blog/4-2" className="px-4 py-2 border rounded-lg  bg-blue-500 text-white  ">4</a>
                            <a href="/blog/5-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">5</a>
                            <a href="/blog/6-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">6</a>
                            <a href="/blog/7-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">7</a>
                            <a href="/blog/8-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">8</a>
                            <a href="/blog/11-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">9</a>
                            <a href="/blog/13-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">10</a>
                            <a href="/blog/14-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">11</a>
                            <a href="/blog/15-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">12</a>
                            <a href="/blog/17-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">13</a>
                            <a href="/blog/18-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">14</a>
                            <a href="/blog/19-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">15</a>

                            <a href="/blog/20-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">16</a>

                            <a href="/blog/21-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">17</a>
                            <a href="/blog/22-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">18</a>
                            <a href="/blog/23-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">19</a>
                            <a href="/blog/24-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">20</a>
                            <a href="/blog/25-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">21</a>
                            <a href="/blog/26-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">22</a>
                            <a href="/blog/28-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">23</a>
                            <a href="/blog/29-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">24</a>
                            <a href="/blog/30-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">25</a>
                            <a href="/blog/31-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">26</a>
                            <a href="/blog/32-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">27</a>
                            <a href="/blog/33-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">28</a>
                            <a href="/blog/35-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">29</a>
                            <a href="/blog/36-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">30</a>
                            <a href="/blog/37-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">31</a>
                            <a href="/blog/128708-2" className="px-4 py-2 border rounded-lg hover:bg-gray-300">32</a>
                            <a href="/blog/california-best-golf-courses" className="px-4 py-2 border rounded-lg hover:bg-gray-300">33</a>
                            <a href="/blog/page-10" className="px-4 py-2 border rounded-lg hover:bg-gray-300">34</a>
                            <a href="/blog/page-12" className="px-4 py-2 border rounded-lg hover:bg-gray-300">35</a>
                            <a href="/blog/pictures" className="px-4 py-2 border rounded-lg hover:bg-gray-300">36</a>
                            <a href="/blog/romantic-dinners-in-san-diego" className="px-4 py-2 border rounded-lg hover:bg-gray-300">37</a>
                            <a href="/blog/romantic-dinners-in-san-diego" className="px-4 py-2 border rounded-lg hover:bg-gray-300">38</a>
                        </nav>
                    </div>



                </div>
            </main>
        </>
    )

}