import {TouchableOpacity} from "react-native";
// @ts-ignore
import React, {useCallback} from "react";
import ImagePicker from 'react-native-image-crop-picker';
import styled from "styled-components/native";

const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 10px 10px;
`;

const AvatarImageAction = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const ImageAvatar = styled.View`
  background-color: #e5e5e5;
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;
const AvatarBackgroud = styled.Image`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 0;
  bottom: 0;
`;
export const CreateNewImage = React.memo(({paramAddContact, setParamAddNewContact}) => {
    const goToPickImage = useCallback(() => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            setParamAddNewContact({
                ...paramAddContact,
                image: image.path,
            });
        });
    }, [paramAddContact]);
    return (
        <TouchableOpacity onPress={goToPickImage}>
            {
                paramAddContact.image ? (
                    <AvatarImageAction source={{uri: paramAddContact.image}}/>
                ) : (
                    <ImageAvatar>
                        <AvatarImage source={require('../image/Mask.png')}/>
                    </ImageAvatar>
                )
            }
            <AvatarBackgroud source={require('../image/1.png')}/>
        </TouchableOpacity>
    )
})