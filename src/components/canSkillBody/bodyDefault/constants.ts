"use client";
const experiences = [
  {
    title: "Three.js",
    test_name: "WHY",
    icon: "/icons/threejs.png",
    iconBg: "#383E56",
    points: [
      "프로젝트를 진행하던중 유저들이 볼 수 있는 사진들이 작은 2d만 있다고 생각했습니다.",
      "ui/ux를 고려했을때 관광지의 사진을 3d로 볼 수 있다면 더 좋을거라고 생각했습니다.",
      "그래서 three.js를 활용했습니다.",
    ],
  },
  {
    title: "Board",
    test_name: "WHY",
    icon: "/icons/board.png",
    iconBg: "#E6DEDD",
    points: [
      "사용자들이 단순히 여행지를 추천받고 선택하는것 보다",
      "자신이 다녀온 여행지와 경로를 서로 공유하고 이야기를 나눌수 있다면",
      "좀 더 나은 사용자 경험을 제공할거라고 생각해서 quill 텍스트 에디터를 활용했습니다.",
    ],
  },
  {
    title: "OAuth",
    test_name: "WHY",
    icon: "/icons/oauth.jpg",
    iconBg: "#E6DEDD",
    points: [
      "일반적인 자체 로그인말고 유저가 간편하게 로그인 할 수 있도록 구현했습니다.",
      "프론트엔드에서 엑세스 토큰과 리프레쉬 토큰 모두 발급받아서 토큰을 백엔드로 보내주는 방식으로 구현했습니다.",
      "자체 로그인은 JWT를 활용해서 구현했습니다.",
    ],
  },
  {
    title: "Infinity Scroll",
    test_name: "WHY",
    icon: "/icons/infinity.png",
    iconBg: "#E6DEDD",
    points: [
      "스크롤을 하면 화면이 따라서 내려가기 보다",
      "현재 위치에서 데이터들만 아래로 내려가게 된다면",
      "유저들에게 좀 더 나은 경험을 줄거라고 생각했습니다.",
    ],
  },
  {
    title: "PDF출력",
    test_name: "WHY",
    icon: "/icons/pdf.png",
    iconBg: "#E6DEDD",
    points: [
      "유저가 현재 사이트를 공유할 수 있는 방법을 고민했습니다.",
      "단순히 url & 캡쳐 화면을 공유하기보다",
      "PDF파일로 좀 더 나은 화질로 공유할 수 있겠끔 구현했습니다.",
    ],
  },
  {
    title: "Kakao API",
    test_name: "WHY",
    icon: "/icons/kakao.png",
    iconBg: "#E6DEDD",
    points: [
      "카카오에서 활용할 수 있는 여러 API 중",
      "카카오맵과 카카오로그인 카톡공유 하기 기능을 활용 했습니다.",
    ],
  },
];

export { experiences };
