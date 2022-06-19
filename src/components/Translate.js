import React, {useState} from "react"
import Dropdown from "./Dropdown"

const languages = [
    {
      label: "Afrikaans",
      value: "af"
    },
    {
      label: "Arabic",
      value: "ar"
    },
    {
      label: "Hindi",
      value: "hi"
    },
  ]

const Translate = () => {
    const [language, setLanguage] = useState("ar")

    return (
        <div>
            <h3>Translate</h3>
            <Dropdown options={languages} selection={language} onSelectionChange={setLanguage}/>
        </div>
    )
}

export default Translate