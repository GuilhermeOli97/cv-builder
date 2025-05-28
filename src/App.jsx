import { useRef, useState } from 'react'
import html2pdf from 'html2pdf.js';
import './App.scss'
import Personal from './components/Personal'
import Educational from './components/Educational'
import Experience from './components/Experience'

function App() {
  const [submited, setSubmited] = useState(false);
  const contentRef = useRef();

  const downloadCV = () => {
    const cv = contentRef.current;
    cv.classList.add('pdf-style');

    html2pdf()
      .from(cv)
      .save('cv.pdf')
      .then(() => {
        cv.classList.remove('pdf-style')
      });
  }
  return (
    <div className='container'>
      <h1 className="title">CV generator</h1>
      <form className="form" onSubmit={(e) => {
        e.preventDefault(); // impede recarregamento da página
        setSubmited(true);
      }}>
        <div ref={contentRef}>
          <Personal submited={submited} />
          <Educational submited={submited} />
          <Experience submited={submited} />
        </div>

        <div className="sb-btn">
          <button type="submit" disabled={submited} >submit</button>
          <button disabled={!submited} onClick={() => setSubmited(false)}>edit</button>
        </div>
      </form>
      <button type='button' onClick={downloadCV} disabled={!submited}> Download CV</button>
    </div>
  )
}

export default App
