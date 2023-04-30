import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {AppColors} from '../../../../utils';

export const Image = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 10px;
`;

export const StyledFlatList = styled.FlatList`
  width: 353px;
  max-height: 350px;
  background-color: ${AppColors.white};
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 7px;
` as unknown as typeof FlatList;

export const ContentList = styled.View`
  position: relative;
  min-height: 350px;
  margin-bottom: 35px;
  margin-top: 20px;
`;

export const Box = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 350px;
  height: 15px;
  border-radius: 8px;
  background-color: ${AppColors.white};
`;

export const ContentItem = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 8px;
  height: 55px;
`;

export const ContentImage = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background-color: ${AppColors.grayLight};
  justify-content: center;
  align-items: center;
`;

export const ContentInfo = styled.View`
  padding-left: 11px;
  padding-top: 5px;
  padding-bottom: 8px;
  justify-content: space-between;
  width: 55%;
`;

export const ContentPoint = styled.View`
  flex-direction: row;
  padding-left: 8px;
  justify-content: space-between;
  align-items: center;
  width: 25%;
`;

export const ContentSvg = styled.View`
  padding-left: 5px;
  justify-content: center;
`;

export const ContentPointInfo = styled.View`
  width: 65px;
`;
