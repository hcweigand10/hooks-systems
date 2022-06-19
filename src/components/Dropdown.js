import React, {useState, useEffect, useRef} from "react"
// import jquery from "jquery"

const Dropdown = ({options, selection, onSelectionChange}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef();

    const renderedOptions = options.map((option) => {
        if (option === selection) {
            return null
        } else {
            return (
                <div key={option.value} className="item" onClick={() => {
                    onSelectionChange(option)}
                }>
                    {option.label}
                </div>
            )
        }
    })

    useEffect(() => {
    
        document.body.addEventListener("click", (event) => {
            if (ref.current.contains(event.target)) {
                return
            }
            setOpen(false)
        },{capture: true});

        return () => {
            document.body.removeEventListener("click", (event) => {
                if (ref.current.contains(event.target)) {
                    return
                }
                setOpen(false)
            },{capture: true});
        }

    }, [])

    return (
        <div ref={ref} className={`ui selection dropdown ${open ? 'visible active': ""}`}
        onClick={()=>{setOpen(!open)}}>
            <input type="hidden" name="color"/>
            <i className="dropdown icon"></i>
            <div className="text">{selection.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
                {renderedOptions}
            </div>
        </div>
    )
}

export default Dropdown