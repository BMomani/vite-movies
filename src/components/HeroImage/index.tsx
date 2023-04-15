import React from 'react';
import { Link } from 'react-router-dom';

import {Wrapper, Content, Text} from './HeroImage.styles'

type HeroImageProps = {
    image: string,
    title: string,
    text: string
}
// instead of having props as param, but the keys directly 
const HeroImage : React.FC<HeroImageProps> = ({image, title, text}) =>{
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
        );
}

export default  HeroImage;