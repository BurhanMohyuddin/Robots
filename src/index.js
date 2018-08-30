import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { Robot } from './Robot';
ReactDOM.render(
    <div>
        <Card id={Robot[0].id} name={Robot[0].name} email={Robot[0].email}/>
        <Card id={Robot[1].id} name={Robot[1].name} email={Robot[1].email}/>
        <Card id={Robot[2].id} name={Robot[2].name} email={Robot[2].email}/>
        <Card id={Robot[3].id} name={Robot[3].name} email={Robot[3].email}/>
        <Card id={Robot[4].id} name={Robot[4].name} email={Robot[4].email}/>
        <Card id={Robot[5].id} name={Robot[5].name} email={Robot[5].email}/>
        <Card id={Robot[6].id} name={Robot[6].name} email={Robot[6].email}/>
        <Card id={Robot[7].id} name={Robot[7].name} email={Robot[7].email}/>
        <Card id={Robot[8].id} name={Robot[8].name} email={Robot[8].email}/>
        <Card id={Robot[9].id} name={Robot[9].name} email={Robot[9].email}/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
