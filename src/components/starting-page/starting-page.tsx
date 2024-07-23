import classes from "./starting-page.module.css";

export interface StartingPageContentProps {}

export default function StartingPageContent({}: StartingPageContentProps) {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
}
