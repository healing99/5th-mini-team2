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
