import React, {useState} from "react"

const AccordionItem = ({obj, setActiveIndex, activeIndex, index}) => {

    const [titleClass, setTitleClass] = useState("title")
    const [contentClass, setContentClass] = useState("content")

    const toggleActive = () => {
        console.log(index, activeIndex)
        if (activeIndex === index) {
            setActiveIndex(null)
            setTitleClass("title")
            setContentClass("content")
        } else {
            setActiveIndex(index)
            setTitleClass("title active")
            setContentClass("content active")
        }
    }
    
    return (
        <React.Fragment >
            <div className={titleClass} onClick={() => toggleActive()}>
                <i className="dropdown icon"></i>
                {obj.title}
            </div>
            <div className={contentClass}>
                <p>{obj.content}</p>
            </div>
        </React.Fragment>
    )
}

export default AccordionItem