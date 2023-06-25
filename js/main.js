const POST_NUMBER = 25;

const NAME = [
  'Артём',
  'Алёна',
  'Гриша',
  'Алина',
  'Андрей',
  'Лиза'
];

const DESCRIPTION = [
  'Отличные выходные',
  'Шикарный вечер',
  'Сохраню это здесь',
  'Прекрасная погода чтобы сделать это',
  'Это было великолепно',
  'Я доволен'
];

const COMMENTS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (min, max) =>{
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower +1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function(){
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(1, 1000);

const createComment = () => ({
  id: generateCommentId(),
  avatar: 'img/avatar-${getRandomInteger(1,6)}.svg',
  message: getRandomArrayElement(COMMENTS_MESSAGE),
  name: {getRandomArrayElement(NAME)
});

const createPost = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${generatePhotosId()}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTION)}`,
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const posts = Array.from({length: POST_NUMBER}, createPost);
