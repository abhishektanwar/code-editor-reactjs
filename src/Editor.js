import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import AceEditor from "react-ace";
import SplitEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import {Controlled as ControlledEditor} from 'react-codemirror2'

const Editor = (props) => {
    const {language,displayName,value,onChange} = props;

    const handleChange = (editor,data,value) =>{
        onChange(value)
    }
    return (
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
            </div>
            <AceEditor
                mode={language}
                width='100%'
                theme="xcode"
                name={displayName}
                onChange={onChange}
                fontSize={14}
                showGutter={true}
                highlightActiveLine={true}
                setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 1,
                }}/>
            
        </div>
    )
}

export default Editor
