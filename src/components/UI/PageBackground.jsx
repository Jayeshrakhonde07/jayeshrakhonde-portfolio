export default function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg-page"
    >
      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 h-88 md:h[30rem] w-56 md:w-md  rounded-full bg-bright-accent/25 blur-[350px] md:blur-[210px]" />
      <div className="absolute top-1/3 -right-40 h-72 md:h[30rem] w-88 md:w-104 rounded-full bg-accent/20 blur-[350px] md:blur-[120px]" />
      <div className="absolute -bottom-40 left-1/3 h-92 md:h[28rem]  w-88 md:w-104 rounded-full bg-card-border/40 blur-[350px] md:blur-[120px]" />
      

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, color-mix(in srgb, var(--color-bg-page) 90%, transparent) 100%)",
        }}
      />
    </div>
  );
}