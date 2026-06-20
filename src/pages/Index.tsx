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

const GALLERY = [0, 1, 2, 3, 4, 5];

const Index = () => {
  const [wish, setWish] = useState({ name: '', text: '' });
  const [wishes, setWishes] = useState<{ name: string; text: string }[]>([
    { name: 'Жена и дочь', text: 'С днем рождения!!! 🎂 Ты самый важный человек в нашей жизни, мы безгранично любим тебя и всегда ждем с нетерпением твоего возвращения. Для нас ты всегда пример мужества, стойкости, силы и мудрости. Твоя доброта и чувство юмора делают каждый день ярче и радостнее. Желаем крепкого здоровья и исполнения всех заветных желаний. Пусть на работе будет поменьше работы, а мы всегда радовали новостями. Мы счастливы, что ты есть в нашей жизни! ❤️🥰💋' },
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
          <span className="font-display text-2xl text-primary drop-shadow-sm">С Днём Рождения!</span>
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
            <span className="font-hand text-3xl text-secondary">Сегодня особенный день</span>
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
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary via-secondary to-accent opacity-40 blur-xl" />
              <div className="relative flex aspect-square items-center justify-center rounded-[2rem] border-4 border-dashed border-primary/40 bg-white/70 text-primary/50 shadow-2xl">
                <div className="text-center">
                  <Icon name="ImagePlus" size={48} />
                  <p className="mt-2 text-sm font-semibold">Место для фото</p>
                </div>
              </div>
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
        <div className="mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          {GALLERY.map((i) => (
            <div
              key={i}
              className="flex break-inside-avoid items-center justify-center rounded-2xl border-4 border-dashed border-primary/30 bg-white/60 text-primary/40 shadow-lg transition-transform hover:-translate-y-1"
              style={{ aspectRatio: i % 2 ? '3/4' : '4/3' }}
            >
              <div className="text-center">
                <Icon name="ImagePlus" size={36} />
                <p className="mt-1 text-xs font-semibold">Фото {i + 1}</p>
              </div>
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

      <footer className="relative z-10 py-10 text-center font-display text-xl text-primary">
        С любовью и теплом от твоей семьи 🎂🎈
      </footer>
    </div>
  );
};

export default Index;