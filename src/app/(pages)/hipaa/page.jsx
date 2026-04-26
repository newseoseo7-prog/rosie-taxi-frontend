import CitiesInfoSection from "../../cities/CitiesInfoSection";
import Badge from "../../../shared/Badge";
import React from "react";
import Features from "../../../components/features";


export default function Hippa (){

    return(
        <>
            <main className="nc-PageHome relative overflow-hidden">
            <div className="container relative space-y-24 my-24 lg:space-y-28 lg:mb-28">
            <CitiesInfoSection
                heading="What does hipaa mean for you ?"
                text={
                    <>
                        <p className={"dark:text-neutral-800"}>The Health Insurance Portability and Accountability Act of 1996 is a United States Act of Congress enacted by the 104th United States Congress and signed into law by President Bill Clinton on August 21, 1996. The Health Insurance Portability and Accountability Act consists of 5 Titles as follows : </p>

                    </>
                }
                image="/images/14_Services_Dental_Care-Footer.jpg"  // Replace with actual Malibu Pier image URL
                imagePosition="left"

            />

                <Features

                    box1={{
                        heading: "TITLE I ",
                        para: "Protects health insurance coverage for workers and their families who change or lose their jobs. It limits new health plans’ ability to deny coverage due to a pre-existing condition."
                    }}
                    box2={{
                        heading: "TITLE II",
                        para: "Prevents Health Care Fraud and Abuse; Medical Liability Reform; Administrative Simplification that requires the establishment of national standards for electronic health care transactions and national identifiers for providers, employers, and health insurance plans."
                    }}
                    box3={{
                        heading: "TITLE III",
                        para: "Guidelines for pre-tax medical spending accounts. It provides changes to health insurance law and deductions for medical insurance."
                    }}
                />
                <Features

                    box1={{
                        heading: "TITLE IV",
                        para: "Guidelines for group health plans. It provides modifications for health coverage."
                    }}
                    box2={{
                        heading: "TITLE V",
                        para: "Governs company-owned life insurance policies. Makes provisions for treating people without United States Citizenship and repealed financial institution rule to interest allocation rules."
                    }}
                    box3={{
                        heading: "FILE A HIPAA COMPLAINT",
                        para: "You may file a complaint with OCR if you feel your rights under the HIPAA Rules were violated."
                    }}





                />
            </div>
            </main>
        </>
    )

}