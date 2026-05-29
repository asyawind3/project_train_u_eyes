import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const content = {
  ru: {
    siteTitle: "Зарядка для глаз",
    navTitle: "Меню сайта",
    quickTitle: "Быстрые упражнения",
    footerAuthor: "Учебный проект",
    footerContacts: "Авторы: студенты 3 курса",
    footerEmail: "ourteam@sfedu.ru",
    formatLabel: "Формат",
    pages: {
      home: "Главная",
      exercises: "Упражнения для глаз",
      about: "О проекте",
      feedback: "Обратная связь",
      materials: "Полезные материалы",
    },
    home: {
      title: "Зарядка для глаз",
      intro:
        "Сайт помогает познакомиться с простыми упражнениями для снятия зрительного напряжения при работе за компьютером.",
      blocks: [
        {
          title: "Для чего нужен сайт",
          text: "Проект содержит краткие упражнения, которые можно выполнять во время перерывов в учёбе или работе.",
        },
        {
          title: "Как пользоваться сайтом",
          text: "Выберите раздел в левом меню. На странице упражнений можно открыть подробное описание и запустить таймер.",
        },
        {
          title: "Что доступно пользователю",
          text: "На сайте есть упражнения, информация о проекте, форма обратной связи и материалы для скачивания.",
        },
        {
          title: "Почему это работает",
          text: "Короткие перерывы помогают снизить нагрузку на глаза, расслабить глазные мышцы и переключить фокус зрения.",
        },
        {
          title: "Почему ваши глаза устают",
          text: "При долгой работе за экраном человек реже моргает, долго смотрит на одно расстояние и напрягает зрение.",
        },
        {
          title: "Гайд по рабочему месту",
          text: "Монитор лучше располагать на удобном расстоянии, следить за освещением и делать регулярные перерывы.",
        },
      ],
      button: "Перейти к упражнениям",
    },
    exercisesPage: {
      title: "Упражнения для глаз",
      intro:
        "Выберите упражнение, чтобы посмотреть подробное описание и рекомендации по выполнению.",
      more: "Подробнее",
      hide: "Скрыть",
      start: "Начать",
      duration: "Длительность",
      type: "Тип",
      goal: "Цель",
      steps: "Как выполнять",
      imageHint: "Нажмите на изображение, чтобы открыть его на весь экран",
    },
    exercises: [
      {
        id: "rule202020",
        title: "20-20-20 правило",
        image: "/images/20-20-20_pravilo_dlya_glaz.gif",
        short: "Короткий отдых для глаз при длительной работе за компьютером.",
        duration: "20 секунд",
        type: "Расслабление",
        timerSeconds: 20,
        goal: "Снизить напряжение глаз после работы с экраном.",
        steps: [
          "Отведите взгляд от монитора.",
          "Посмотрите на удалённый объект.",
          "Удерживайте взгляд примерно 20 секунд.",
        ],
      },
      {
        id: "blink",
        title: "Быстрое моргание",
        image: "/images/bystroe_morganie_animirovannaya.gif",
        short: "Упражнение помогает уменьшить ощущение сухости глаз.",
        duration: "15 секунд",
        type: "Увлажнение глаз",
        timerSeconds: 15,
        goal: "Помочь глазам расслабиться и восстановить естественное моргание.",
        steps: [
          "Сядьте удобно и расслабьте лицо.",
          "Быстро поморгайте в течение 10–15 секунд.",
          "Закройте глаза на несколько секунд.",
        ],
      },
      {
        id: "focus",
        title: "Фокус близко / далеко",
        image: "/images/fokus_blizko_daleko.gif",
        short: "Тренировка переключения фокуса зрения.",
        duration: "40 секунд",
        type: "Фокусировка",
        timerSeconds: 40,
        goal:
          "Потренировать способность глаз переключаться между близкими и дальними объектами.",
        steps: [
          "Посмотрите на предмет рядом с собой, например на палец или ручку.",
          "Затем переведите взгляд на удалённый объект.",
          "Повторите действие несколько раз.",
        ],
      },
      {
        id: "circles",
        title: "Круговые движения глазами",
        image: "/images/krugovye_dvizheniya_glazami.gif",
        short: "Простая разминка для глазных мышц.",
        duration: "30 секунд",
        type: "Разминка",
        timerSeconds: 30,
        goal: "Снять напряжение и выполнить лёгкую разминку глаз.",
        steps: [
          "Держите голову неподвижно.",
          "Медленно переведите взгляд по кругу в одну сторону.",
          "Затем повторите движение в другую сторону.",
        ],
      },
      {
        id: "eight",
        title: "Восьмёрка",
        image: "/images/vosmyorka_glaza_po_konturu.gif",
        short: "Упражнение на плавное движение глаз.",
        duration: "30 секунд",
        type: "Координация",
        timerSeconds: 30,
        goal: "Развить плавность движения глаз и снять усталость.",
        steps: [
          "Представьте перед собой горизонтальную восьмёрку.",
          "Медленно ведите взглядом по её контуру.",
          "Выполняйте движение спокойно, без резких рывков.",
        ],
      },
    ],
    about: {
      title: "О проекте",
      paragraphs: [
        "Сайт «Зарядка для глаз» разработан как учебный проект на React.",
        "Цель проекта — создать простой информационный сайт, который помогает пользователям узнать о базовых упражнениях для глаз.",
        "Проект не использует систему управления контентом. Страницы, тексты и материалы задаются внутри исходного кода.",
      ],
      tasksTitle: "Задачи проекта",
      tasks: [
        "создать многостраничную структуру без перезагрузки страницы;",
        "реализовать переключение языка RU / EN;",
        "добавить упражнения для глаз с подробным описанием;",
        "предоставить материалы для скачивания;",
        "оформить сайт с использованием семантических HTML-элементов.",
      ],
    },
    feedback: {
      title: "Обратная связь",
      intro: "Вы можете отправить сообщение авторам проекта.",
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      button: "Отправить",
      success: "Сообщение отправлено.",
    },
    materials: {
      title: "Полезные материалы",
      intro:
        "В этом разделе собраны материалы, которые можно скачать и использовать во время работы за компьютером.",
      download: "Скачать",
      items: [
        {
          title: "Памятка по зарядке для глаз",
          description:
            "Краткий файл с основными правилами выполнения упражнений.",
          file: "/materials/eye-guide.txt",
          format: "TXT",
        },
        {
          title: "Комплекс упражнений на 5 минут",
          description:
            "Небольшой комплекс упражнений, который можно выполнить во время перерыва.",
          file: "/materials/exercises-5-minutes.txt",
          format: "TXT",
        },
        {
          title: "Рекомендации при работе за компьютером",
          description:
            "Общие рекомендации по организации перерывов и снижению зрительной нагрузки.",
          file: "/materials/computer-work-tips.txt",
          format: "TXT",
        },
      ],
    },
    aside: {
      homeTitle: "Разделы сайта",
      homeItems: [
        "Главная — краткое описание проекта",
        "Упражнения — комплекс упражнений",
        "О проекте — информация о сайте",
        "Материалы — файлы для скачивания",
        "Обратная связь — контакты авторов",
      ],
      exerciseEmptyTitle: "Выберите упражнение",
      exerciseEmptyText:
        "После выбора упражнения здесь появится длительность, тип упражнения и кнопка запуска таймера.",
      currentExercise: "Текущее упражнение",
      timer: "Таймер",
      timerStart: "Начать таймер",
      timerStop: "Остановить",
      timerDone: "Готово",
      aboutTitle: "Паспорт проекта",
      aboutItems: [
        ["Название", "Зарядка для глаз"],
        ["Тип", "Учебный сайт"],
        ["Технологии", "React, HTML, CSS"],
        ["Количество страниц", "5"],
        ["Языки", "Русский / English"],
      ],
      contactsTitle: "Контакты",
      contacts: {
        authors: [
          ["Автор 1", "ФИО"],
          ["Автор 2", "ФИО"],
          ["Автор 3", "ФИО"],
          ["Автор 4", "ФИО"],
        ],
        emailLabel: "Email",
        phoneLabel: "Телефон",
        email: "ourteam@sfedu.ru",
        phone: "+777777777",
        socials: [
          {
            title: "ВКонтакте",
            label: "ВК",
            href: "#",
            icon: "/icons/vk.png",
          },
          {
            title: "MAX",
            label: "MAX",
            href: "#",
            icon: "/icons/max.png",
          },
          {
            title: "Telegram",
            label: "Telegram",
            href: "#",
            icon: "/icons/telegram.png",
          },
        ],
      },
      materialsTitle: "Как использовать материалы",
      materialsItems: [
        "Скачайте нужный файл.",
        "Ознакомьтесь с рекомендациями.",
        "Используйте материалы во время перерывов.",
      ],
    },
  },

  en: {
    siteTitle: "Eye Exercises",
    navTitle: "Site menu",
    quickTitle: "Quick exercises",
    footerAuthor: "Educational project",
    footerContacts: "Authors: 3rd-year students",
    footerEmail: "ourteam@sfedu.ru",
    formatLabel: "Format",
    pages: {
      home: "Home",
      exercises: "Eye exercises",
      about: "About",
      feedback: "Feedback",
      materials: "Useful materials",
    },
    home: {
      title: "Eye Exercises",
      intro:
        "This website introduces simple exercises that may help reduce eye strain during computer work.",
      blocks: [
        {
          title: "Purpose of the website",
          text: "The project contains short exercises that can be done during study or work breaks.",
        },
        {
          title: "How to use the website",
          text: "Choose a section from the left menu. On the exercises page, you can open details and start a timer.",
        },
        {
          title: "Available features",
          text:
            "The website includes exercises, project information, a feedback form and downloadable materials.",
        },
        {
          title: "Why it works",
          text:
            "Short breaks help reduce eye strain, relax the eye muscles and switch visual focus.",
        },
        {
          title: "Why your eyes get tired",
          text:
            "During long screen work, people blink less often, keep looking at one distance and strain their vision.",
        },
        {
          title: "Workplace guide",
          text:
            "It is useful to place the monitor at a comfortable distance, control lighting and take regular breaks.",
        },
      ],
      button: "Go to exercises",
    },
    exercisesPage: {
      title: "Eye exercises",
      intro: "Choose an exercise to view detailed instructions.",
      more: "More",
      hide: "Hide",
      start: "Start",
      duration: "Duration",
      type: "Type",
      goal: "Goal",
      steps: "Steps",
      imageHint: "Click the image to open it in full screen",
    },
    exercises: [
      {
        id: "rule202020",
        title: "20-20-20 rule",
        image: "/images/20-20-20_pravilo_dlya_glaz.gif",
        short: "A short rest for eyes during long computer work.",
        duration: "20 seconds",
        type: "Relaxation",
        timerSeconds: 20,
        goal: "Reduce eye strain after screen work.",
        steps: [
          "Look away from the monitor.",
          "Look at a distant object.",
          "Keep looking at it for about 20 seconds.",
        ],
      },
      {
        id: "blink",
        title: "Fast blinking",
        image: "/images/bystroe_morganie_animirovannaya.gif",
        short: "This exercise helps reduce eye dryness.",
        duration: "15 seconds",
        type: "Eye moisture",
        timerSeconds: 15,
        goal: "Help the eyes relax and restore natural blinking.",
        steps: [
          "Sit comfortably and relax your face.",
          "Blink quickly for 10–15 seconds.",
          "Close your eyes for a few seconds.",
        ],
      },
      {
        id: "focus",
        title: "Near / far focus",
        image: "/images/fokus_blizko_daleko.gif",
        short: "Training for switching visual focus.",
        duration: "40 seconds",
        type: "Focus",
        timerSeconds: 40,
        goal: "Train your eyes to switch between near and distant objects.",
        steps: [
          "Look at a nearby object, such as a finger or pen.",
          "Then look at a distant object.",
          "Repeat several times.",
        ],
      },
      {
        id: "circles",
        title: "Eye circles",
        image: "/images/krugovye_dvizheniya_glazami.gif",
        short: "A simple warm-up for eye muscles.",
        duration: "30 seconds",
        type: "Warm-up",
        timerSeconds: 30,
        goal: "Reduce tension and warm up the eye muscles.",
        steps: [
          "Keep your head still.",
          "Slowly move your eyes in a circle in one direction.",
          "Repeat the movement in the opposite direction.",
        ],
      },
      {
        id: "eight",
        title: "Figure eight",
        image: "/images/vosmyorka_glaza_po_konturu.gif",
        short: "An exercise for smooth eye movement.",
        duration: "30 seconds",
        type: "Coordination",
        timerSeconds: 30,
        goal: "Develop smooth eye movement and reduce tiredness.",
        steps: [
          "Imagine a horizontal figure eight in front of you.",
          "Slowly trace its shape with your eyes.",
          "Move calmly without sudden motions.",
        ],
      },
    ],
    about: {
      title: "About the project",
      paragraphs: [
        "The Eye Exercises website was developed as an educational React project.",
        "The goal of the project is to create a simple informational website about basic eye exercises.",
        "The project does not use a content management system. Pages, texts and materials are stored in the source code.",
      ],
      tasksTitle: "Project tasks",
      tasks: [
        "create a multi-page structure without page reloads;",
        "implement RU / EN language switching;",
        "add eye exercises with detailed descriptions;",
        "provide downloadable materials;",
        "build the website using semantic HTML elements.",
      ],
    },
    feedback: {
      title: "Feedback",
      intro: "You can send a message to the project authors.",
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send",
      success: "Message sent.",
    },
    materials: {
      title: "Useful materials",
      intro:
        "This section contains downloadable materials that can be used during computer work breaks.",
      download: "Download",
      items: [
        {
          title: "Eye exercise guide",
          description: "A short file with basic eye exercise rules.",
          file: "/materials/eye-guide.txt",
          format: "TXT",
        },
        {
          title: "Five-minute exercise set",
          description: "A small set of exercises for a short break.",
          file: "/materials/exercises-5-minutes.txt",
          format: "TXT",
        },
        {
          title: "Computer work recommendations",
          description:
            "General recommendations for breaks and reducing eye strain.",
          file: "/materials/computer-work-tips.txt",
          format: "TXT",
        },
      ],
    },
    aside: {
      homeTitle: "Website sections",
      homeItems: [
        "Home — short project description",
        "Exercises — eye exercise set",
        "About — project information",
        "Materials — downloadable files",
        "Feedback — author contacts",
      ],
      exerciseEmptyTitle: "Choose an exercise",
      exerciseEmptyText:
        "After choosing an exercise, its duration, type and timer button will appear here.",
      currentExercise: "Current exercise",
      timer: "Timer",
      timerStart: "Start timer",
      timerStop: "Stop",
      timerDone: "Done",
      aboutTitle: "Project profile",
      aboutItems: [
        ["Name", "Eye Exercises"],
        ["Type", "Educational website"],
        ["Technologies", "React, HTML, CSS"],
        ["Pages", "5"],
        ["Languages", "Russian / English"],
      ],
      contactsTitle: "Contacts",
      contacts: {
        authors: [
          ["Author 1", "Full name"],
          ["Author 2", "Full name"],
          ["Author 3", "Full name"],
          ["Author 4", "Full name"],
        ],
        emailLabel: "Email",
        phoneLabel: "Phone",
        email: "ourteam@sfedu.ru",
        phone: "+777777777",
        socials: [
          {
            title: "VK",
            label: "VK",
            href: "#",
            icon: "/icons/vk.png",
          },
          {
            title: "MAX",
            label: "MAX",
            href: "#",
            icon: "/icons/max.png",
          },
          {
            title: "Telegram",
            label: "Telegram",
            href: "#",
            icon: "/icons/telegram.png",
          },
        ],
      },
      materialsTitle: "How to use materials",
      materialsItems: [
        "Download the required file.",
        "Read the recommendations.",
        "Use the materials during breaks.",
      ],
    },
  },
};

