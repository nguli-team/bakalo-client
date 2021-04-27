interface Board {
  name: string;
  shorthand: string;
  desc?: string;
}

const boardlist: Board[] = [
  { name: 'Politik', shorthand: 'pol' },
  { name: 'Teknologi', shorthand: 'teh' },
  { name: 'Otomotif', shorthand: 'oto' },
  { name: 'Sains', shorthand: 'ipa' },
  { name: 'Video Games', shorthand: 'gim' },
  { name: 'Musik', shorthand: 'mus' },
  { name: 'Olahraga', shorthand: 'ora' },
  { name: 'TV & Film', shorthand: 'tvf' },
  { name: 'Anime & Manga', shorthand: 'wib' },
  { name: 'Paranormal', shorthand: 'par' },
  { name: 'Bisnis & Keuangan', shorthand: 'biz' }
];

export default boardlist;
