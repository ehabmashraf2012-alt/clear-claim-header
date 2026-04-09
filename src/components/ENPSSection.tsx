import teamImage from "@/assets/idr-team.webp";

const ENPSSection = () => {
  return (
    <section className="overflow-hidden px-6 md:px-16 lg:px-24 py-8">
      <img
        src={teamImage}
        alt="IDR Law team"
        className="w-full h-auto block rounded-xl"
        loading="lazy"
      />
    </section>
  );
};

export default ENPSSection;
