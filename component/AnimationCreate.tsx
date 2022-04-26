// @ts-ignore
import React, {useMemo, useState} from "react";
import {Animated} from "react-native";
import styled from "styled-components/native";

export const AnimationCreate = ({itemContact, scrollY}) => {
    const scale = useMemo(() => {
        return scrollY.interpolate(
            {
                inputRange: [0, 100],
                outputRange: [1, 0.5],
                extrapolate: 'clamp'
            });
    }, [scrollY]);

    const height = scrollY.interpolate(
        {
            inputRange: [0, 100],
            outputRange: [170, 100],
            extrapolate: 'clamp'
        });
    const marginTop = scrollY.interpolate(
        {
            inputRange: [0, 100],
            outputRange: [10, -30],
            extrapolate: 'clamp'
        });

    return (
            <Animated.View style={{
                transform: [{scale: scale}], height,
                marginTop
            }}>
                <HeaderView>
                    {
                        itemContact?.image ?
                            <ImageAvatar
                                source={{uri: itemContact.image}}/>
                            :
                            <BoxImage>
                                <ImageAvatarNone
                                    source={require('../image/Mask.png')}/>
                            </BoxImage>
                    }
                    <SImageCamera
                        source={require('../image/1.png')}/>
                </HeaderView>
                <STextName>
                    {itemContact?.firstName} {itemContact?.lastName}
                </STextName>
                <STextCompany>{itemContact?.company}
                </STextCompany>
            </Animated.View>
    )
}
const ImageAvatar = styled(Animated.Image)`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;
const HeaderView = styled(Animated.View)`
  align-self: center;
`
const BoxImage = styled(Animated.View)`
  background-color: #e5e5e5;
  width: 120px;
  height: 120px;
  border-radius: 60px;
`
const ImageAvatarNone = styled(Animated.Image)`
  margin: 10px;
  width: 100px;
  height: 100px;
`
const SImageCamera = styled(Animated.Image)`
  position: absolute;
  right: 0;
  bottom: 0;
`
const STextName = styled(Animated.Text)`
  font-weight: bold;
  line-height: 22px;
  color: #333;
  align-self: center;
  margin-top: 10px;
`
const STextCompany = styled(Animated.Text)`
  line-height: 22px;
  color: #828282;
  align-self: center;
`