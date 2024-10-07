LibraryJS
LibraryJS is a modular JavaScript library designed to simplify DOM manipulation, effects, and UI components. It provides a lightweight core with a variety of extendable components, such as accordions, carousels, dropdowns, modals, and tabs.

Table of Contents
Core
Accordion
Carousel
Dropdown
Modal
Tab
Modules
Actions
Attributes
Classes
Display
Effects
Handlers
SCSS Components
Core
The core.js file provides the foundation of the library. It includes a simple implementation of the $ function, which selects DOM elements by a given selector. The core is designed to extend functionality, allowing additional methods to be applied to selected elements, and serves as the base for all other modules.

Accordion
The accordion.js file adds accordion functionality. This allows for elements that expand or collapse when clicked. The accordion method manages the active classes for the header and content, as well as controls the height of the content for smooth transitions.

Carousel
The carousel.js file implements an image carousel (slider). The carousel allows navigation between slides using buttons or indicators. This module manages slide widths, transitions, and active indicator classes.

Dropdown
The dropdown.js file enables dropdown menus. The dropdown method links a button to a dropdown content area using a data-toggle-id attribute, and the content is shown or hidden when clicked.

Modal
The modal.js file provides modal window functionality. The modal method shows or hides the modal on click, and also manages closing the modal by clicking on specific elements or the background. Additionally, the createModal method dynamically generates modals with a title, text, and buttons.

Tab
The tab.js file adds functionality for tabbed content navigation. The tab method switches between active tabs and displays the corresponding content while hiding inactive tabs.

Modules
LibraryJS includes several utility modules that enhance DOM manipulation:

1. Actions
html(content): Get or set the HTML content of selected elements.
eq(i): Select a single element from the set based on index.
index(): Get the index of the current element relative to its siblings.
find(selector): Find descendants of elements matching a selector.
closest(selector): Get the closest ancestor that matches a selector.
siblings(): Retrieve all sibling elements.
2. Attributes
addAtt(name, value): Add an attribute with a specified value.
removeAtt(name): Remove an attribute.
toggleAtt(name, value): Toggle the presence of an attribute.
3. Classes
addClass(...classNames): Add one or more classes to elements.
removeClass(...classNames): Remove specified classes from elements.
toggleClass(classNames): Toggle a class on elements.
4. Display
show(): Display elements if hidden.
hide(): Hide elements.
toggle(): Toggle the visibility of elements.
5. Effects
fadeIn(dur, display, fin): Gradually show an element over a duration.
fadeOut(dur, fin): Gradually hide an element over a duration.
fadeToggle(dur, display, fin): Toggle element visibility with a fade effect.
6. Handlers
on(eventName, callBack): Add an event listener.
off(eventName, callBack): Remove an event listener.
click(handler): Add a click event listener or trigger a click event.
SCSS Components
LibraryJS includes a set of SCSS utility components to style UI elements:

1. Button
button.scss contains styles for buttons in various states (primary, success, danger, warning, dark) and display types (outline and block). It also includes transitions and hover effects for improved UX.

2. Carousel
carousel.scss includes styles for image sliders, slide indicators, and navigation arrows with hover effects.

3. Dropdown
dropdown.scss provides styles for dropdown menus, including toggle buttons and menu items with hover effects.

4. Modal
modal.scss contains styles for modal windows, including headers, body content, and close buttons, along with animations for smooth transitions.

5. Tab
tab.scss includes styles for tabbed interfaces, with classes for panels, tab items, and active states with animations.

6. Align
align.scss contains utility classes for aligning text and elements (text-center, block-center).

7. Display
display.scss includes utility classes for managing element visibility and display properties (e.g., .hidden, .d-block, .f-centered).

8. Font
font.scss provides utilities for font sizes, text styles (e.g., .bold, .italic), and color changes.

9. Margin
margin.scss offers margin utilities for setting universal or side-specific margins (e.g., .m10, .mt-10).

10. Padding
padding.scss provides padding utilities for universal or side-specific padding (e.g., .p10, .pt-10).

11. Size
size.scss contains classes for setting element width and height (e.g., .w-100, .h-300).

________________________________________________________________________________________________________________

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

Модульный подход LibraryJS позволяет гибко управлять функциональностью JavaScript и стилями SCSS, делая библиотеку удобным инструментом для фронтенд-разработки.


 
 
