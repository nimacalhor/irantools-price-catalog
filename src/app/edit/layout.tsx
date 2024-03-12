
type layoutProps = { children: React.ReactNode };

function layout({ children }: layoutProps) {
  return (
    <>
      <section className="mr-auto">{children}</section>
    </>
  );
}

export default layout;
