LibraryJS
LibraryJS — это модульная JavaScript-библиотека, созданная для упрощения работы с DOM, анимациями и компонентами пользовательского интерфейса. Она предоставляет легковесное ядро и набор расширяемых компонентов, таких как аккордеоны, карусели, выпадающие списки, модальные окна и вкладки.

Содержание
Core
Accordion
Carousel
Dropdown
Modal
Tab
Модули
Действия
Атрибуты
Классы
Отображение
Эффекты
Обработчики
SCSS Компоненты

Core
Файл core.js предоставляет основную функциональность библиотеки. Он включает простую реализацию функции $, которая выбирает элементы DOM по заданному селектору. Ядро разработано для расширения возможностей, позволяя добавлять методы к выбранным элементам. Оно служит основой для всех остальных модулей.

Accordion
Файл accordion.js добавляет функциональность аккордеона. Это позволяет создавать элементы, которые разворачиваются или сворачиваются при клике. Метод accordion управляет активными классами для заголовков и контента, а также контролирует высоту контента для плавных переходов.

Carousel
Файл carousel.js реализует карусель изображений (слайдер). Карусель позволяет переключаться между слайдами с помощью кнопок или индикаторов. Этот модуль управляет шириной слайдов, переключением между ними и активными классами индикаторов.

Dropdown
Файл dropdown.js добавляет возможность создания выпадающих списков. Метод dropdown связывает кнопку с выпадающим контентом через атрибут data-toggle-id, и этот контент может быть показан или скрыт по клику.

Modal
Файл modal.js предоставляет функциональность модальных окон. Метод modal показывает или скрывает модальное окно при клике, а также управляет закрытием окна по клику на фон или на специальные элементы. Метод createModal позволяет динамически создавать модальные окна с заголовком, текстом и кнопками.

Tab
Файл tab.js добавляет функциональность для переключения вкладок. Метод tab переключает активные вкладки и отображает соответствующий контент, скрывая неактивные вкладки.

Модули
LibraryJS включает несколько вспомогательных модулей для работы с DOM:

1. Действия
html(content): Возвращает или устанавливает HTML-содержимое выбранных элементов.
eq(i): Оставляет только один элемент из набора по индексу.
index(): Определяет позицию текущего элемента среди его соседей.
find(selector): Находит потомков элементов по селектору.
closest(selector): Находит ближайшего предка текущего элемента, который соответствует селектору.
siblings(): Возвращает всех соседей текущего элемента.
2. Атрибуты
addAtt(name, value): Добавляет атрибут с указанным значением.
removeAtt(name): Удаляет атрибут.
toggleAtt(name, value): Переключает наличие атрибута в зависимости от его состояния.
3. Классы
addClass(...classNames): Добавляет один или несколько классов к элементам.
removeClass(...classNames): Удаляет указанные классы у элементов.
toggleClass(classNames): Переключает наличие класса у элементов.
4. Отображение
show(): Показывает элементы, если они скрыты.
hide(): Скрывает элементы.
toggle(): Переключает видимость элементов.
5. Эффекты
fadeIn(dur, display, fin): Плавно показывает элемент за указанное время.
fadeOut(dur, fin): Плавно скрывает элемент за указанное время.
fadeToggle(dur, display, fin): Переключает видимость элемента с плавным переходом.
6. Обработчики
on(eventName, callBack): Добавляет обработчик события.
off(eventName, callBack): Удаляет обработчик события.
click(handler): Добавляет обработчик события клика или вызывает клик по элементу.
SCSS Компоненты
LibraryJS включает набор утилитарных SCSS-компонентов для стилизации элементов интерфейса:

1. Button
Файл button.scss содержит стили для кнопок с различными состояниями (основная, успех, опасность, предупреждение, темная) и вариантами отображения (контурные кнопки и кнопки на всю ширину). Также включены переходы и hover-эффекты для улучшения взаимодействия с пользователем.

2. Carousel
Файл carousel.scss содержит стили для каруселей изображений, включая стили для слайдов, индикаторов и навигационных стрелок с hover-эффектами.

3. Dropdown
Файл dropdown.scss предоставляет стили для выпадающих меню, включая кнопки-переключатели и элементы меню с hover-эффектами.

4. Modal
Файл modal.scss содержит стили для модальных окон, включая стили для заголовков, основного контента и кнопок закрытия, а также анимации для плавного появления и закрытия окон.

5. Tab
Файл tab.scss содержит стили для вкладок, включая панели, элементы вкладок и активные состояния с анимациями переключения.

6. Align
Файл align.scss включает утилитарные классы для выравнивания текста и элементов (.text-center, .block-center).

7. Display
Файл display.scss включает утилитарные классы для управления видимостью и отображением элементов (например, .hidden, .d-block, .f-centered).

8. Font
Файл font.scss предоставляет утилиты для управления размерами шрифта, стилями текста (например, .bold, .italic) и цветом текста.

9. Margin
Файл margin.scss включает утилиты для управления внешними отступами (например, .m10, .mt-10).

10. Padding
Файл padding.scss включает утилиты для управления внутренними отступами (например, .p10, .pt-10).

11. Size
Файл size.scss содержит классы для управления шириной и высотой элементов (например, .w-100, .h-300).

