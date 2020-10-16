import axios from '@/utils/axios';
import { URLS } from '@/const';
export const fetchExam = async (id) => {
  const { data } = await axios.get(`solve/${id}`);

  return data;
};

export const parseQuestions = (questions) =>
  questions.map((question) => ({
    correct: JSON.parse(question.answer),
    answer: [],
    img: `${URLS.BASE_URL}/img/${question.img}`,
    type: Number(question.type),
  }));

export const gradeExam = (questions) => {
  let corrects = 0;

  const gradedQuestions = questions.map((question) => {
    const { correct, answer } = question;
    correct.sort();
    answer.sort();

    let wrongFlag = false;
    correct.forEach((correctAnswer, idx) => {
      if (correctAnswer !== answer[idx]) wrongFlag = true;
    });

    if (!wrongFlag) corrects++;
    return {
      isCorrected: !wrongFlag,
      correct,
      answer,
      type: question.type,
    };
  });

  return {
    corrects,
    incorrects: questions.length - corrects,
    questions: gradedQuestions,
  };
};
