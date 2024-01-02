const quotes = [
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote:
      "자신의 본성이 어떤것이든 그에 충실하라 . 자신이 가진 재능의 끈을 놓아 버리지 마라. 본성이 이끄는 대로 따르면 성공할것이다",
    author: "시드니 스미스",
  },
  {
    quote:
      " 모든것들에는 나름의 경이로움과 심지어 어둠과 침묵이 있고 , 내가 어떤 상태에 있더라도 나는 그속에서 만족하는 법을 배운다",
    author: "헬렌켈러",
  },
  {
    quote: "겨울이 오면 봄이 멀지 않으리",
    author: "셸리",
  },
  {
    quote:
      "그 어떤 끈이나 밧줄도 사랑으로 꼰 실만큼 억세게 끌어당기거나 붙잡아 매지는 못한다",
    author: "제임스 호웰",
  },
  {
    quote:
      "누군가에게 사랑의 감정을 품고 있을 때 그것을 숨기는 것과, 사랑의 감정이 전혀 없음에도 있는 것처럼 숨기는 것은 둘 다 반드시 탄로 나게 되어 있다",
    author: "라 로슈프코",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
    author: "괴테",
  },
  {
    quote:
      "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리 자신에 깜짝 놀랄 것이다",
    author: "에디슨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
