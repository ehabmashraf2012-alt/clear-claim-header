const AnnouncementBar = () => {
  return (
    <a href="#faqs" className="block bg-announcement text-announcement-foreground px-4 py-2 text-sm">
      <div className="container mx-auto">
        <p>
          Do you have a question on how the service works? We're here to help.{" "}
          <strong className="underline">See our FAQs.</strong>
        </p>
      </div>
    </a>
  );
};

export default AnnouncementBar;
