import { PostDto } from '../adapters/dto';

const mockPost: PostDto = {
  id: 53241,
  posterId: '53241',
  repliedTo: 123,
  mediaUrl: 'https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg',
  createdAt: 1621406917,
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus sit dolor quasi expedita ab molestias. Amet voluptatibus debitis earum tempore atque labore aperiam maxime laborum delectus totam minima fugit magnam doloribus quaerat repudiandae nam, aut numquam eos in dignissimos deleniti, ex tenetur consequatur dicta. Natus eligendi placeat optio iste maiores eius modi nisi magni pariatur illum fugiat perferendis exercitationem voluptatibus, soluta reprehenderit. Vel, expedita architecto eaque numquam dolorum veniam doloribus nulla dolores explicabo sapiente, magni fugiat amet ex eveniet, totam labore dolor laudantium autem placeat eligendi. Cumque ipsa provident nemo! Dicta adipisci molestias, est amet laborum rerum totam nesciunt?'
};

const replylist: PostDto[] = Array(16).fill(mockPost);

export default replylist;
