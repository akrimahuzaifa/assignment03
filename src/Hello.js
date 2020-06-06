import React from 'react';
import './Hello.css';

function Hello({firstname}) {
return  <div className="bg">
          <h3>Below is content from Hello.js</h3>
          This para is from Hello.js name: <strong>{firstname}</strong>
          <h4>Group Members:</h4>
          <ol>
            <li>Akrima</li>
            <li>Hammad</li>
            <li>Irtiza</li>
            <li>Daniyal</li>
            <li>Humza</li>
          </ol>
          <h5>Skills</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
          JS expression code: {5+10}
        </div>
}
//Failed to complie if we forgot to close a tag



export default Hello;
