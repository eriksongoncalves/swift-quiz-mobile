import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Animated } from "react-native";


interface ContainerProps {
  loading: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background: #ff4800;

  ${props =>
    props.loading &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const TimerContainer = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  width: 100%;
  height: 40px;
  justify-content: center;
`;

export const TimerDescription = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

export const TimerLine = styled(Animated.View)`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #dd4108;
`

export const TimerText = styled.Text`
  color: #ffd76b;
  padding-left: 5px;
`;

export const QuestionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const QuestionText = styled.Text`
  color: #fff;
  font-size: 35px;
  text-align: center;
	width: 100%;
`;

export const AnswerContainer = styled.View`
  height: 300px;
  margin-bottom: 30px;
  padding: 16px;
`;

export const AnswerButton = styled.TouchableOpacity`
  background: #fff;
  margin-bottom: 4px;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px;
`;

export const AnswerButtonText = styled.Text`
  font-size: 16px;
	line-height: 22px;
	padding-left: 15px;
`;
