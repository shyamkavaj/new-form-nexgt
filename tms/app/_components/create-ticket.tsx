"use client";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import * as z from "zod";
import dynamic from "next/dynamic";
import { useState } from "react";
// const Editor = dynamic(() => import("./Editor.js"), { ssr: false });
// import Editor from "./Editor";

// Define your form schema using zod
const formSchema = z.object({
    title: z
        .string({
            required_error: "Title is required.",
        })
        // You can use zod's built-in validation as normal
        .min(2, {
            message: "Title must be at least 2 characters.",
        })
        .describe("Ticket Title"),

    // password: z
    //     .string({
    //         required_error: "Password is required.",
    //     })
    //     // Use the "describe" method to set the label
    //     // If no label is set, the field name will be used
    //     // and un-camel-cased
    //     .describe("Your secure password")
    //     .min(8, {
    //         message: "Password must be at least 8 characters.",
    //     }),

    // favouriteNumber: z.coerce // When using numbers and dates, you must use coerce
    //     .number({
    //         invalid_type_error: "Favourite number must be a number.",
    //     })
    //     .min(1, {
    //         message: "Favourite number must be at least 1.",
    //     })
    //     .max(10, {
    //         message: "Favourite number must be at most 10.",
    //     })
    //     .default(5) // You can set a default value
    //     .optional(),

    // acceptTerms: z
    //     .boolean()
    //     .describe("Accept terms and conditions.")
    //     .refine((value) => value, {
    //         message: "You must accept the terms and conditions.",
    //         path: ["acceptTerms"],
    //     }),

    // Date will show a date picker
    deadline: z.coerce.date(),

    // sendMeMails: z.boolean().optional(),

    // Enum will show a select
    category: z.enum(["Java", "React", "NextJs"]).optional(),

    // Create sub-objects to create accordion sections
    // address: z.object({
    //     street: z.string(),
    //     city: z.string(),
    //     zip: z.string(),
    // }),
});

function CreateTicket() {
    const [data, setData] = useState('');
    return (
        <>
            <AutoForm
                // Pass the schema to the form
                formSchema={formSchema}
                onSubmit={(data) => {
                    // Do something with the data
                    // Data is validated and coerced with zod automatically
                    console.log('enter data is :',data)
                  }}
                // You can add additional config for each field
                // to customize the UI
                fieldConfig={{
                    title: {
                        inputProps: {
                            type: "text",
                            placeholder: "Ticket Title",
                        },

                    },
                    // password: {
                    //     // Use "inputProps" to pass props to the input component
                    //     // You can use any props that the component accepts
                    //     inputProps: {
                    //         type: "password",
                    //         placeholder: "••••••••",
                    //     },
                    // },
                    // favouriteNumber: {
                    //     // Set a "description" that will be shown below the field
                    //     description: "Your favourite number between 1 and 10.",
                    // },
                    // acceptTerms: {
                    //     inputProps: {
                    //         required: true,
                    //     },
                    //     // You can use JSX in the description
                    //     description: (
                    //         <>
                    //             I agree to the{" "}
                    //             <a
                    //                 href="#"
                    //                 className="text-primary underline"
                    //                 onClick={(e) => {
                    //                     e.preventDefault();
                    //                     alert("Terms and conditions clicked.");
                    //                 }}
                    //             >
                    //                 terms and conditions
                    //             </a>
                    //             .
                    //         </>
                    //     ),
                    // },

                    // deadline: {
                        
                    //     description: "We need your birthday to send you a gift.",
                    // },

                    // sendMeMails: {
                    //     // Booleans use a checkbox by default, you can use a switch instead
                    //     fieldType: "switch",
                    // },
                }}
            // Optionally, define dependencies between fields
            //   dependencies={[
            // {
            // Hide "color" when "sendMeMails" is not checked as we only need to
            // know the color when we send mails
            //   sourceField: "sendMeMails",
            //   type: DependencyType.HIDES,
            //   targetField: "color",
            //   when: (sendMeMails) => !sendMeMails,
            // },
            //   ]}
            >
                {/* 
      Pass in a AutoFormSubmit or a button with type="submit".
      Alternatively, you can not pass a submit button
      to create auto-saving forms etc.
      */}
                <AutoFormSubmit>Create Ticket</AutoFormSubmit>

                {/*
      All children passed to the form will be rendered below the form.
      */}
                {/* <p className="text-gray-500 text-sm">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-primary underline">
                        terms and conditions
                    </a>
                    .
                </p> */}
            </AutoForm>
            {/* <Editor value={data} onChange={setData} holder="editorjs-container" /> */}
        </>

    );
}

export default CreateTicket;