// @ts-ignore
import React, {useCallback} from "react";
import styled from "styled-components/native";

export const ShowInfoDetail = React.memo(({active, showModal, title, imageAction, imageNone, setType, keyName}) => {
    const onShowDetails = useCallback(() => {
        setType([keyName])
        showModal()
    }, [])
    return (
        <>
            {
                active ?
                    <>
                        <ImageAction onPress={onShowDetails}>
                            <SImage source={imageAction}/>
                        </ImageAction>
                    </> :
                    <>
                        <ImageActionNone>
                            <SImage source={imageNone}/>
                        </ImageActionNone>
                    </>
            }
            <TextAction active={active}>{title}</TextAction>
        </>
    )
})
const ImageAction = styled.TouchableOpacity`
  background-color: #f2a54a;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
const SImage = styled.Image`
`
const TextAction = styled.Text<{ active: boolean }>`
  font-size: 11px;
  color: ${p => p.active ? '#f3a54a' : "#bdbdbd"};
  line-height: 22px;
  margin-top: 4px;
  letter-spacing: -0.41px;
`;
const ImageActionNone = styled.View`
  background-color: #fff;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: #bdbdbd;
`;
