import React, { useCallback } from 'react';
import {
  useNavigation,
  useRoute,
  StackActions,
  RouteProp
} from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import {
  Container,
  SummaryContainer,
  Box,
  BoxText,
  FinalResult,
  FinalResultText,
  RestartButton,
  RestartButtonText
} from './styles';

type RouteParamsProp = {
  Result: {
    total_questions: number;
		total_correct: number;
		total_answers: number;
  };
};

const Result: React.FC = () => {
  const route = useRoute<RouteProp<RouteParamsProp, 'Result'>>();
  const navigation = useNavigation();

  const navigateToLogin = useCallback(() => {
    navigation.dispatch(StackActions.replace('Quiz'));
	}, []);

	const { total_questions, total_correct, total_answers } = route.params;

	const score: number = (total_correct > 0)
		? Math.floor((total_correct * 100) / total_questions)
		: 0;


  return (
    <Container>
      <SummaryContainer>
        <Box>
          <BoxText>{total_answers}</BoxText>
          <BoxText small>Perguntas Respondidas</BoxText>
        </Box>
        <Box>
          <BoxText>{total_correct}</BoxText>
          <BoxText small>Perguntas corretas</BoxText>
        </Box>
        <Box last>
          <BoxText>{total_questions - total_correct}</BoxText>
          <BoxText small>Perguntas erradas</BoxText>
        </Box>
      </SummaryContainer>

      <FinalResult>
        <AnimatedCircularProgress
          size={350}
          width={40}
          fill={score}
          tintColor='#ff4800'
          backgroundColor='#3d5875'
          duration={1000}
        >
          {fill => <FinalResultText>{score}%</FinalResultText>}
        </AnimatedCircularProgress>
      </FinalResult>

      <RestartButton onPress={navigateToLogin}>
        <RestartButtonText>Reiniciar</RestartButtonText>
      </RestartButton>
    </Container>
  );
};

export default Result;
