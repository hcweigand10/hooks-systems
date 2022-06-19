import React, { useState } from "react"
import AccordionItem from "./AccordionItem"

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null)
    
    const accordionItems = items.map((item) => {
        return <AccordionItem key={item.title} obj={item} setActiveIndex={setActiveIndex} activeIndex={activeIndex} index={items.indexOf(item)} />
    })

    return (
        <div className="ui segment">
            <h1>Accordion</h1>
            <div className="ui styled accordion">
                {accordionItems}
            </div>
        </div>
    )
}

export default Accordion