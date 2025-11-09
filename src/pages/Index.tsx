import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'internship', label: 'Отчет по стажировкам', icon: 'FileText' },
    { id: 'leadership', label: 'Руководство', icon: 'Users' },
    { id: 'applications', label: 'Заявки в организацию', icon: 'Send' },
    { id: 'reporting', label: 'Вся отчетность', icon: 'BarChart3' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              <span className="text-lg font-semibold">Military Academy</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section id="main" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Добро пожаловать в Military Academy
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Подразделение Military Academy, далее MA, представляет собой специализированное подразделение, предназначенное для
                подготовки и обучения будущих офицеров, которые будут служить в рядах U.S. Army.
              </p>
            </div>
          </div>
        </section>

        <section id="internship" className="py-12 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="FileText" size={32} className="text-primary" />
              <h2 className="text-2xl font-semibold">Отчет по стажировкам</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Положение Military Academy
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Информация о положениях и регламентах военной академии, включая правила поведения,
                  структуру подразделений и основные требования к курсантам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Вводный инструктаж
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Первичный инструктаж для новых курсантов, охватывающий базовые правила безопасности,
                  распорядок дня и основные обязанности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Вопросы по Военному билету
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Ответы на часто задаваемые вопросы о военном билете, порядке его получения и
                  необходимых документах.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Вопросы для экзаменов
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  База вопросов для подготовки к экзаменам, включающая теоретические и практические
                  аспекты военной подготовки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Проверка электронных заявлений
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Система проверки статуса электронных заявлений, поданных курсантами для различных
                  административных процедур.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="leadership" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Users" size={32} className="text-primary" />
              <h2 className="text-2xl font-semibold">Руководство</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Проведение лекций
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Расписание и материалы для проведения теоретических занятий по военной подготовке,
                  тактике и стратегии.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Проведение тренировки
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Программы физической и технической подготовки, включая практические упражнения и
                  полевые учения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Проведение практики
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Практические занятия по применению теоретических знаний в реальных условиях,
                  включая симуляции боевых действий.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Проведение набора
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Информация о процедуре набора новых курсантов, требованиях к кандидатам и этапах
                  отбора.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="applications" className="py-12 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Send" size={32} className="text-primary" />
              <h2 className="text-2xl font-semibold">Заявки в организацию</h2>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                Для подачи заявки в организацию необходимо заполнить соответствующую форму и
                приложить требуемые документы.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Icon name="FileEdit" size={18} />
                Подать заявку
              </button>
            </div>
          </div>
        </section>

        <section id="reporting" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="BarChart3" size={32} className="text-primary" />
              <h2 className="text-2xl font-semibold">Вся отчетность</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Отчет экзаменов
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Сводные данные по результатам экзаменационных сессий, статистика успеваемости и
                  анализ результатов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Отчет товарищей
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Информация о личном составе, данные о курсантах и преподавателях, статистика
                  посещаемости.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Отчет о наборах
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Данные о приеме новых курсантов, количество поданных и одобренных заявок, динамика
                  набора по периодам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:no-underline">
                  Отчет по стажировкам
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  Подробная информация о прохождении стажировок курсантами, оценка результатов и
                  рекомендации.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/30 border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Скоро будет крутой сайт для всех подразделений.
            </div>
            <div className="text-sm text-muted-foreground">
              v0.1 | Разработчик: Mason Hartford A88L
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
