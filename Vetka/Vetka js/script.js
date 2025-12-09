// Данные каталога
const products = [
    {
        name: "Автопилот AgroPilot Pro",
        type: "система точного земледелия",
        description: "Совместимость: тракторы, комбайны, опрыскиватели. Точность: до 2 см (с RTK).",
        image: "https://via.placeholder.com/300x200?text=AgroPilot+Pro"
    },
    {
        name: "Культиватор Agrocraft AC-600",
        type: "почвообрабатывающее орудие",
        description: "Рабочая ширина: 6 м. Назначение: сплошная обработка почвы.",
        image: "https://via.placeholder.com/300x200?text=AC-600"
    },
    {
        name: "Борона дисковая BD-400",
        type: "почвообрабатывающее орудие",
        description: "Рабочая ширина: 4 м. Подходит для тяжёлых почв.",
        image: "https://via.placeholder.com/300x200?text=BD-400"
    },
    {
        name: "Трактор John Deere 6130R (с пробегом)",
        type: "сельхозтехника",
        description: "Мощность: 130 л.с. Год: 2020, состояние — отличное.",
        image: "https://via.placeholder.com/300x200?text=JD+6130R"
    },
    {
        name: "Сеялка точного высева Agrocraft SP-12",
        type: "посевное оборудование",
        description: "Ширина захвата: 12 м. Совместима с автопилотом.",
        image: "https://via.placeholder.com/300x200?text=SP-12"
    }
];

// Отображение продуктов
function renderProducts() {
    const container = document.getElementById('products-list');
    let html = '';

    products.forEach(product => {
        html += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p><strong>Тип:</strong> ${product.type}</p>
            <p>${product.description}</p>
            <a href="mailto:rinadavlic@gmail.com?subject=Запрос по ${product.name}" class="btn">Уточнить цену</a>
        </div>
        `;
    });

    container.innerHTML = html;
}

// Обработка формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Инициализация
document.addEventListener('DOMContentLoaded', renderProducts);