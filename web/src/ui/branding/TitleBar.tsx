export default function TitleBar() {
  return (
    <div data-testid="title-bar" className="font-black text-2xl md:text-4xl">
      <span className="underline decoration-4 decoration-yellow-500">
        <span className="text-yellow-700">I</span>klan{" "}
        <span className="text-green-700">R</span>a
      </span>
      y
      <span className="underline decoration-4 decoration-green-500">
        a <span className="text-red-700">L</span>a
      </span>
      g<span className="underline decoration-4 decoration-red-500">i.</span>
    </div>
  );
}
