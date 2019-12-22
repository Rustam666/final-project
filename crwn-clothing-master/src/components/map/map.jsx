import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
)
class Map extends Component {
    static defaultProps = {
        center: {
            lat: 40.348497,
            lng: 49.836059
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '65   vh', width: '100%' }}>
                <GoogleMapReact

                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={40.348497}
                        lng={49.836059}
                        text="JASMIN BOUTIQUE"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;