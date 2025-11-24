import React, { useState } from 'react';
import { ChevronRight, BookOpen, CheckCircle, ArrowLeft, Calendar } from 'lucide-react';

interface Question {
  q: string;
  options: string[];
  correct: number;
}

interface Test {
  questions: Question[];
}

interface Lesson {
  id: number;
  title: string;
  theory: string;
  test?: Test;
}

interface Week {
  number: number;
  dates: string;
  theme: string;
  lessons: Lesson[];
}

const Physics11KMJ: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [testAnswers, setTestAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const weeks: Week[] = [
    {
      number: 1,
      dates: '1-8 қыркүйек',
      theme: 'Кинематика. Қайталау',
      lessons: [
        {
          id: 1,
          title: 'Механикалық қозғалыс. Санақ жүйесі',
          theory: `**Механикалық қозғалыс** – дененің кеңістіктегі орнының уақыт бойынша өзгеруі.

**Санақ жүйесі құрамына кіретіндер:**
• Санақ денесі
• Координаталар жүйесі
• Уақыт өлшеуіш құрал (сағат)`,
          test: {
            questions: [
              { q: 'Санақ жүйесіне не кірмейді?', options: ['Санақ денесі', 'Координаталар жүйесі', 'Траектория', 'Сағат'], correct: 2 }
            ]
          }
        }
      ]
    },
    {
      number: 20,
      dates: '12-16 ақпан',
      theme: 'Тербеулі қозғалыс',
      lessons: [
        {
          id: 39,
          title: 'Гармониялық тербелістер',
          theory: `**Период:** T = 2π / ω
**Математикалық маятник:** T = 2π √(l / g)`,
          test: {
            questions: [
              { q: 'l 4 есе артса, T неше есе артады?', options: ['2 есе', '4 есе', '√4 = 2 есе', '8 есе'], correct: 2 }
            ]
          }
        }
      ]
    },
    {
      number: 21,
      dates: '19-23 ақпан',
      theme: 'Толқындар',
      lessons: [
        {
          id: 41,
          title: 'Толқын теңдеуі',
          theory: `**Толқын жылдамдығы:** v = λ f`,
          test: {
            questions: [
              { q: 'Дыбыс толқыны қандай?', options: ['Көлденең', 'Бойлық', 'Дөңгелек', 'Спираль'], correct: 1 }
            ]
          }
        }
      ]
    },
    {
      number: 22,
      dates: '26 ақпан – 2 наурыз',
      theme: 'Оптика',
      lessons: [
        {
          id: 43,
          title: 'Шағылу заңы',
          theory: `**Шығу заңы:** i = r`,
          test: {
            questions: [
              { q: 'Шағылу заңы бойынша?', options: ['i = r', 'i > r', 'i < r', 'i + r = 90°'], correct: 0 }
            ]
          }
        }
      ]
    },
    {
      number: 23,
      dates: '5-9 наурыз',
      theme: 'Атом физикасы',
      lessons: [
        {
          id: 45,
          title: 'Фотоэффект',
          theory: `**Эйнштейн теңдеуі:** hν = A_шығу + E_к max`,
          test: {
            questions: [
              { q: 'Фотоэффектте ν ≥ ν₀ болу керек пе?', options: ['Иә', 'Жоқ', 'Кейде', 'Маңызды емес'], correct: 0 }
            ]
          }
        }
      ]
    },
    {
      number: 24,
      dates: '12-16 наурыз',
      theme: 'Ядро',
      lessons: [
        {
          id: 47,
          title: 'Ядро құрылысы',
          theory: `**Нуклон саны:** A = Z + N`,
          test: {
            questions: [
              { q: 'Изотоптардың айырмашылығы?', options: ['Зарядта', 'Нейтрон санында', 'Электронда', 'Энергияда'], correct: 1 }
            ]
          }
        }
      ]
    },
    {
      number: 25,
      dates: '19-23 наурыз',
      theme: 'Радиобелсенділік',
      lessons: [
        {
          id: 49,
          title: 'Ыдырау түрлері',
          theory: `**α-ыдырау:** A → A-4, Z → Z-2
**β⁻-ыдырау:** Z → Z+1`,
          test: {
            questions: [
              { q: 'α-ыдырауда A қалай өзгереді?', options: ['+4', '-4', 'Өзгермейді', '+2'], correct: 1 }
            ]
          }
        }
      ]
    },
    {
      number: 26,
      dates: '26-30 наурыз',
      theme: 'Ядролық реакциялар',
      lessons: [
        {
          id: 51,
          title: 'Бөліну және синтез',
          theory: `**Күн энергиясы** – синтез реакциясынан`,
          test: {
            questions: [
              { q: 'Күн энергиясы қайдан?', options: ['Бөліну', 'Синтез', 'Химия', 'Гравитация'], correct: 1 }
            ]
          }
        }
      ]
    },
    {
      number: 27,
      dates: '9-13 сәуір',
      theme: 'Қайталау 1-семестр',
      lessons: [
        {
          id: 53,
          title: 'Механика қайталау',
          theory: `**Ньютон заңдары, энергия, импульс**`,
          test: {
            questions: [
              { q: 'F=ma қай заң?', options: ['1-заң', '2-заң', '3-заң', 'Гук'], correct: 1 }
            ]
          }
        }
      ]
    },
    {
      number: 28,
      dates: '16-20 сәуір',
      theme: 'Қайталау 2-семестр',
      lessons: [
        {
          id: 55,
          title: 'Электромагнетизм',
          theory: `**Фарадей заңы, тербелістер**`,
          test: {
            questions: [
              { q: 'Математикалық маятник T=?', options: ['2π√(l/g)', '2π√(m/k)', '2π√(k/m)', 'λ/v'], correct: 0 }
            ]
          }
        }
      ]
    },
    {
      number: 29,
      dates: '23-27 сәуір',
      theme: 'Оптика және кванттық физика',
      lessons: [
        {
          id: 57,
          title: 'Фотоэффект және Бор',
          theory: `**hν = Aшығу + Ek**
**Бор постулаттары**`,
          test: {
            questions: [
              { q: 'Фотоэффект үшін ν ≥ ν₀?', options: ['Иә', 'Жоқ', 'Кейде', 'Маңызды емес'], correct: 0 }
            ]
          }
        }
      ]
    },
    {
      number: 30,
      dates: '30 сәуір – 4 мамыр',
      theme: 'ҰБТ есептері',
      lessons: [
        {
          id: 59,
          title: 'ҰБТ қайталау',
          theory: `**Барлық формулалар жаттау**`,
          test: {
            questions: [
              { q: 'T₁/₂=25 жыл, 50 жылда қанша қалады?', options: ['5 г', '2,5 г', '1,25 г', '0'], correct: 1 }
            ]
          }
        }
      ]
    },
    {
      number: 31,
      dates: '7-11 мамыр',
      theme: 'ҰБТ тест №1',
      lessons: [
        {
          id: 60,
          title: 'Толық тест 35 сұрақ',
          theory: `**Механика, МКТ, Электр**`,
          test: { questions: [] }
        }
      ]
    },
    {
      number: 32,
      dates: '14-18 мамыр',
      theme: 'ҰБТ тест №2',
      lessons: [
        {
          id: 61,
          title: 'Толық тест 35 сұрақ',
          theory: `**Индукция, Оптика, Ядро**`,
          test: { questions: [] }
        }
      ]
    },
    {
      number: 33,
      dates: '21-25 мамыр',
      theme: 'Соңғы қайталау',
      lessons: [
        {
          id: 62,
          title: 'Ең қиын 50 сұрақ',
          theory: `**ҰБТ-дан қиын есептер**`,
          test: { questions: [] }
        }
      ]
    },
    {
      number: 34,
      dates: '28-31 мамыр',
      theme: 'Финал',
      lessons: [
        {
          id: 64,
          title: 'Жылдық БЖ + Симуляция',
          theory: `**Соңғы тексеру. Сәттілік!**`,
          test: { questions: [] }
        }
      ]
    }
  ];

  const handleTestAnswer = (weekNum: number, lessonId: number, questionIndex: number, answerIndex: number) => {
    const key = `${weekNum}-${lessonId}-${questionIndex}`;
    setTestAnswers({ ...testAnswers, [key]: answerIndex });
  };

  const checkAnswers = () => setShowResults(true);
  const resetTest = () => {
    setTestAnswers({});
    setShowResults(false);
  };

  const currentWeek = weeks.find((w) => w.number === selectedWeek);
  const currentLesson = currentWeek?.lessons.find((l) => l.id === selectedLesson);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Физика 11-сынып (КМЖ)</h1>
          <p className="text-gray-700">34 апта. ҰБТ-ға толық дайындық</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Calendar className="mr-2" />
                Апталар
              </h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {weeks.map((week) => (
                  <button
                    key={week.number}
                    onClick={() => {
                      setSelectedWeek(week.number);
                      setSelectedLesson(null);
                      setShowResults(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition ${
                      selectedWeek === week.number
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-semibold">Апта {week.number}</div>
                    <div className="text-xs opacity-75">{week.dates}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            {!selectedLesson ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
                {currentWeek && (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Апта {currentWeek.number}: {currentWeek.theme}
                    </h2>
                    <p className="text-gray-600 mb-6">{currentWeek.dates}</p>
                    <div className="space-y-3">
                      {currentWeek.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setSelectedLesson(lesson.id)}
                          className="w-full bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 rounded-lg p-4 text-left transition"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-blue-900">{lesson.title}</h3>
                            </div>
                            <ChevronRight className="text-blue-600" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6">
                {currentLesson && (
                  <>
                    <button
                      onClick={() => {
                        setSelectedLesson(null);
                        setShowResults(false);
                      }}
                      className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
                    >
                      <ArrowLeft size={20} className="mr-2" />
                      Артқа
                    </button>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">{currentLesson.title}</h2>
                    <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
                      <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                        <BookOpen className="mr-2" />
                        Теория
                      </h3>
                      <div className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
                        {currentLesson.theory}
                      </div>
                    </div>
                    {currentLesson.test && currentLesson.test.questions.length > 0 && (
                      <div className="space-y-6">
                        <h3 className="font-bold text-lg text-blue-900 flex items-center">
                          <CheckCircle className="mr-2" />
                          Тест
                        </h3>
                        {currentLesson.test.questions.map((question, qIdx) => (
                          <div key={qIdx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <p className="font-semibold text-gray-800 mb-3">
                              {qIdx + 1}. {question.q}
                            </p>
                            <div className="space-y-2">
                              {question.options.map((option, oIdx) => (
                                <label
                                  key={oIdx}
                                  className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer"
                                >
                                  <input
                                    type="radio"
                                    name={`q-${currentLesson.id}-${qIdx}`}
                                    checked={
                                      testAnswers[`${selectedWeek}-${currentLesson.id}-${qIdx}`] === oIdx
                                    }
                                    onChange={() =>
                                      handleTestAnswer(selectedWeek, currentLesson.id, qIdx, oIdx)
                                    }
                                    className="mr-3"
                                  />
                                  <span className="text-gray-700">{option}</span>
                                  {showResults && (
                                    <>
                                      {oIdx === question.correct && (
                                        <CheckCircle className="ml-auto text-green-600" size={20} />
                                      )}
                                      {oIdx !== question.correct &&
                                        testAnswers[`${selectedWeek}-${currentLesson.id}-${qIdx}`] === oIdx && (
                                          <div className="ml-auto text-red-600 font-bold">✗</div>
                                        )}
                                    </>
                                  )}
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                        {showResults && (
                          <div className="bg-green-50 rounded-lg p-4 border border-green-300">
                            {(() => {
                              let correct = 0;
                              currentLesson.test.questions.forEach((q, idx) => {
                                const key = `${selectedWeek}-${currentLesson.id}-${idx}`;
                                if (testAnswers[key] === q.correct) correct++;
                              });
                              return (
                                <p className="text-green-800 font-semibold">
                                  Нәтиже: {correct}/{currentLesson.test.questions.length}
                                </p>
                              );
                            })()}
                          </div>
                        )}
                        <div className="flex gap-3">
                          {!showResults ? (
                            <button
                              onClick={checkAnswers}
                              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
                            >
                              Тексеру
                            </button>
                          ) : (
                            <button
                              onClick={resetTest}
                              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
                            >
                              Қайта бастау
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Physics11KMJ;
