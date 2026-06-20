import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Confetti, Balloons } from '@/components/Festive';

const NAV = [
  { id: 'home', label: 'Главная', icon: 'Home' },
  { id: 'dates', label: 'Даты', icon: 'CalendarHeart' },
  { id: 'gallery', label: 'Галерея', icon: 'Images' },
  { id: 'wishes', label: 'Пожелания', icon: 'Sparkles' },
];

const DATES = [
  { year: '1984', title: 'Появился на свет', icon: 'Baby', text: 'Самый главный день — день рождения!' },
  { year: '2002', title: 'Окончание школы', icon: 'GraduationCap', text: 'Аттестат и новые горизонты.' },
  { year: '2006', title: 'Свадьба', icon: 'Heart', text: 'Начало нашей общей истории!' },
  { year: '2026', title: 'Этот праздник', icon: 'PartyPopper', text: 'Новый юбилей и куча поздравлений!' },
];

const GALLERY = [
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/87a9a589-5c9a-49ae-b720-1f0a2eb5a326.jpg', position: 'center bottom' },
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/c7e6e036-3743-40ba-9bd4-60f88957b2c2.jpg', position: 'center center' },
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/fa985cef-1e32-463f-99e4-ee3bb4eb2e12.jpg', position: 'center center' },
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/0a615323-d116-46d1-86f1-37888e60676c.jpg', position: 'center center' },
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/a4f83b30-5ee9-411c-85d5-43dc5b7416c6.jpg', position: 'center center' },
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/36f364b3-7543-4d29-9fdf-27af4d3a6cd0.jpg', position: 'center center' },
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/2e0f1ac7-3717-445f-b5ef-3ea83bf82d1a.jpg', position: 'center 30%' },
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/02d995ea-be41-46cf-9cc4-b2f83e635c2c.jpg', position: 'center center', fill: true },
  { src: 'https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/6a85fc3c-e636-492c-833d-136c245c5c74.jpg', position: 'center center', fill: true },
];

