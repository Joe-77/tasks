export default function Banner() {
  return (
    <div className="relative">
      <img
        src="https://www.journal-theme.com/4/image/cache/catalog/journal3/people/audial-pleasure-2996x2000.jpg"
        alt="banner"
        loading="lazy"
        className="h-[80vh] w-full"
      />
      <div className="overlay absolute top-0 left-0 h-full w-full bg-black/50"></div>
    </div>
  );
}
