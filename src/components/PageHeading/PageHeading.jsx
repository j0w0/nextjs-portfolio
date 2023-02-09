import styles from "./PageHeader.module.scss";

export default function PageHeading({ title, subtitle }) {
  return (
    <section className={styles["page-heading"]}>
      <div className="container">
        <h1 className={subtitle && `mb-6`}>{title}</h1>
        {subtitle && <h2 className="mb-8">{subtitle}</h2>}
      </div>
    </section>
  );
}
