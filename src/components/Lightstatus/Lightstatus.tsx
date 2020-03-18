import React from 'react';
import { Card, CardContent, CardHeader, CardMeta } from 'semantic-ui-react';
import axios  from 'axios';
import './Lightstatus.scss';
import {ILightStatus} from  '../../models/lightstatus';

import FullOff from '../../images/full_off.png';
import LightOn from '../../images/light_on.png';
import { IVilleResponse } from '../../models/villeResponse';
import { resolve } from 'url';


class Lightstatus extends React.Component<ILightStatus, IVilleResponse> {
    

    constructor(props:ILightStatus) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get(this.props.Url)
        .then(res => {
            this.setState( res.data.features[0].attributes as IVilleResponse);
        });
    }

    render() {
        let maj = '';
        if (this.state.DateMiseJour) {
            maj = new Date(this.state.DateMiseJour).toLocaleTimeString();
        }

        let classes = 'Lightstatus';
        if (this.state.STATIONNEMENT === 'Interdit') {
            classes += ' forbidden';
        }
    
        return (
            <Card className={classes} fluid>
                <CardHeader>{this.props.StreetName}</CardHeader>
                <CardMeta></CardMeta>
            <CardContent>
                <div className="light_image">
                    <img className='img_back' src={FullOff} />
                    <img className='img_on' src={LightOn} />
                </div>
                <div>
                    Numéro du feu: {this.state.STATION_NO}
                </div>
                
                <div>Mise à jours: {maj}</div>
                
                <div>
                    Stationnement: {this.state.STATIONNEMENT}
                </div>

            </CardContent>
            </Card>
        );
    }
}

export default Lightstatus;
