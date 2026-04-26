import React from "react";


export default function Page (){

    return(
        <>

            <div className="flex flex-col my-20 gap-5 container max-w-4xl px-4 leading-6 ">
                <h2 className="text-center text-4xl font-bold">OUR APPROACH TO NONDISCRIMINATION NOTICE</h2>
                <div>
                    <p className="dark:text-neutral-800 ">

                       1. PROPOSED COMPLIANCE <br/>
                       2. HOW TO FILE A GRIEVANCE ? <br/>
                       3. US DEP OF HEALTH AND HUMAN SERVICES <br/>

                    </p>
                    <p className={"font-bold mt-5 mb-3"}>
                        1.  PROPOSED ORDER
                    </p>
                    <p>Rosie Taxi Cab complies with applicable Federal Civil Rights laws and does not discriminate on the basis of race, color, national origin, age, disability, religion, or sex (including pregnancy, sexual orientation, and gender identity). Rosie Taxi Cab does not exclude people or treat them differently because of race, color, national origin, age, disability, religion, or sex.</p>
                    <p className={"font-bold mt-5 mb-3"}>
                        Rosie Taxi Cab:
                    </p>
                     <p>

                         <ul className="list-disc">
                             <li>Provides transportation services to people with disabilities to communicate effectively with us, such as:
                                 <ul className="list-disc ml-5">  {/* Added margin-left for indentation */}
                                     <li>Written information in other formats (large print, audio, accessible electronic formats, other formats)</li>
                                 </ul>
                             </li>
                             <li>Provides free-of-charge communication services by text/WhatsApp, or email to people whose primary language is not English.</li>
                         </ul>


                     </p>
                    <p className={"font-bold mt-5 mb-3"}>
                        2.  HOW TO FILE A GRIEVANCE ?
                    </p>
                    <p>
                        If you believe that Rosie Txi Cab has failed to provide these services or discriminated in another way on the basis of race, color, national origin, age, disability, or sex, you can file a grievance with the U.S. Department of Health and Human Services, Office for Civil Rights, electronically through the Office for <a className={"text-blue-800"}
                        href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf">Civil Rights Complaint Portal</a>, or by mail or phone at:
                    </p>
                    <p>
                        U.S. Department of Health and Human Services <br/>
                        200 Independence Avenue, SW <br/>
                        Room 509F, HHH Building <br/>
                        Washington, D.C. 20201 <br/>
                        <a href="tel:1-800-368-1019" className={"text-blue-800"}>1-800-368-1019</a>, <a href="tel:800-537-7697" className={"text-blue-800"}> 800-537-7697 </a> (TDD)
                    </p>
                    <p className={"font-bold mt-5 mb-3"}>
                        3.  US DEP OF HEALTH AND HUMAN SERVICES
                    </p>
                    <p>The United States Department of Health and Human Services is a cabinet-level executive branch department of the U.S. federal government created to protect the health of the U.S. people and providing essential human services. Its motto is “Improving the health, safety, and well-being of America”</p>
                </div>
            </div>

        </>
    )

}