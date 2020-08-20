import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { ActivityIndicator, Animated, Dimensions, Easing } from 'react-native';

import api from '../../services/api';
import { shuffle } from '../../utils';

import {
  Container,
  TimerContainer,
  TimerLine,
  TimerDescription,
  TimerText,
  QuestionContainer,
  QuestionText,
  AnswerContainer,
  AnswerButton,
  AnswerButtonText
} from './styles';

interface Question {
  question: string;
  correctAnswer: string;
  options: Array<string>;
}

const { width: screenSize } = Dimensions.get('window');

const Quiz: React.FC = () => {
  const navigation = useNavigation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    {} as Question
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [currentTime] = useState<Animated.Value>(new Animated.Value(0));
  const [finishedTime, setFinishedTime] = useState(false);

  const animation = Animated.timing(currentTime, {
    toValue: screenSize * -1,
    duration: 1000 * 60, // 1 minuto
    easing: Easing.linear,
    useNativeDriver: false
  });

  const goToResult = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Result',
            params: {
              total_questions: questions.length,
              total_answers: totalAnswers,
              total_correct: totalCorrectAnswers
            }
          }
        ]
      })
    );
  }, [questions, totalAnswers, totalCorrectAnswers, navigation]);

  const registerAnswer = useCallback(
    (option: string) => {
      const indexQuestion =
        questions.findIndex(
          ({ question }) => question === currentQuestion.question
        ) + 1;

      setTotalAnswers(prevValue => prevValue + 1);

      if (currentQuestion.correctAnswer === option) {
        setTotalCorrectAnswers(prevValue => prevValue + 1);
      }

      if (indexQuestion >= questions.length) {
        goToResult();
      } else {
        setCurrentQuestion(questions[indexQuestion]);
      }
    },
    [currentQuestion]
  );

  useEffect(() => {
    async function getQuestions() {
      const response = await api.get<Array<Question>>('/questions');
      setQuestions(shuffle(response.data));
      setCurrentQuestion(response.data[0]);
      setLoading(false);

      animation.start(() => {
        setFinishedTime(true);
      });
    }

    getQuestions();
  }, []);

  useEffect(() => {
    if (finishedTime) {
      if (totalAnswers === 0 || totalAnswers !== questions.length) {
        goToResult();
      }
    }
  }, [finishedTime]);

  return (
    <Container loading={loading}>
      {loading ? (
        <ActivityIndicator size='large' color='#ffd76b' />
      ) : (
        <>
          <TimerContainer>
            <TimerLine style={{ transform: [{ translateX: currentTime }] }} />
            <TimerDescription>
              <Icon name='clock' size={18} color='#ffd76b' />
              <TimerText>Tempo Restante</TimerText>
            </TimerDescription>
          </TimerContainer>
          <QuestionContainer>
            <QuestionText>{currentQuestion.question}</QuestionText>
          </QuestionContainer>
          <AnswerContainer>
            {currentQuestion.options.map(option => (
              <AnswerButton key={option} onPress={() => registerAnswer(option)}>
                <AnswerButtonText>{option}</AnswerButtonText>
              </AnswerButton>
            ))}
          </AnswerContainer>
        </>
      )}
    </Container>
  );
};

export default Quiz;
