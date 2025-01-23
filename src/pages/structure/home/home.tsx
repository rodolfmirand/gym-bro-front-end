import GroupHome from "../../../components/pages/home/group-home/group_home";
import style from "./home.module.sass";

export default function Home() {
  return (
    <>
      <div className={style.container_home}>
        <div className={style.container_video}>
          <video
            src="https://assets.mixkit.co/videos/721/721-720.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className={style.grid}>
          <GroupHome />
        </div>
      </div>
    </>
  );
}
