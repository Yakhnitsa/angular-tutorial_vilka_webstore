
# Этапы проектирования:
  Запуск проекта: `ng new vilka-webstore --directory=angular-tutorial_vilka_webstore`
  
## Выбор правильной структуры проекта:
  [рекоментации](http://coldfox.ru/article/5b943fe69476b92c8b5fc274/%D0%9A%D0%B0%D0%BA-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE-%D0%BC%D0%B0%D1%81%D1%88%D1%82%D0%B0%D0%B1%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%83%D1%8E-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%83-%D0%BF%D0%B0%D0%BF%D0%BE%D0%BA-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE-Angular-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0)
    
## Установка Bootstrap:
  `npm install bootstrap`
  `npm install jquery`
  добавляем `@import "~bootstrap/dist/css/bootstrap.css"` в styles корня проекта.
  Устанавливаем виджеты бутстрап (https://ng-bootstrap.github.io/#/home);

## Создаем Mock сервер [мануал](https://medium.com/letsboot/the-perfect-mock-backend-to-start-with-an-angular-application-3d751d16614f)
  Устанавливаем сервер: `npm install -g json-server`
  добавляем скрипт запуска: `"json": "json-server --watch mockDB.json -p 3511"`

## Подключаем [postman](https://universal-crater-378362.postman.co/build/workspace/My-Workspace~5c49ea96-2bc7-4ce2-88ba-f57f19b274c5/request/13359816-42d038f5-3ad3-4e76-adfe-01fee099d7a9)
 Работа с [postman](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d)
