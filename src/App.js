import React, { useEffect, useMemo, useRef, useState } from "react";
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

    energyTitle: "Заряд глаз сегодня",
    completedLabel: "Выполнено",
    resetProgress: "Сбросить прогресс",
    completionTitle: "Упражнение завершено",
    fullEnergyMessage: "🌟 Отлично! Сегодня вы полностью зарядили глаза.",

    soundTitle: "Звуки природы",
    soundIntro: "Включите спокойный фон во время упражнения.",
    soundOff: "Выключить звук",
    doneSound: "/sounds/done.mp3",
    sounds: [
      { id: "rain", title: "Дождь", icon: "🌧", file: "/sounds/rain.mp3" },
      { id: "fire", title: "Костёр", icon: "🔥", file: "/sounds/fire.mp3" },
      { id: "wind", title: "Ветер", icon: "🍃", file: "/sounds/wind.mp3" },
      { id: "sea", title: "Море", icon: "🌊", file: "/sounds/sea.mp3" },
    ],

    atmosphereTitle: "Атмосфера экрана",
    atmosphereIntro: "Включите лёгкий визуальный эффект для настроения.",
    atmosphereOff: "Выключить",
    atmosphereEffects: [
      { id: "rain", title: "Дождь", icon: "🌧" },
      { id: "snow", title: "Снег", icon: "❄" },
      { id: "leaves", title: "Листопад", icon: "🍂" },
    ],

    completionMessages: [
      "🌿 Отлично! Ваши глаза заслужили этот отдых.",
      "💧 Маленький перерыв — большая забота о себе.",
      "☁ Вы молодец! Ещё одно упражнение выполнено.",
      "🍃 Ваши глаза говорят спасибо.",
      "🌱 Спокойный отдых тоже важен для продуктивности.",
    ],

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
      button: "Перейти к упражнениям",
      testButton: "Перейти к тесту",
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
    },

    test: {
      title: "Как устали ваши глаза?",
      intro:
        "Ответьте на 10 простых вопросов, чтобы узнать примерный уровень усталости глаз и получить рекомендации.",
      startButton: "Начать тест",
      restartButton: "Пройти ещё раз",
      goToExercises: "Перейти к упражнениям",
      questionCounter: "Вопрос",
      resultTitle: "Результат теста",
      recommendationTitle: "Что можно сделать",
      questions: [
        {
          text: "Сколько времени вы сегодня провели за экраном?",
          answers: [
            { text: "Меньше 2 часов", score: 0 },
            { text: "От 2 до 5 часов", score: 1 },
            { text: "Больше 5 часов", score: 2 },
          ],
        },
        {
          text: "Чувствуете ли вы сухость в глазах?",
          answers: [
            { text: "Нет", score: 0 },
            { text: "Иногда", score: 1 },
            { text: "Часто", score: 2 },
          ],
        },
        {
          text: "Есть ли ощущение тяжести или напряжения в глазах?",
          answers: [
            { text: "Почти нет", score: 0 },
            { text: "Иногда", score: 1 },
            { text: "Да, часто", score: 2 },
          ],
        },
        {
          text: "Как часто вы делаете перерывы при работе за компьютером?",
          answers: [
            { text: "Регулярно", score: 0 },
            { text: "Иногда", score: 1 },
            { text: "Почти не делаю", score: 2 },
          ],
        },
        {
          text: "Появляется ли размытость зрения после экрана?",
          answers: [
            { text: "Нет", score: 0 },
            { text: "Иногда", score: 1 },
            { text: "Часто", score: 2 },
          ],
        },
        {
          text: "Вы замечаете, что редко моргаете за экраном?",
          answers: [
            { text: "Нет", score: 0 },
            { text: "Иногда", score: 1 },
            { text: "Да, часто", score: 2 },
          ],
        },
        {
          text: "Болит ли голова после долгой работы за компьютером?",
          answers: [
            { text: "Нет", score: 0 },
            { text: "Иногда", score: 1 },
            { text: "Часто", score: 2 },
          ],
        },
        {
          text: "Работаете ли вы при плохом освещении?",
          answers: [
            { text: "Нет", score: 0 },
            { text: "Иногда", score: 1 },
            { text: "Часто", score: 2 },
          ],
        },
        {
          text: "Экран находится слишком близко к глазам?",
          answers: [
            { text: "Нет", score: 0 },
            { text: "Иногда", score: 1 },
            { text: "Да", score: 2 },
          ],
        },
        {
          text: "Как вы оцениваете усталость глаз прямо сейчас?",
          answers: [
            { text: "Почти не устали", score: 0 },
            { text: "Немного устали", score: 1 },
            { text: "Сильно устали", score: 2 },
          ],
        },
      ],
      results: [
        {
          min: 0,
          max: 6,
          title: "Лёгкая усталость",
          animal: "🐱",
          note: "Котик считает, что небольшой перерыв уже поможет.",
          text:
            "Ваши глаза устали не сильно. Достаточно сделать короткий перерыв и выполнить одно-два простых упражнения.",
          recommendations: [
            "Выполните правило 20-20-20.",
            "Сделайте быстрое моргание.",
            "Проверьте освещение рабочего места.",
          ],
        },
        {
          min: 7,
          max: 13,
          title: "Средняя усталость",
          animal: "🐼",
          note: "Панда предлагает спокойно отдохнуть от экрана.",
          text:
            "Глазам нужен полноценный короткий отдых. Лучше отвлечься от экрана и выполнить несколько упражнений подряд.",
          recommendations: [
            "Выполните фокус близко / далеко.",
            "Добавьте круговые движения глазами.",
            "Сделайте перерыв на 3–5 минут.",
          ],
        },
        {
          min: 14,
          max: 20,
          title: "Сильная усталость",
          animal: "🐶",
          note: "Щенок советует отложить экран и дать глазам отдых.",
          text:
            "Глаза заметно перегружены. Рекомендуется сделать паузу, расслабиться и выполнить спокойный комплекс упражнений.",
          recommendations: [
            "Начните с правила 20-20-20.",
            "Сделайте быстрое моргание.",
            "Выполните восьмёрку и фокус близко / далеко.",
            "Если дискомфорт сохраняется, лучше обратиться к специалисту.",
          ],
        },
      ],
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
        "Здесь собраны документы, визуальные памятки, спокойное аудио из интернета и полезные ссылки, которые помогут заботиться о зрении во время работы за компьютером.",
      actions: {
        open: "Открыть",
        download: "Скачать",
        listen: "Слушать",
        go: "Перейти",
      },
      labels: {
        format: "Формат",
        type: "Тип",
      },
      sections: [
        {
          id: "documents",
          title: "Документы",
          description:
            "Материалы для чтения, печати и самостоятельной организации перерывов.",
          items: [
            {
              id: "eye-care-guide",
              kind: "document",
              icon: "📄",
              title: "Памятка по заботе о зрении",
              description:
                "Краткая памятка с правилами отдыха глаз, перерывами и простыми рекомендациями.",
              format: "PDF",
              type: "Документ",
              file: "/materials/eye-care-guide.pdf",
              open: true,
              download: true,
            },
            {
              id: "break-plan",
              kind: "document",
              icon: "📝",
              title: "Личный план перерывов",
              description:
                "Редактируемый шаблон, куда можно вписать свой режим работы, отдыха и самочувствие.",
              format: "DOCX",
              type: "Шаблон",
              file: "/materials/break-plan.docx",
              download: true,
            },
            {
              id: "workplace-guide",
              kind: "document",
              icon: "📘",
              title: "Гайд по рабочему месту",
              description:
                "Наглядные рекомендации по расстоянию до монитора, освещению, посадке и бликам.",
              format: "PDF",
              type: "Гайд",
              file: "/materials/workplace-guide.pdf",
              open: true,
              download: true,
            },
          ],
        },
        {
          id: "visual",
          title: "Визуальные материалы",
          description:
            "Картинки-памятки, которые удобно сохранить, открыть рядом с рабочим местом или распечатать.",
          items: [
            {
              id: "workplace-checklist",
              kind: "image",
              icon: "🖼",
              title: "Чек-лист рабочего места",
              description:
                "Короткая визуальная памятка: монитор, освещение, посадка, блики и регулярные перерывы.",
              format: "PNG",
              type: "Чек-лист",
              file: "/materials/workplace-checklist.png",
              open: true,
            },
            {
              id: "why-eyes-get-tired",
              kind: "image",
              icon: "💧",
              title: "Почему глаза устают",
              description:
                "Инфографика о том, как экран, редкое моргание и фокус на одном расстоянии влияют на глаза.",
              format: "PNG",
              type: "Инфографика",
              file: "/materials/why-eyes-get-tired.png",
              open: true,
            },
            {
              id: "eye-rest-poster",
              kind: "image",
              icon: "🌿",
              title: "Постер для рабочего места",
              description:
                "Мягкий постер-напоминание: сделать паузу, посмотреть вдаль, поморгать и расслабиться.",
              format: "PNG",
              type: "Постер",
              file: "/materials/eye-rest-poster.png",
              open: true,
              download: true,
            },
          ],
        },
        {
          id: "audio",
          title: "Спокойное аудио из интернета",
          description:
            "Подборки спокойных звуков, которые можно включить во время отдыха от экрана.",
          items: [
            {
              id: "relaxing-nature-library",
              kind: "audioLink",
              icon: "🎧",
              title: "Спокойные звуки природы",
              description:
                "Библиотека бесплатных природных звуков: дождь, вода, лесная атмосфера и другие спокойные эффекты.",
              format: "ONLINE AUDIO",
              type: "Аудио / библиотека",
              url: "https://mixkit.co/free-sound-effects/nature/",
            },
            {
              id: "calm-rain-sounds",
              kind: "audioLink",
              icon: "🌧",
              title: "Звуки дождя",
              description:
                "Подборка спокойных звуков дождя, которые можно использовать как фон для отдыха.",
              format: "ONLINE AUDIO",
              type: "Аудио / дождь",
              url: "https://pixabay.com/sound-effects/search/rain/",
            },
            {
              id: "ocean-relax-sounds",
              kind: "audioLink",
              icon: "🌊",
              title: "Шум моря и океана",
              description:
                "Подборка звуков волн и океана для расслабления во время короткого перерыва.",
              format: "ONLINE AUDIO",
              type: "Аудио / море",
              url: "https://pixabay.com/sound-effects/search/ocean/",
            },
            {
              id: "forest-relax-sounds",
              kind: "audioLink",
              icon: "🌲",
              title: "Лесная атмосфера",
              description:
                "Спокойные лесные звуки: птицы, природа, мягкая фоновая атмосфера.",
              format: "ONLINE AUDIO",
              type: "Аудио / лес",
              url: "https://pixabay.com/sound-effects/search/forest/",
            },
          ],
        },
        {
          id: "links",
          title: "Полезные ссылки",
          description:
            "Проверенные внешние ресурсы, статьи и страницы для самостоятельного изучения.",
          items: [
            {
              id: "eye-fatigue-link",
              kind: "link",
              icon: "🔗",
              title: "Статья о зрительной усталости",
              description:
                "Материал о том, как снизить усталость глаз при работе за компьютером.",
              format: "LINK",
              type: "Статья",
              url: "https://www.mayoclinic.org/diseases-conditions/eyestrain/diagnosis-treatment/drc-20372403",
            },
            {
              id: "ergonomics-link",
              kind: "link",
              icon: "🔗",
              title: "Рекомендации по положению монитора",
              description:
                "Полезный ресурс о расположении монитора, расстоянии до экрана и снижении нагрузки.",
              format: "LINK",
              type: "Ресурс",
              url: "https://www.osha.gov/etools/computer-workstations/components/monitors",
            },
            {
              id: "twenty-rule-link",
              kind: "link",
              icon: "🔗",
              title: "Правило 20-20-20",
              description:
                "Страница с объяснением цифрового зрительного напряжения и правила коротких перерывов.",
              format: "LINK",
              type: "Страница",
              url: "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome",
            },
          ],
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
          ["Автор 1", "Кристина Рудая"],
          ["Автор 2", "Анастасия Тихолоз"],
          ["Автор 3", "Алиса Овсянникова"],
          ["Автор 4", "Арина Клементьева"],
        ],
        emailLabel: "Email",
        phoneLabel: "Телефон",
        email: "ourteam@sfedu.ru",
        phone: "+777777777",
        socials: [
          { title: "ВКонтакте", href: "#", icon: "/icons/vk.png" },
          { title: "MAX", href: "#", icon: "/icons/max.png" },
          { title: "Telegram", href: "#", icon: "/icons/telegram.png" },
        ],
      },
      materialsTitle: "Как использовать материалы",
      materialsItems: [
        "Документы можно скачать и распечатать.",
        "Визуальные материалы удобно сохранить рядом с рабочим местом.",
        "Аудио открывается на внешних ресурсах с подборками спокойных звуков.",
        "Полезные ссылки подходят для самостоятельного изучения.",
      ],
      materialsFormatsTitle: "Форматы раздела",
      materialsFormats: [
        ["PDF", "читать и печатать"],
        ["DOCX", "редактировать"],
        ["PNG", "смотреть и сохранять"],
        ["ONLINE AUDIO", "слушать на внешнем сайте"],
        ["LINK", "внешний ресурс"],
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

    energyTitle: "Eye energy today",
    completedLabel: "Completed",
    resetProgress: "Reset progress",
    completionTitle: "Exercise completed",
    fullEnergyMessage: "🌟 Great! You fully recharged your eyes today.",

    soundTitle: "Nature sounds",
    soundIntro: "Turn on a calm background sound during the exercise.",
    soundOff: "Turn sound off",
    doneSound: "/sounds/done.mp3",
    sounds: [
      { id: "rain", title: "Rain", icon: "🌧", file: "/sounds/rain.mp3" },
      { id: "fire", title: "Fire", icon: "🔥", file: "/sounds/fire.mp3" },
      { id: "wind", title: "Wind", icon: "🍃", file: "/sounds/wind.mp3" },
      { id: "sea", title: "Sea", icon: "🌊", file: "/sounds/sea.mp3" },
    ],

    atmosphereTitle: "Screen atmosphere",
    atmosphereIntro: "Turn on a light visual effect for the mood.",
    atmosphereOff: "Turn off",
    atmosphereEffects: [
      { id: "rain", title: "Rain", icon: "🌧" },
      { id: "snow", title: "Snow", icon: "❄" },
      { id: "leaves", title: "Leaves", icon: "🍂" },
    ],

    completionMessages: [
      "🌿 Great! Your eyes deserved this rest.",
      "💧 A small break is a big act of care.",
      "☁ Well done! Another exercise is complete.",
      "🍃 Your eyes say thank you.",
      "🌱 Calm rest is important for productivity too.",
    ],

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
      button: "Go to exercises",
      testButton: "Go to test",
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
    },

    test: {
      title: "How tired are your eyes?",
      intro:
        "Answer 10 simple questions to estimate your eye fatigue level and get recommendations.",
      startButton: "Start test",
      restartButton: "Try again",
      goToExercises: "Go to exercises",
      questionCounter: "Question",
      resultTitle: "Test result",
      recommendationTitle: "What you can do",
      questions: [
        {
          text: "How much time have you spent in front of a screen today?",
          answers: [
            { text: "Less than 2 hours", score: 0 },
            { text: "2 to 5 hours", score: 1 },
            { text: "More than 5 hours", score: 2 },
          ],
        },
        {
          text: "Do your eyes feel dry?",
          answers: [
            { text: "No", score: 0 },
            { text: "Sometimes", score: 1 },
            { text: "Often", score: 2 },
          ],
        },
        {
          text: "Do you feel heaviness or tension in your eyes?",
          answers: [
            { text: "Almost never", score: 0 },
            { text: "Sometimes", score: 1 },
            { text: "Often", score: 2 },
          ],
        },
        {
          text: "How often do you take breaks while using a computer?",
          answers: [
            { text: "Regularly", score: 0 },
            { text: "Sometimes", score: 1 },
            { text: "Almost never", score: 2 },
          ],
        },
        {
          text: "Does your vision become blurry after screen work?",
          answers: [
            { text: "No", score: 0 },
            { text: "Sometimes", score: 1 },
            { text: "Often", score: 2 },
          ],
        },
        {
          text: "Do you notice that you blink less while using a screen?",
          answers: [
            { text: "No", score: 0 },
            { text: "Sometimes", score: 1 },
            { text: "Often", score: 2 },
          ],
        },
        {
          text: "Do you get headaches after long computer work?",
          answers: [
            { text: "No", score: 0 },
            { text: "Sometimes", score: 1 },
            { text: "Often", score: 2 },
          ],
        },
        {
          text: "Do you work in poor lighting?",
          answers: [
            { text: "No", score: 0 },
            { text: "Sometimes", score: 1 },
            { text: "Often", score: 2 },
          ],
        },
        {
          text: "Is your screen too close to your eyes?",
          answers: [
            { text: "No", score: 0 },
            { text: "Sometimes", score: 1 },
            { text: "Yes", score: 2 },
          ],
        },
        {
          text: "How tired do your eyes feel right now?",
          answers: [
            { text: "Almost not tired", score: 0 },
            { text: "A little tired", score: 1 },
            { text: "Very tired", score: 2 },
          ],
        },
      ],
      results: [
        {
          min: 0,
          max: 6,
          title: "Light fatigue",
          animal: "🐱",
          note: "The cat thinks a short break will help.",
          text:
            "Your eyes are only slightly tired. A short break and one or two simple exercises should be enough.",
          recommendations: [
            "Try the 20-20-20 rule.",
            "Do fast blinking.",
            "Check your workplace lighting.",
          ],
        },
        {
          min: 7,
          max: 13,
          title: "Moderate fatigue",
          animal: "🐼",
          note: "The panda suggests taking a calm screen break.",
          text:
            "Your eyes need a proper short rest. It is better to look away from the screen and do several exercises.",
          recommendations: [
            "Try near / far focus.",
            "Add eye circles.",
            "Take a 3–5 minute break.",
          ],
        },
        {
          min: 14,
          max: 20,
          title: "Strong fatigue",
          animal: "🐶",
          note: "The puppy suggests putting the screen away for a while.",
          text:
            "Your eyes seem overloaded. It is better to pause, relax and do a calm exercise set.",
          recommendations: [
            "Start with the 20-20-20 rule.",
            "Do fast blinking.",
            "Try figure eight and near / far focus.",
            "If discomfort continues, consider seeing a specialist.",
          ],
        },
      ],
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
        "This section contains documents, visual reminders, calm online audio and useful links that help take care of eye comfort during computer work.",
      actions: {
        open: "Open",
        download: "Download",
        listen: "Listen",
        go: "Go",
      },
      labels: {
        format: "Format",
        type: "Type",
      },
      sections: [
        {
          id: "documents",
          title: "Documents",
          description:
            "Materials for reading, printing and organizing regular screen breaks.",
          items: [
            {
              id: "eye-care-guide",
              kind: "document",
              icon: "📄",
              title: "Eye care guide",
              description:
                "A short guide with rules for eye rest, breaks and simple daily recommendations.",
              format: "PDF",
              type: "Document",
              file: "/materials/eye-care-guide.pdf",
              open: true,
              download: true,
            },
            {
              id: "break-plan",
              kind: "document",
              icon: "📝",
              title: "Personal break plan",
              description:
                "An editable template for planning work time, breaks and notes about eye comfort.",
              format: "DOCX",
              type: "Template",
              file: "/materials/break-plan.docx",
              download: true,
            },
            {
              id: "workplace-guide",
              kind: "document",
              icon: "📘",
              title: "Workplace guide",
              description:
                "Visual recommendations about monitor distance, lighting, posture and screen glare.",
              format: "PDF",
              type: "Guide",
              file: "/materials/workplace-guide.pdf",
              open: true,
              download: true,
            },
          ],
        },
        {
          id: "visual",
          title: "Visual materials",
          description:
            "Image reminders that can be saved, opened near the workplace or printed.",
          items: [
            {
              id: "workplace-checklist",
              kind: "image",
              icon: "🖼",
              title: "Workplace checklist",
              description:
                "A quick visual reminder about monitor position, lighting, posture, glare and regular breaks.",
              format: "PNG",
              type: "Checklist",
              file: "/materials/workplace-checklist.png",
              open: true,
            },
            {
              id: "why-eyes-get-tired",
              kind: "image",
              icon: "💧",
              title: "Why eyes get tired",
              description:
                "An infographic about screen work, reduced blinking and long focus at one distance.",
              format: "PNG",
              type: "Infographic",
              file: "/materials/why-eyes-get-tired.png",
              open: true,
            },
            {
              id: "eye-rest-poster",
              kind: "image",
              icon: "🌿",
              title: "Workplace rest poster",
              description:
                "A soft reminder poster: pause, look into the distance, blink and relax.",
              format: "PNG",
              type: "Poster",
              file: "/materials/eye-rest-poster.png",
              open: true,
              download: true,
            },
          ],
        },
        {
          id: "audio",
          title: "Calm audio from the internet",
          description:
            "Collections of calm sounds that can be played during a short screen break.",
          items: [
            {
              id: "relaxing-nature-library",
              kind: "audioLink",
              icon: "🎧",
              title: "Calm nature sounds",
              description:
                "A library of free nature sounds: rain, water, forest atmosphere and other calm effects.",
              format: "ONLINE AUDIO",
              type: "Audio / library",
              url: "https://mixkit.co/free-sound-effects/nature/",
            },
            {
              id: "calm-rain-sounds",
              kind: "audioLink",
              icon: "🌧",
              title: "Rain sounds",
              description:
                "A collection of calm rain sounds that can be used as a background for rest.",
              format: "ONLINE AUDIO",
              type: "Audio / rain",
              url: "https://pixabay.com/sound-effects/search/rain/",
            },
            {
              id: "ocean-relax-sounds",
              kind: "audioLink",
              icon: "🌊",
              title: "Sea and ocean sounds",
              description:
                "A collection of wave and ocean sounds for relaxation during a short break.",
              format: "ONLINE AUDIO",
              type: "Audio / sea",
              url: "https://pixabay.com/sound-effects/search/ocean/",
            },
            {
              id: "forest-relax-sounds",
              kind: "audioLink",
              icon: "🌲",
              title: "Forest atmosphere",
              description:
                "Calm forest sounds: birds, nature and soft background atmosphere.",
              format: "ONLINE AUDIO",
              type: "Audio / forest",
              url: "https://pixabay.com/sound-effects/search/forest/",
            },
          ],
        },
        {
          id: "links",
          title: "Useful links",
          description:
            "Verified external resources, articles and pages for independent study.",
          items: [
            {
              id: "eye-fatigue-link",
              kind: "link",
              icon: "🔗",
              title: "Article about eye fatigue",
              description:
                "A material about reducing eye strain during computer work.",
              format: "LINK",
              type: "Article",
              url: "https://www.mayoclinic.org/diseases-conditions/eyestrain/diagnosis-treatment/drc-20372403",
            },
            {
              id: "ergonomics-link",
              kind: "link",
              icon: "🔗",
              title: "Monitor position recommendations",
              description:
                "A useful resource about monitor placement, screen distance and reducing strain.",
              format: "LINK",
              type: "Resource",
              url: "https://www.osha.gov/etools/computer-workstations/components/monitors",
            },
            {
              id: "twenty-rule-link",
              kind: "link",
              icon: "🔗",
              title: "20-20-20 rule",
              description:
                "A page explaining digital eye strain and the idea of short regular breaks.",
              format: "LINK",
              type: "Page",
              url: "https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome",
            },
          ],
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
          ["Author 1", "Kristina Rudaya"],
          ["Author 2", "Anastasia Tikholoz"],
          ["Author 3", "Alice Ovsyannikova"],
          ["Author 4", "Arina Klementyeva"],
        ],
        emailLabel: "Email",
        phoneLabel: "Phone",
        email: "ourteam@sfedu.ru",
        phone: "+777777777",
        socials: [
          { title: "VK", href: "#", icon: "/icons/vk.png" },
          { title: "MAX", href: "#", icon: "/icons/max.png" },
          { title: "Telegram", href: "#", icon: "/icons/telegram.png" },
        ],
      },
      materialsTitle: "How to use materials",
      materialsItems: [
        "Documents can be downloaded and printed.",
        "Visual materials can be saved near the workplace.",
        "Audio opens on external websites with calm sound collections.",
        "Useful links are suitable for independent study.",
      ],
      materialsFormatsTitle: "Section formats",
      materialsFormats: [
        ["PDF", "read and print"],
        ["DOCX", "edit"],
        ["PNG", "view and save"],
        ["ONLINE AUDIO", "listen on an external site"],
        ["LINK", "external resource"],
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
  const [showHomeTest, setShowHomeTest] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testScore, setTestScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [completionMessage, setCompletionMessage] = useState("");
  const [activeSoundId, setActiveSoundId] = useState(null);
  const [atmosphereEffect, setAtmosphereEffect] = useState(null);

  const natureAudioRef = useRef(null);
  const doneAudioRef = useRef(null);

  const t = content[language];

  const selectedExercise = useMemo(() => {
    return t.exercises.find((exercise) => exercise.id === selectedExerciseId);
  }, [selectedExerciseId, t.exercises]);

  const completedCount = completedExercises.length;
  const energyPercent = Math.round((completedCount / t.exercises.length) * 100);

  useEffect(() => {
    if (!timerActive) return;

    if (secondsLeft <= 0) {
      setTimerActive(false);

      if (selectedExercise) {
        completeExercise(selectedExercise.id);
      }

      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((currentValue) => currentValue - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerActive, secondsLeft, selectedExercise]);

  useEffect(() => {
    const audio = natureAudioRef.current;

    if (!audio) return;

    if (!activeSoundId) {
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    const selectedSound = t.sounds.find((sound) => sound.id === activeSoundId);

    if (!selectedSound) return;

    audio.pause();
    audio.src = `${process.env.PUBLIC_URL}${selectedSound.file}`;
    audio.loop = true;
    audio.volume = 0.35;
    audio.currentTime = 0;

    audio.play().catch(() => {
      setActiveSoundId(null);
    });
  }, [activeSoundId, t.sounds]);

  function playDoneSound() {
    const audio = doneAudioRef.current;

    if (!audio) return;

    audio.volume = 0.55;
    audio.currentTime = 0;

    audio.play().catch(() => {});
  }

  function toggleNatureSound(soundId) {
    setActiveSoundId((currentSoundId) =>
      currentSoundId === soundId ? null : soundId
    );
  }

  function toggleAtmosphereEffect(effectId) {
    setAtmosphereEffect((currentEffect) =>
      currentEffect === effectId ? null : effectId
    );
  }

  function completeExercise(exerciseId) {
    setCompletedExercises((currentExercises) => {
      if (currentExercises.includes(exerciseId)) {
        return currentExercises;
      }

      return [...currentExercises, exerciseId];
    });

    const randomIndex = Math.floor(Math.random() * t.completionMessages.length);
    setCompletionMessage(t.completionMessages[randomIndex]);
    playDoneSound();
  }

  function resetProgress() {
    setCompletedExercises([]);
    setCompletionMessage("");
  }

  function resetHomeTest() {
    setShowHomeTest(false);
    setTestStarted(false);
    setTestFinished(false);
    setCurrentQuestionIndex(0);
    setTestScore(0);
  }

  function openPage(pageKey) {
    setActivePage(pageKey);
    setFormSent(false);
    resetHomeTest();
  }

  function chooseExercise(exerciseId) {
    setActivePage("exercises");
    setSelectedExerciseId(exerciseId);
    setOpenedExerciseId(exerciseId);
    setSecondsLeft(0);
    setTimerActive(false);
    resetHomeTest();
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
    setCompletionMessage("");
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

  function openHomeTest() {
    setActivePage("home");
    setShowHomeTest(true);
    setTestStarted(false);
    setTestFinished(false);
    setCurrentQuestionIndex(0);
    setTestScore(0);
  }

  function startTest() {
    setTestStarted(true);
    setTestFinished(false);
    setCurrentQuestionIndex(0);
    setTestScore(0);
  }

  function answerTestQuestion(score) {
    const nextScore = testScore + score;
    const isLastQuestion = currentQuestionIndex === t.test.questions.length - 1;

    setTestScore(nextScore);

    if (isLastQuestion) {
      setTestFinished(true);
    } else {
      setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
    }
  }

  function restartTest() {
    setTestStarted(false);
    setTestFinished(false);
    setCurrentQuestionIndex(0);
    setTestScore(0);
  }

  function getTestResult() {
    return t.test.results.find(
      (result) => testScore >= result.min && testScore <= result.max
    );
  }

  function renderDecorEffect() {
    if (!atmosphereEffect) return null;

    const effectSettings = {
      rain: {
        className: "rain-effect",
        symbol: "💧",
        count: 26,
      },
      snow: {
        className: "snow-effect",
        symbol: "❄",
        count: 24,
      },
      leaves: {
        className: "leaves-effect",
        symbol: "🍂",
        count: 18,
      },
    };

    const effect = effectSettings[atmosphereEffect];

    if (!effect) return null;

    return (
      <div className={`screen-effect ${effect.className}`} aria-hidden="true">
        {Array.from({ length: effect.count }).map((_, index) => {
          const shift = index % 2 === 0 ? 24 : -24;
          const shiftEnd = shift * -1;

          return (
            <span
              key={index}
              style={{
                "--left": `${(index * 37) % 100}%`,
                "--delay": `${(index % 8) * -0.7}s`,
                "--duration": `${6 + (index % 5)}s`,
                "--shift": `${shift}px`,
                "--shift-end": `${shiftEnd}px`,
              }}
            >
              {effect.symbol}
            </span>
          );
        })}
      </div>
    );
  }

  function renderSoundBlock() {
    return (
      <div className="sound-card">
        <h3>{t.soundTitle}</h3>
        <p className="sound-description">{t.soundIntro}</p>

        <div className="sound-buttons">
          {t.sounds.map((sound) => (
            <button
              key={sound.id}
              className={`sound-button ${
                activeSoundId === sound.id ? "sound-active" : ""
              }`}
              onClick={() => toggleNatureSound(sound.id)}
              type="button"
              title={sound.title}
            >
              <span>{sound.icon}</span>
              <small>{sound.title}</small>
            </button>
          ))}
        </div>

        {activeSoundId && (
          <button
            className="tiny-button sound-off-button"
            onClick={() => setActiveSoundId(null)}
            type="button"
          >
            {t.soundOff}
          </button>
        )}
      </div>
    );
  }

  function renderAtmosphereBlock() {
    return (
      <div className="atmosphere-card">
        <h3>{t.atmosphereTitle}</h3>
        <p className="atmosphere-description">{t.atmosphereIntro}</p>

        <div className="atmosphere-buttons">
          {t.atmosphereEffects.map((effect) => (
            <button
              key={effect.id}
              className={`atmosphere-button ${
                atmosphereEffect === effect.id ? "atmosphere-active" : ""
              }`}
              onClick={() => toggleAtmosphereEffect(effect.id)}
              type="button"
              title={effect.title}
            >
              <span>{effect.icon}</span>
              <small>{effect.title}</small>
            </button>
          ))}
        </div>

        {atmosphereEffect && (
          <button
            className="tiny-button atmosphere-off-button"
            onClick={() => setAtmosphereEffect(null)}
            type="button"
          >
            {t.atmosphereOff}
          </button>
        )}
      </div>
    );
  }

  function renderEnergyBlock() {
    return (
      <div className="energy-card">
        <div className="energy-card-header">
          <h3>{t.energyTitle}</h3>
          <span>{energyPercent}%</span>
        </div>

        <div className="battery">
          <div className="battery-body">
            <div
              className="battery-fill"
              style={{ width: `${energyPercent}%` }}
            />
          </div>
          <div className="battery-tip" />
        </div>

        <p className="energy-count">
          {t.completedLabel}: {completedCount} / {t.exercises.length}
        </p>

        {completedCount === t.exercises.length && (
          <p className="full-energy-message">{t.fullEnergyMessage}</p>
        )}

        {completedCount > 0 && (
          <button className="tiny-button" onClick={resetProgress}>
            {t.resetProgress}
          </button>
        )}
      </div>
    );
  }

  function renderMaterialActions(material) {
    const fileHref = material.file
      ? `${process.env.PUBLIC_URL}${material.file}`
      : null;

    return (
      <div className="material-actions">
        {material.open && fileHref && (
          <a
            className="material-action"
            href={fileHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.materials.actions.open}
          </a>
        )}

        {material.download && fileHref && (
          <a
            className="material-action material-action-secondary"
            href={fileHref}
            download
          >
            {t.materials.actions.download}
          </a>
        )}

        {material.kind === "audioLink" && (
          <a
            className="material-action"
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.materials.actions.listen}
          </a>
        )}

        {material.kind === "link" && (
          <a
            className="material-action"
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.materials.actions.go}
          </a>
        )}
      </div>
    );
  }

  function renderHomeTest() {
    const currentQuestion = t.test.questions[currentQuestionIndex];
    const result = getTestResult();
    const progress =
      ((currentQuestionIndex + 1) / t.test.questions.length) * 100;

    if (!testStarted) {
      return (
        <div className="test-shell">
          <div className="test-intro-card">
            <div className="test-cute-row">
              <span>🐱</span>
              <span>🐼</span>
              <span>🐶</span>
            </div>

            <h2>{t.test.title}</h2>
            <p className="lead-text">{t.test.intro}</p>

            <button className="primary-button" onClick={startTest}>
              {t.test.startButton}
            </button>
          </div>
        </div>
      );
    }

    if (testFinished && result) {
      return (
        <div className="test-shell">
          <h2>{t.test.resultTitle}</h2>

          <div className="test-result-card">
            <div className="test-result-main">
              <div className="test-badge">{result.title}</div>

              <h3>{result.title}</h3>
              <p>{result.text}</p>

              <h4>{t.test.recommendationTitle}</h4>
              <ul>
                {result.recommendations.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>

              <div className="test-actions">
                <button
                  className="primary-button"
                  onClick={() => openPage("exercises")}
                >
                  {t.test.goToExercises}
                </button>

                <button className="small-button" onClick={restartTest}>
                  {t.test.restartButton}
                </button>
              </div>
            </div>

            <div className="test-animal-box">
              <span className="test-animal-emoji">{result.animal}</span>
              <p>{result.note}</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="test-shell">
        <h2>{t.test.title}</h2>

        <div className="test-progress-block">
          <p className="test-counter">
            {t.test.questionCounter} {currentQuestionIndex + 1} /{" "}
            {t.test.questions.length}
          </p>

          <div className="test-progress">
            <div
              className="test-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="test-question-card">
          <h3>{currentQuestion.text}</h3>

          <div className="test-answer-list">
            {currentQuestion.answers.map((answer) => (
              <button
                key={answer.text}
                className="test-answer-button"
                onClick={() => answerTestQuestion(answer.score)}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderArticle() {
    if (activePage === "home") {
      if (showHomeTest) {
        return renderHomeTest();
      }

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

          <div className="home-actions">
            <button
              className="primary-button"
              onClick={() => openPage("exercises")}
            >
              {t.home.button}
            </button>

            <button
              className="primary-button secondary-button"
              onClick={openHomeTest}
            >
              {t.home.testButton}
            </button>
          </div>
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
              const isCompleted = completedExercises.includes(exercise.id);

              return (
                <div
                  className={`exercise-card ${
                    isCompleted ? "exercise-completed" : ""
                  }`}
                  key={exercise.id}
                >
                  <div className="exercise-card-header">
                    <div>
                      <h3>
                        {isCompleted && <span className="check-icon">✅</span>}
                        {exercise.title}
                      </h3>
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

          <div className="materials-hub">
            {t.materials.sections.map((section) => (
              <section className="material-section" key={section.id}>
                <div className="material-section-header">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>

                <div className="material-grid">
                  {section.items.map((material) => (
                    <div
                      className={`material-card material-kind-${material.kind}`}
                      key={material.id}
                    >
                      <div className="material-card-top">
                        <div className="material-icon">{material.icon}</div>

                        <div>
                          <span className="material-type">
                            {material.type}
                          </span>
                          <h3>{material.title}</h3>
                        </div>
                      </div>

                      <p>{material.description}</p>

                      <div className="material-meta">
                        <span>
                          {t.materials.labels.format}: {material.format}
                        </span>
                      </div>

                      {renderMaterialActions(material)}
                    </div>
                  ))}
                </div>
              </section>
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
            {renderEnergyBlock()}
            {renderSoundBlock()}
            {renderAtmosphereBlock()}
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

            {completionMessage && (
              <div className="completion-note">
                <strong>✨ {t.completionTitle}</strong>
                <p>{completionMessage}</p>
              </div>
            )}
          </div>

          {renderEnergyBlock()}
          {renderSoundBlock()}
          {renderAtmosphereBlock()}
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

          <div className="format-guide">
            <h3>{t.aside.materialsFormatsTitle}</h3>

            {t.aside.materialsFormats.map(([format, description]) => (
              <p key={format}>
                <strong>{format}</strong>
                <br />
                {description}
              </p>
            ))}
          </div>
        </>
      );
    }

    return null;
  }

  return (
    <div className="app">
      <div className="nature-decor nature-leaf-one">🍃</div>
      <div className="nature-decor nature-leaf-two">🌿</div>
      <div className="nature-decor nature-cloud">☁</div>

      {renderDecorEffect()}

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
          <h2>🍃 {t.navTitle}</h2>

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

          <h3>🌿 {t.quickTitle}</h3>

          <div className="quick-links">
            {t.exercises.map((exercise) => {
              const isCompleted = completedExercises.includes(exercise.id);

              return (
                <button
                  key={exercise.id}
                  onClick={() => chooseExercise(exercise.id)}
                >
                  {isCompleted ? "✅ " : "☐ "}
                  {exercise.title}
                </button>
              );
            })}
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

      <audio ref={natureAudioRef} className="hidden-audio" />

      <audio
        ref={doneAudioRef}
        className="hidden-audio"
        src={`${process.env.PUBLIC_URL}${t.doneSound}`}
        preload="auto"
      />

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