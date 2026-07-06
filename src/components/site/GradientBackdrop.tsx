export function GradientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-violet/25 blur-[120px] animate-drift" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-magenta/20 blur-[130px] animate-drift [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-electric/20 blur-[130px] animate-drift [animation-delay:-8s]" />
      <div className="absolute inset-0 grid-pattern opacity-60" />
    </div>
  );
}