const pageKeys = ["home", "exercises", "about", "feedback", "materials"];

function App() {
  const [language, setLanguage] = useState("ru");
  const [activePage, setActivePage] = useState("home");
  const [openedExerciseId, setOpenedExerciseId] = useState(null);
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const t = content[language];

  const selectedExercise = useMemo(() => {
    return t.exercises.find((exercise) => exercise.id === selectedExerciseId);
  }, [selectedExerciseId, t.exercises]);

  useEffect(() => {
    if (!timerActive) return;

    if (secondsLeft <= 0) {
      setTimerActive(false);
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((currentValue) => currentValue - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerActive, secondsLeft]);

  function openPage(pageKey) {
    setActivePage(pageKey);
    setFormSent(false);
  }

  function chooseExercise(exerciseId) {
    setActivePage("exercises");
    setSelectedExerciseId(exerciseId);
    setOpenedExerciseId(exerciseId);
    setSecondsLeft(0);
    setTimerActive(false);
  }

  function toggleExercise(exerciseId) {
    setSelectedExerciseId(exerciseId);
    setOpenedExerciseId((currentId) =>
      currentId === exerciseId ? null : exerciseId
    );
    setSecondsLeft(0);
    setTimerActive(false);
  }

  function startTimer(exercise) {
    setSelectedExerciseId(exercise.id);
    setSecondsLeft(exercise.timerSeconds);
    setTimerActive(true);
  }

  function stopTimer() {
    setTimerActive(false);
  }

  function handleFeedbackSubmit(event) {
    event.preventDefault();
    setFormSent(true);
  }

  function openFullscreenImage(exercise) {
    setFullscreenImage({
      src: `${process.env.PUBLIC_URL}${exercise.image}`,
      alt: exercise.title,
    });
  }

  function closeFullscreenImage() {
    setFullscreenImage(null);
  }

  function renderArticle() {
    if (activePage === "home") {
      return (
        <>
          <h2>{t.home.title}</h2>
          <p className="lead-text">{t.home.intro}</p>

          <div className="info-grid">
            {t.home.blocks.map((block) => (
              <div className="info-card" key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </div>
            ))}
          </div>

          <button className="primary-button" onClick={() => openPage("exercises")}>
            {t.home.button}
          </button>
        </>
      );
    }

    if (activePage === "exercises") {
      return (
        <>
          <h2>{t.exercisesPage.title}</h2>
          <p className="lead-text">{t.exercisesPage.intro}</p>

          <div className="exercise-list">
            {t.exercises.map((exercise) => {
              const isOpened = openedExerciseId === exercise.id;

              return (
                <div className="exercise-card" key={exercise.id}>
                  <div className="exercise-card-header">
                    <div>
                      <h3>{exercise.title}</h3>
                      <p>{exercise.short}</p>
                    </div>

                    <button
                      className="small-button"
                      onClick={() => toggleExercise(exercise.id)}
                    >
                      {isOpened ? t.exercisesPage.hide : t.exercisesPage.more}
                    </button>
                  </div>

                  <div className="exercise-meta">
                    <span>
                      {t.exercisesPage.duration}: {exercise.duration}
                    </span>
                    <span>
                      {t.exercisesPage.type}: {exercise.type}
                    </span>
                  </div>

                  {isOpened && (
                    <div className="exercise-details">
                      <div className="exercise-details-content">
                        <div className="exercise-details-text">
                          <h4>{t.exercisesPage.goal}</h4>
                          <p>{exercise.goal}</p>

                          <h4>{t.exercisesPage.steps}</h4>
                          <ol>
                            {exercise.steps.map((step) => (
                              <li key={step}>{step}</li>
                            ))}
                          </ol>

                          <button
                            className="primary-button"
                            onClick={() => startTimer(exercise)}
                          >
                            {t.exercisesPage.start}
                          </button>
                        </div>

                        <div className="exercise-gif-card">
                          <button
                            className="exercise-gif-button"
                            onClick={() => openFullscreenImage(exercise)}
                            title={t.exercisesPage.imageHint}
                          >
                            <img
                              className="exercise-gif"
                              src={`${process.env.PUBLIC_URL}${exercise.image}`}
                              alt={exercise.title}
                            />
                          </button>

                          <p className="image-hint">
                            {t.exercisesPage.imageHint}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      );
    }

    if (activePage === "about") {
      return (
        <>
          <h2>{t.about.title}</h2>

          {t.about.paragraphs.map((paragraph) => (
            <p className="content-paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}

          <h3>{t.about.tasksTitle}</h3>

          <ul className="content-list">
            {t.about.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </>
      );
    }

    if (activePage === "feedback") {
      return (
        <>
          <h2>{t.feedback.title}</h2>
          <p className="lead-text">{t.feedback.intro}</p>

          <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
            <label>
              {t.feedback.name}
              <input type="text" name="name" required />
            </label>

            <label>
              {t.feedback.email}
              <input type="email" name="email" required />
            </label>

            <label>
              {t.feedback.message}
              <textarea name="message" rows="5" required />
            </label>

            <button className="primary-button" type="submit">
              {t.feedback.button}
            </button>
          </form>

          {formSent && <p className="success-message">{t.feedback.success}</p>}
        </>
      );
    }

    if (activePage === "materials") {
      return (
        <>
          <h2>{t.materials.title}</h2>
          <p className="lead-text">{t.materials.intro}</p>

          <div className="material-list">
            {t.materials.items.map((material) => (
              <div className="material-card" key={material.title}>
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                <p className="material-format">
                  {t.formatLabel}: {material.format}
                </p>

                <a
                  className="download-link"
                  href={`${process.env.PUBLIC_URL}${material.file}`}
                  download
                >
                  {t.materials.download}
                </a>
              </div>
            ))}
          </div>
        </>
      );
    }

    return null;
  }

  function renderAside() {
    if (activePage === "home") {
      return (
        <>
          <h2>{t.aside.homeTitle}</h2>

          <ul className="aside-list">
            {t.aside.homeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      );
    }

    if (activePage === "exercises") {
      if (!selectedExercise) {
        return (
          <>
            <h2>{t.aside.exerciseEmptyTitle}</h2>
            <p>{t.aside.exerciseEmptyText}</p>
          </>
        );
      }

      return (
        <>
          <h2>{t.aside.currentExercise}</h2>

          <div className="selected-exercise-box">
            <h3>{selectedExercise.title}</h3>
            <p>{selectedExercise.short}</p>

            <p>
              <strong>{t.exercisesPage.duration}:</strong>{" "}
              {selectedExercise.duration}
            </p>

            <p>
              <strong>{t.exercisesPage.type}:</strong> {selectedExercise.type}
            </p>

            <div className="timer-box">
              <h3>{t.aside.timer}</h3>

              {secondsLeft > 0 ? (
                <p className="timer-value">{secondsLeft}</p>
              ) : (
                <p className="timer-value">{t.aside.timerDone}</p>
              )}

              {!timerActive ? (
                <button
                  className="primary-button"
                  onClick={() => startTimer(selectedExercise)}
                >
                  {t.aside.timerStart}
                </button>
              ) : (
                <button className="small-button" onClick={stopTimer}>
                  {t.aside.timerStop}
                </button>
              )}
            </div>
          </div>
        </>
      );
    }

    if (activePage === "about") {
      return (
        <>
          <h2>{t.aside.aboutTitle}</h2>

          <div className="project-passport">
            {t.aside.aboutItems.map(([label, value]) => (
              <p key={label}>
                <strong>{label}:</strong>
                <br />
                {value}
              </p>
            ))}
          </div>
        </>
      );
    }

    if (activePage === "feedback") {
      return (
        <>
          <h2>{t.aside.contactsTitle}</h2>

          <div className="project-passport">
            {t.aside.contacts.authors.map(([label, value]) => (
              <p key={label}>
                <strong>{label}:</strong>
                <br />
                {value}
              </p>
            ))}

            <p>
              <strong>{t.aside.contacts.emailLabel}:</strong>
              <br />
              {t.aside.contacts.email}
            </p>

            <p>
              <strong>{t.aside.contacts.phoneLabel}:</strong>
              <br />
              {t.aside.contacts.phone}
            </p>

            <div className="social-links">
              {t.aside.contacts.socials.map((social) => (
                <a
                  key={social.title}
                  className="social-link"
                  href={social.href}
                  title={social.title}
                  aria-label={social.title}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}${social.icon}`}
                    alt={social.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </>
      );
    }

    if (activePage === "materials") {
      return (
        <>
          <h2>{t.aside.materialsTitle}</h2>

          <ol className="aside-list">
            {t.aside.materialsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </>
      );
    }

    return null;
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="logo-block">
          <div className="logo">👁</div>
          <h1>{t.siteTitle}</h1>
        </div>

        <div className="language-switcher">
          <button
            className={language === "ru" ? "active-language" : ""}
            onClick={() => setLanguage("ru")}
          >
            RU
          </button>

          <button
            className={language === "en" ? "active-language" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
      </header>

      <main className="site-main">
        <section className="left-column">
          <h2>{t.navTitle}</h2>

          <nav className="main-nav">
            {pageKeys.map((pageKey) => (
              <button
                key={pageKey}
                className={activePage === pageKey ? "active-nav" : ""}
                onClick={() => openPage(pageKey)}
              >
                {t.pages[pageKey]}
              </button>
            ))}
          </nav>

          <h3>{t.quickTitle}</h3>

          <div className="quick-links">
            {t.exercises.map((exercise) => (
              <button key={exercise.id} onClick={() => chooseExercise(exercise.id)}>
                {exercise.title}
              </button>
            ))}
          </div>
        </section>

        <article className="center-column">{renderArticle()}</article>

        <aside className="right-column">{renderAside()}</aside>
      </main>

      <footer className="site-footer">
        <span>© 2026 {t.siteTitle}</span>
        <span>|</span>
        <span>{t.footerAuthor}</span>
        <span>|</span>
        <span>{t.footerContacts}</span>
        <span>|</span>
        <span>{t.footerEmail}</span>
      </footer>

      {fullscreenImage && (
        <div className="fullscreen-overlay">
          <button
            className="fullscreen-close"
            onClick={closeFullscreenImage}
            aria-label="Закрыть"
          >
            ×
          </button>

          <img
            className="fullscreen-image"
            src={fullscreenImage.src}
            alt={fullscreenImage.alt}
          />
        </div>
      )}
    </div>
  );
}

export default App;