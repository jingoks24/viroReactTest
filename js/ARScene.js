import React, { Component } from 'react';
import {
    ViroARScene,
    Viro3DObject,
    ViroFlexView,
    ViroOrbitCamera,
    ViroImage,
    ViroNode,
    ViroSpotLight,
    ViroAmbientLight
} from 'react-viro';

export default class ARScene extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <ViroARScene>
            <ViroOrbitCamera position={[0, 0, -0]} focalPoint={[0, 0, -1.15]} active={true}/>
            <ViroSpotLight position={[0, -0.25, 0]}
                            color="#777777"
                            direction={[0, 0, -1]}
                            attenuationStartDistance={5}
                            attenuationEndDistance={10}
                            innerAngle={5}
                            outerAngle={20}/>

            <ViroAmbientLight color="#bdbbbb" />
        <Viro3DObject source={require('./res/idle.vrx')}
                resources={[
                    require('./res/Idle.fbm/vanguard_normal.png'),
                    require('./res/Idle.fbm/vanguard_diffuse.png'),
                    require('./res/Idle.fbm/vanguard_specular.png')
                ]}
                position={[0.0,-10, -10]}
                scale={[0.1, 0.1, 0.1]}
                type="VRX"
                animation={{name:'idle',
                            run:true,
                            loop:true,
                            delay:1000}}
        />
            <ViroNode>
                <ViroFlexView style={{flexDirection: 'row', padding: .1}} 
                width={5.0} height={5.0} 
                position={[-5.0, 0.0, -2.0]}
                rotation={[0, 45, 0]} >
                    <ViroImage source={require('./res/icon-small-4.jpg')} style={{flex: .5}} />
                    <ViroImage source={require('./res/icon-small-24.jpg')} style={{flex: .5}}/>
                </ViroFlexView>
            </ViroNode>
        </ViroARScene>
        )
    }
}


module.exports = ARScene