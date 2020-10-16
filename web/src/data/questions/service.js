import axios from '@/utils/axios';

export const addExam = async (info) => {
  const payload = {
    ...info,
    startTime: '2020.09.26 18:00:00',
  };

  const { data } = await axios.post('exam/create', payload);
  return data;
};

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post('image/upload', formData);
  return data;
};

export const uploadImages = async (questions) => {
  const imageRequests = [];
  for (let question of questions) {
    imageRequests.push(uploadImage(question.image));
  }

  const imageResponses = await Promise.all(imageRequests);
  return imageResponses.map((resp) => resp.code);
};

export const addQuestionsToExam = async (examPK, questions) => {
  const payload = {
    examPK,
    questions,
  };
  const { data } = await axios.post('question/create', payload);

  return data;
};

export const setQuestionsWithImage = (questions, images) =>
  questions.map((question, idx) => ({
    ...question,
    image: images[idx],
  }));
