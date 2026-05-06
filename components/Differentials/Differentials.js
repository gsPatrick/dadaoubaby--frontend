import styles from './Differentials.module.css';

export default function Differentials() {
  const items = [
    {
      title: "Qualidade Premium",
      text: "Materiais selecionados para a pele sensível do seu bebê.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#48B5AA" fillOpacity="0.1" />
          <path d="M50 20L58.2 38.6L78 40.5L63 53.5L67.4 73L50 62.8L32.6 73L37 53.5L22 40.5L41.8 38.6L50 20Z" fill="#48B5AA" />
        </svg>
      )
    },
    {
      title: "Preço Justo",
      text: "O melhor custo-benefício para o enxoval completo.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#FFC021" fillOpacity="0.1" />
          <path d="M40 30H60V35H40V30ZM40 45H60V50H40V45ZM40 60H60V65H40V60ZM30 20V80H70V20H30ZM65 75H35V25H65V75Z" fill="#FFC021" />
          <circle cx="50" cy="50" r="15" stroke="#FFC021" strokeWidth="4" />
        </svg>
      )
    },
    {
      title: "Amor e Carinho",
      text: "Cada peça é embalada com afeto e dedicação.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#FF8742" fillOpacity="0.1" />
          <path d="M50 75L45.5 70.9C29.4 56.3 18.8 46.7 18.8 34.9C18.8 25.3 26.3 17.8 35.9 17.8C41.3 17.8 46.5 20.3 50 24.3C53.5 20.3 58.7 17.8 64.1 17.8C73.7 17.8 81.2 25.3 81.2 34.9C81.2 46.7 70.6 56.3 54.5 70.9L50 75Z" fill="#FF8742" />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.differentials}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.iconWrapper}>{item.icon}</div>
            <div className={styles.info}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
