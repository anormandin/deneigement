import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Grid, Container } from 'semantic-ui-react'
import Lightstatus from './components/Lightstatus/Lightstatus';



function App() {



  return (
    <div className="App">
      <Container text style={{minWidth:'360px'}}>
        <div className="cardGroup">
          <Lightstatus StreetName='Fraser' No='0641' Url='https://carte.ville.quebec.qc.ca/ArcGIS/rest/services/CI/OperationDeneigement/MapServer/1/query?f=json&where=&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A248871.5%2C%22ymin%22%3A5184854.5%2C%22xmax%22%3A248896.5%2C%22ymax%22%3A5184879.5%2C%22spatialReference%22%3A%7B%22wkid%22%3A32187%7D%7D&geometryType=esriGeometryEnvelope&inSR=32187&outFields=STATION_NO%2CSTATUT%2CDEBUT%2CFIN%2CDateMiseJour%2CSTATIONNEMENT&outSR=32187' />
          <Lightstatus StreetName='12e Rue'  No='0066' Url='https://carte.ville.quebec.qc.ca/ArcGIS/rest/services/CI/OperationDeneigement/MapServer/1/query?f=json&where=&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A248850%2C%22ymin%22%3A5187731%2C%22xmax%22%3A248890%2C%22ymax%22%3A5187771%2C%22spatialReference%22%3A%7B%22wkid%22%3A32187%7D%7D&geometryType=esriGeometryEnvelope&inSR=32187&outFields=STATION_NO%2CSTATUT%2CDEBUT%2CFIN%2CDateMiseJour%2CSTATIONNEMENT&outSR=32187'   />
        </div>
      </Container>
    </div>
  );
}

export default App;
