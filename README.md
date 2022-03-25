# [fetch-app](https://dianazhusupbek.github.io/fetch-app/) - Ссылка пока не работает
<details>
    <summary>Task 15</summary>
Описание задания
    
    У вас имеется JSON файл содержащий массив товаров:
    
    ```[
      {
        "id": 1,
        "title": "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
        "category": "ноутбуки",
        "price": 19950,
        "img": "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
        "desc": "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть",
      },
      {
        "id": 2,
        "title": "Xiaomi Mi 11 Lite",
        "category": "смартфоны",
        "price": 28700,
        "img": "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
        "desc": "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г",
      },
    ];
    ```
    
    Необходимо обработать данный массив и вывести на Frontend карточки товара:
    
    ![image](https://user-images.githubusercontent.com/88156532/159068754-b9bee929-f436-4e86-927b-fb43a72bf55c.png)
    
- **Критерии оценки для cross-check**
    
    Максимальный балл: 20
    
    1. Проект опубликован в github - 5 баллов
    2. Json файл обработан через fetch API - 10 баллов
    3. Карточкам товара добавлены стили и карточки смотрятся лучше чем на картинке выше 😊 – 5 баллов

</details>

## Задание 16
- **Описание задания**
    - Fake база товаров
        
        ```jsx
        const products = [
          {
            id: 1,
            title: "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
            category: "laptops",
            price: 19950,
            img: "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
            desc: "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть",
          },
          {
            id: 2,
            title: "Xiaomi Mi 11 Lite",
            category: "phones",
            price: 28700,
            img: "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
            desc: "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г",
          },
          {
            id: 3,
            title: "Hello",
            category: "laptops",
            price: 60000,
            img: "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
            desc: "bla bla bla",
          },
          {
            id: 4,
            title: "Телевизор LG OLED65CXRLA",
            category: "tv",
            price: 219980,
            img: "https://www.kivano.kg/images/product/92929/full/1621780991_50190300.jpg",
            desc: "разрешение: 4K UHD (3840x2160), HDR диагональ экрана: 65 частота обновления экрана: 100 Гц формат HDR: Dolby Vision, HDR 10 Pro мощность звука: 40 Вт (2х10 + 2х10 Вт) платформа Smart TV: webOS",
          },
        ];
        ```
        
    
    Доработать проект по выводу товаров, добавив функционал по фильтрации товаров
    
    ![image](https://user-images.githubusercontent.com/88156532/160194564-c5b358fd-38d7-45eb-a053-013167c5ec49.png)
    
    ![image](https://user-images.githubusercontent.com/88156532/160194577-298237ce-d9cc-44f5-b62b-33d1bc51ac71.png)
    
- **Критерии оценки для cross-check**
    
    Максимальный балл: 20
    
    1. Проект опубликован в github - 10 баллов
    2. Json файл обработан через fetch API - 10 баллов
