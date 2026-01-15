# homeworkAssignment_Lesson_05 / [Live](https://homework-assignment-lesson-05.vercel.app/)

## Features:

●  Create a simple counter service (use RxJS-store approach in this service, current number information, 
increment and decrement methods). Provide it both for appConfig (globaly) and a component providers 
(locally). Inject it twice with self and skipSelf decorators. Check the behavior of global and local instances when 
interacting with them.

● Create two services: Analytics WeekendAnalytics. Both should have method trackAnalytics that are outputting 
‘Analytics is tracked’ / ‘Analytics is tacked for weekend’ Create a useFactory provider that provides appropriate 
service in appropriate day of week

**Folder Structure:**

src/app/

├─ [analytics/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/analytics)
│  ├─ analytics-service.ts
│  ├─ analytics.factory.ts
│  ├─ analytics.token.ts
│  ├─ weekend-analytics-service.ts
├─ [components/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/components)
│  ├─ [counter-component/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/components/counter-component)
│  │  ├─ counter-component.html
│  │  ├─ counter-component.scss
│  │  ├─ counter-component.ts
│  ├─ [dashboard-component/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/components/dashboard-component)
│  │  ├─ dashboard-component.html
│  │  ├─ dashboard-component.scss
│  │  ├─ dashboard-component.ts
├─ [services/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/services)
│  ├─ counter-service.ts

