import React, { useState } from 'react';



function Ripeness() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

 const classifyImage = () => {
    fetch(`http://localhost:3333/ripe/image/classify?url=${encodeURIComponent(url)}`, {mode:'cors'})
      .then(response => response.json()).then(data=> {
        
        setResult(data.classification)
      })    
      .catch(error => console.error(error));
  };

  const handleUrlChange = event => {
    setUrl(event.target.value);
  };

  return (
    <div>
      <label>
        URL:
        <input type="text" value={url} onChange={handleUrlChange} />
      </label>
      <button onClick={classifyImage}>Classify</button>
      {result && (
        <div>
          <p>{`Classification result: ${result}`}</p>
           <img src={url} alt="Classified image" height="300" width="300" />
        </div>
      )}
    </div>
  );
}

export default Ripeness;
