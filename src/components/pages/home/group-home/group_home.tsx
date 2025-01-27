import CardHome from "../card-home/card_home";

const GroupHome: React.FC = () => {
  const menu = [
    {
      link: "/record",
      text: "Seu treino",
      video: "https://assets.mixkit.co/videos/52106/52106-720.mp4",
    },
    {
      link: "/exercise",
      text: "Montar exercicio",
      video: "https://assets.mixkit.co/videos/606/606-720.mp4",
    },
    {
      link: "/diet",
      text: "Montar Dieta",
      video: "",
    },
  ];

  return (
    <>
      {menu.map((item) => (
        <CardHome
          key={item.link}
          link={item.link}
          text={item.text}
          url={item.video}
        />
      ))}
    </>
  );
};

export default GroupHome;