const Index = () => {
  const [wish, setWish] = useState({ name: '', text: '' });
  const [wishes, setWishes] = useState<{ name: string; text: string }[]>([
    { name: 'Жена', text: 'С днем рождения!!!🎂 Ты самый важный человек в нашей жизни, мы безгранично любим тебя и всегда ждем с нетерпением твоего возвращения. Для меня ты всегда пример мужества, стойкости, силы и мудрости. Твоя доброта и чувство юмора делают каждый день ярче и радостнее. Желаю крепкого здоровья и исполнения всех заветных желаний. Пусть на работе будет поменьше работы , а мы тебя поменьше огорчали и почаще радовали хорошими новостями . Я счастлива, что ты есть в моей жизни!❤️🥰💋' },
    { name: 'Дочь', text: 'Папуля поздравляю тебя с днем рождения!!! 🤗Ты самый лучший папа на свете, я бесконечно тебя люблю и ценю. 💞Ты для меня пример силы , мужества, стойкости и заботы. Я хочу быть похожей на тебя , ведь ты никогда не унываешь, а твоё чувство юмора заставляет улыбнуться даже в самый дождливый день ! Желаю тебе здоровья, терпения и чтобы мы тебя только радовали! ❤️💋😘' },
    { name: 'Сын', text: 'Папа, поздравляю тебя с днём рождения! Я тебя очень люблю и уважаю, для меня ты пример любимого мужа для своей жены и прекрасного отца для своих детей. 22 июня твой праздник, хоть ты в этот день и не находишься среди нас, дома, но ты всё равно духовно всегда с нами, а мы с тобой. Я тебя люблю папа, спасибо тебе за то, что ты у меня есть 💖' },
  ]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const addWish = () => {
    if (!wish.name.trim() || !wish.text.trim()) return;
    setWishes((p) => [{ name: wish.name, text: wish.text }, ...p]);
    setWish({ name: '', text: '' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-sky-50 via-cyan-50 to-emerald-50 font-sans text-foreground">
      <Confetti />
      <Balloons />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <span className="font-display text-xl text-primary drop-shadow-sm sm:text-3xl lg:text-5xl">С Днём Рождения!</span>
          <div className="flex gap-1 rounded-full bg-white/70 p-1 shadow-sm">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:bg-primary hover:text-white"
              >
                <Icon name={n.icon} size={16} />
                <span className="hidden sm:inline">{n.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative z-10 container mx-auto px-4 pb-24 pt-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-in">
            <span className="font-hand text-4xl text-secondary sm:text-5xl">Сегодня особенный день</span>
            <h1 className="mt-2 font-display text-5xl leading-tight text-primary drop-shadow-sm sm:text-6xl lg:text-7xl">
              Поздравляем,<br />Папа!
            </h1>
            <p className="mt-6 max-w-md text-lg text-foreground/70">
              Этот сайт создан с любовью в честь твоего дня рождения от твоей семьи. Здесь собраны важные даты, любимые фотографии и тёплые пожелания.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full" onClick={() => scrollTo('gallery')}>
                <Icon name="Images" size={18} /> Смотреть галерею
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white" onClick={() => scrollTo('wishes')}>
                <Icon name="Heart" size={18} /> Оставить пожелание
              </Button>
            </div>
          </div>
          <div className="animate-sway">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary via-secondary to-accent opacity-40 blur-xl" />
              <img
                src="https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/8fbf7388-ce03-4d5c-ac2f-6326cf281645.jpg"
                alt="Папа"
                className="relative w-full rounded-[2rem] border-4 border-white shadow-2xl"
                style={{ objectFit: 'cover', aspectRatio: '16/10' }}
              />
              <div className="absolute -right-4 -top-4 animate-wobble rounded-full bg-accent px-4 py-2 font-display text-lg text-accent-foreground shadow-lg">
                Ура! 🎉
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATES */}
      <section id="dates" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-center font-display text-4xl text-secondary sm:text-5xl">Важные даты</h2>
        <p className="mt-3 text-center text-foreground/60">Главные моменты жизненного пути</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DATES.map((d, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-white bg-white/80 p-6 text-center shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary text-white shadow-md transition-transform group-hover:scale-110">
                <Icon name={d.icon} size={28} />
              </div>
              <div className="mt-4 font-display text-2xl text-primary">{d.year}</div>
              <h3 className="mt-1 text-lg font-bold">{d.title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-center font-display text-4xl text-primary sm:text-5xl">Галерея</h2>
        <p className="mt-3 text-center text-foreground/60">Самые тёплые и яркие моменты</p>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {GALLERY.map((photo, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-transform hover:-translate-y-1"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src={photo.src}
                alt={`Фото ${i + 1}`}
                className={`h-full w-full transition-transform duration-500 hover:scale-110 ${photo.fill ? 'object-fill' : photo.contain ? 'object-contain' : 'object-cover'}`}
                style={{ objectPosition: photo.position }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* WISHES */}
      <section id="wishes" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-center font-display text-4xl text-secondary sm:text-5xl">Пожелания</h2>
        <p className="mt-3 text-center text-foreground/60">Напиши тёплые слова имениннику</p>

        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white bg-white/80 p-6 shadow-xl">
          <Input
            placeholder="Ваше имя"
            value={wish.name}
            onChange={(e) => setWish({ ...wish, name: e.target.value })}
            className="rounded-xl"
          />
          <Textarea
            placeholder="Ваше пожелание..."
            value={wish.text}
            onChange={(e) => setWish({ ...wish, text: e.target.value })}
            className="mt-3 min-h-28 rounded-xl"
          />
          <Button className="mt-4 w-full rounded-full" size="lg" onClick={addWish}>
            <Icon name="Send" size={18} /> Отправить пожелание
          </Button>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {wishes.map((w, i) => (
            <div key={i} className="rounded-2xl border border-white bg-white/80 p-5 shadow-md">
              <div className="flex items-center gap-2 text-primary">
                <Icon name="Heart" size={18} />
                <span className="font-bold">{w.name}</span>
              </div>
              <p className="mt-2 font-hand text-xl leading-snug text-foreground/80">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SONG */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="mx-auto max-w-xl rounded-3xl border-4 border-white bg-white/80 p-8 shadow-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Icon name="Music" size={32} className="text-primary" />
            <h2 className="font-display text-3xl text-primary">Песня для тебя</h2>
            <Icon name="Music" size={32} className="text-primary" />
          </div>
          <p className="mb-6 text-foreground/60 font-hand text-lg">Специально для тебя, с любовью 🎵</p>
          <audio
            controls
            className="w-full rounded-xl"
            src="https://cdn.poehali.dev/projects/1cfaa32b-9a4d-4020-8de4-4ee2ef6b9f37/bucket/audio/papa-song.mp3"
          >
            Ваш браузер не поддерживает аудио.
          </audio>
        </div>
      </section>

      <footer className="relative z-10 py-10 text-center font-display text-xl text-primary">
        С любовью и теплом от твоей семьи 🎂🎈
      </footer>
    </div>
  );
};

export default Index;