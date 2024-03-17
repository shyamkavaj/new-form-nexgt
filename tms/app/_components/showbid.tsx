"use client"
import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function ShowBid() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(); // Default selected option

    const handleOptionChange = (option: any) => {
        setSelectedOption(option);
    };

    const [serviceProvide, setServicePro] = React.useState([
        {
            label: "Alicia Koch",
            value: "personal",
        },
        {
            label: "Acme Inc.",
            value: "acme-inc",
        },
        {
            label: "Monsters Inc.",
            value: "monsters",
        },
    ]);

    return (
        <div className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    @peduarte starred 3 repositories
                </h4>
                <Button variant="ghost" size="sm" className="w-9 p-0" onClick={() => setIsOpen(!isOpen)}>
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                </Button>
            </div>

            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="space-y-2"
            >
                {selectedOption ? (
                    <CollapsibleTrigger>
                    <div className="rounded-md border px-4 py-3 font-mono text-sm">
                        {selectedOption}
                    </div>
                </CollapsibleTrigger>
                ) : null}
                

                <CollapsibleContent>
                    {serviceProvide.map((person, index) => (
                        <div
                            key={index}
                            className="rounded-md border px-4 py-3 font-mono text-sm"
                            onClick={() => {
                                handleOptionChange(person.value);
                                setIsOpen(!isOpen);
                            }}
                        >
                            {person.label}
                        </div>
                    ))}
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}
