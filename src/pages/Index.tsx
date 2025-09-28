import React, { useState } from 'react';
import { Menu, Heart, Phone, Mail, MapPin, Award, Shield, Users } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const equipmentProducts = [
    {
      title: 'Холтеры ЭКГ и АД',
      description: 'Портативные регистраторы для суточного мониторинга сердечного ритма и артериального давления',
      features: [
        '24-48 часов непрерывной записи',
        'Высокое качество сигнала',
        'Компактный дизайн',
        'Программное обеспечение в комплекте'
      ],
      category: 'Мониторинг',
      icon: 'Activity'
    },
    {
      title: 'Кабели пациентов',
      description: 'Качественные кабели для подключения пациентов к кардиографам различных производителей',
      features: [
        'Совместимость с основными брендами',
        'Прочная изоляция',
        'Различные длины',
        'Гарантия качества'
      ],
      category: 'Аксессуары',
      icon: 'Cable'
    },
    {
      title: 'Регистраторы ЭКГ',
      description: 'Современные цифровые электрокардиографы для точной диагностики',
      features: [
        '12-канальная запись',
        'Цветной дисплей',
        'Автоматическая интерпретация',
        'Сетевые возможности'
      ],
      category: 'Диагностика',
      icon: 'Monitor'
    }
  ];

  const suppliesProducts = [
    {
      title: 'Электроды ЭКГ',
      description: 'Одноразовые электроды высокого качества для точной записи ЭКГ',
      features: [
        'Гипоаллергенный гель',
        'Надежная фиксация',
        'Различные размеры',
        'Длительный срок хранения'
      ],
      category: 'Расходники',
      icon: 'Zap'
    },
    {
      title: 'Манжеты для измерения АД',
      description: 'Комфортные манжеты различных размеров для точного измерения давления',
      features: [
        'Размеры от детских до XXL',
        'Прочный материал',
        'Легкая очистка',
        'Быстрая замена'
      ],
      category: 'Расходники',
      icon: 'Target'
    },
    {
      title: 'Пульсоксиметрические датчики',
      description: 'Точные датчики для мониторинга сатурации кислорода',
      features: [
        'Высокая точность измерений',
        'Быстрый отклик',
        'Различные типы фиксации',
        'Совместимость с мониторами'
      ],
      category: 'Датчики',
      icon: 'Thermometer'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu size={24} className="text-gray-700" />
              </button>
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">CardioMed</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="medical-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Профессиональное кардиологическое оборудование
              </h1>
              <p className="text-xl mb-8 text-blue-50">
                Качественные решения для диагностики и мониторинга сердечно-сосудистых заболеваний. 
                Холтеры, ЭКГ, расходные материалы от ведущих производителей.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={() => scrollToSection('equipment')}
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Каталог оборудования
                </Button>
                <Button 
                  onClick={() => scrollToSection('services')}
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/8d2ac92e-8891-45ef-9b72-f12e86b43b13.jpg"
                alt="Кардиологическое оборудование"
                className="max-w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Установленных систем</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Техническая поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Кардиологическое оборудование
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современные решения для точной диагностики и непрерывного мониторинга состояния сердечно-сосудистой системы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Supplies Section */}
      <section id="supplies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Расходные материалы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Качественные расходники для обеспечения точности диагностики и комфорта пациентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suppliesProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг для медицинских учреждений</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Wrench" size={32} className="text-blue-600 mb-4" />
                <CardTitle>Установка и настройка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Профессиональная установка оборудования с полной настройкой и тестированием
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Users" size={32} className="text-blue-600 mb-4" />
                <CardTitle>Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Комплексное обучение медицинского персонала работе с оборудованием
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Shield" size={32} className="text-blue-600 mb-4" />
                <CardTitle>Техническое обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Регулярное техобслуживание и ремонт с гарантией качества
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты и качество</h2>
            <p className="text-xl text-gray-600">Наша продукция соответствует международным стандартам</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO 13485</h3>
              <p className="text-gray-600 text-sm">Система менеджмента качества медицинских изделий</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">CE Marking</h3>
              <p className="text-gray-600 text-sm">Соответствие европейским стандартам безопасности</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">FDA Approved</h3>
              <p className="text-gray-600 text-sm">Одобрено управлением по контролю качества США</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Росздравнадзор</h3>
              <p className="text-gray-600 text-sm">Регистрация в Российской Федерации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Готовы ответить на ваши вопросы и подобрать оптимальное решение</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (800) 555-01-23</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@cardiomed.ru</p>
                  <p className="text-gray-600">sales@cardiomed.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                  <p className="text-gray-600">
                    г. Москва, ул. Медицинская, д. 15<br />
                    БЦ "Здоровье", офис 301
                  </p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Отправить запрос</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Опишите ваши потребности..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">CardioMed</span>
              </div>
              <p className="text-gray-400 text-sm">
                Надежный партнер в области кардиологического оборудования с 2008 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Холтеры ЭКГ и АД</li>
                <li>Кабели пациентов</li>
                <li>Регистраторы ЭКГ</li>
                <li>Расходные материалы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Установка и настройка</li>
                <li>Обучение персонала</li>
                <li>Техническое обслуживание</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@cardiomed.ru</li>
                <li>г. Москва, ул. Медицинская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CardioMed. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;