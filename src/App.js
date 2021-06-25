import logo from './logo.svg';
import './App.css';
import AceEditor from "react-ace";
import SplitEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import Editor from './Editor';
import { useState,useEffect } from 'react';
function App() {
  const [html,setHtml] = useState('')
  const [css,setCss] = useState('')
  const [js,setJs] = useState('')
  const [srcDoc,setSrcDoc] = useState('')


  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`)
    },250)
    return () => {
      clearTimeout(timeout)
    }
  },[html,css,js])
  return (
    <div className="main-container">
      <div className="pane top-pane">
      
      <Editor 
      language="html" 
      displayName="HTML" 
      value={html} 
      onChange={setHtml} />
    
        <Editor 
          language="css" 
          displayName="CSS" 
          value={css} 
          onChange={setCss} 
        />
        <Editor 
          language="javascript" 
          displayName="JAVASCRIPT" 
          value={js} 
          onChange={setJs} 
        />
      </div>
      <div className="pane frame">
        <h2 className="output-heading">OUTPUT</h2>
        <div >
          <iframe 
            srcDoc={srcDoc}
            title="output" 
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
