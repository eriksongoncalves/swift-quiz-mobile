import styled from 'styled-components/native';

interface BoxProps {
	last?: boolean;
}

interface BoxTextProps {
	small?: boolean;
}

export const Container = styled.View`
	flex: 1;
	padding: 16px;
`;

export const SummaryContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
`;

export const Box = styled.View<BoxProps>`
	flex: 1;
	background: #ff4800;
	padding: 20px;
	margin-right: ${(props) => (props.last ? 0 : 10)}px;
	border-radius: 4px;
	flex-wrap: wrap;
	margin-top: 30px;
`;

export const BoxText = styled.Text<BoxTextProps>`
	width: 100%;
	text-align: center;
	color: #fff;
	font-size: ${(props) => (props.small ? 13 : 30)}px;
	font-weight: ${(props) => (props.small ? 'normal' : 'bold')};
	margin-top: ${(props) => (props.small ? 5 : 0)}px;
`;

export const FinalResult = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const FinalResultText = styled.Text`
	font-size: 80px;
	font-weight: bold;
`;

export const RestartButton = styled.TouchableOpacity`
	margin-bottom: 50px;
	background: #ff4800;
	align-items: center;
	padding: 16px;
	border-radius: 5px;
`;

export const RestartButtonText = styled.Text`
	color: #fff;
	font-size: 20px;
	font-weight: bold;
`;
