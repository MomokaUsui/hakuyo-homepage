import type { NextPage } from "next";

const GoogleMap: NextPage = () => {
  return (
    <div className="sm:flex">
      <div className="mr-auto bg-white shadow-md p-10 sm:w-1/2">
        <p className="text-2xl pb-5 ">所在地・アクセス</p>
        <p className="py-3">
          神奈川県立柏陽高等学校 <br /> 住所:〒247-0004
          神奈川県横浜市栄区柏陽1番1号
          <br />
          JR根岸線・本郷台駅より徒歩5分
        </p>
      </div>
      <div className="ml-auto bg-white shadow-md p-10 sm:w-1/2">
        <p className="mr-auto text-2xl pb-5">Map</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.583737885845!2d139.55092605080384!3d35.365975480172224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018453eaa1b61a9%3A0x6c5f55df8f104af!2z56We5aWI5bed55yM56uL5p-P6Zm96auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1666011644015!5m2!1sja!2sjp"
          width="600"
          height="450"
          loading="lazy"
          className="w-full "
        ></iframe>
      </div>
    </div>
  );
};
export default GoogleMap;
