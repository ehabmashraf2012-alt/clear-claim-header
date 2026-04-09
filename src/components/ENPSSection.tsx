import teamImage from "@/assets/idr-team.webp";

const ENPSSection = () => {
  return (
    <section className="overflow-hidden">
      <img
        src={teamImage}
        alt="IDR Law team"
        className="w-full h-auto block"
        loading="lazy"
      />
    </section>
  );
};

export default ENPSSection;
