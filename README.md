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


src/app/<br/>
├─ [analytics/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/analytics)<br/>
│  ├─ analytics-service.ts<br/>
│  ├─ analytics.factory.ts<br/>
│  ├─ analytics.token.ts<br/>
│  ├─ weekend-analytics-service.ts<br/>
├─ [components/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/components)<br/>
│  ├─ [counter-component/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/components/counter-component)<br/>
│  │  ├─ counter-component.html<br/>
│  │  ├─ counter-component.scss<br/>
│  │  ├─ counter-component.ts<br/>
│  ├─ [dashboard-component/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/components/dashboard-component)<br/>
│  │  ├─ dashboard-component.html<br/>
│  │  ├─ dashboard-component.scss<br/>
│  │  ├─ dashboard-component.ts<br/>
├─ [services/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_05/tree/main/src/app/services)<br/>
│  ├─ counter-service.ts<br/>



