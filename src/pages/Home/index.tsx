import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, StartButton, StartButtonText } from './styles';
import bgImage from '../../assets/LaunchScreen.jpg';

const Home: React.FC = () => {
	const navigation = useNavigation();

	return (
		<Container source={bgImage}>
			<StartButton onPress={() => navigation.navigate('Quiz')}>
				<StartButtonText>Começar</StartButtonText>
			</StartButton>
		</Container>
	);
};

export default Home;
