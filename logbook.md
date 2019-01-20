# บันทึกการหัดเขียน Angular element

สิ่งที่เขียนใน Log book นั้นคือการบันทึกรวบรวมข้อมูลตอนอ่าน ซึ่งผู้ทำถนัดการทำไปบันทึกไป ดังนั้นบางตอนมีการสรุปหรือบันทึกที่ไม่ถูกต้องตามหลักการจริงๆ ดังนั้นเวลาอ่านขอให้คิดว่าตามอ่านการเดินทางเพื่อทำอะไรสักอย่าง ถ้าท่านลองเดินตามท่านอาจจะไปถึงจุดหมายเดียวกับผู้เขียนหรือไม่ถึงก็ได้ เพราะท่านและผู้เขียนนั้นคนละคนกัน


## 2019-01-14 

### วิธีเขียน Angular element

https://scotch.io/tutorials/build-a-reusable-component-with-angular-elements#toc-what-you-ll-need-to-get-started-with-angular-elements

## 2019-01-15

### การใช้ HttpClient

https://blog.angular-university.io/angular-http/

### การใช้ iframe

https://www.w3schools.com/tags/tag_iframe.asp

### ดึ่งค่าจาก iframe แบบ Angular

https://stackoverflow.com/questions/36513929/change-the-property-of-element-inside-iframe-in-angular-2


## 2019-01-20

### วิธีทำ web component เขียนโดยคนไทย

https://medium.com/@theerawat.pon/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-web-component-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-angular-elements-4f8f80e82f00
https://github.com/peeoen/angular-elements

### วิธีทำ web componetn

https://medium.com/@tomsu/building-web-components-with-angular-elements-746cd2a38d5b

### Basic พื้นฐาน

https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example


Angular ใช้แนวคิดการแบ่ง Front end เป็น 3 ส่วน

* The HTML template
* The logic
* The styling (CSS, Sass, Stylus, etc..)

### แก้ปัญหาเรื่อง symlink


https://ahtik.com/fixing-your-virtualbox-shared-folder-symlink-error/
https://github.com/npm/npm/issues/992

```txt
# if running inside VirtualBox on a shared folder
# you must enable symlinks on the shared folder
$ VBoxManage setextradata "<vm name>" VBoxInternal2/SharedFoldersEnableSymlinksCreate/<shared folder> 1

# verify with
$ VBoxManage getextradata "<vm name>" enumerate
```

### เปิด Port ให้เครื่องอื่นเข้ามาใช้งานได้ และ Refresh เมื่อ code เปลี่ยน

sudo ng serve --poll=2000 --host 0.0.0.0


### วิธีทำ iframe แบบ dynamic

https://stackoverflow.com/questions/38037760/how-to-set-iframe-src-in-angular-2-without-causing-unsafe-value-exception
https://www.linkedin.com/pulse/working-iframe-angular-thiago-adriano
https://medium.com/claritydesignsystem/four-ways-of-listening-to-dom-events-in-angular-part-1-event-binding-3ec7e9f51a1d


### วิธีการดึงตัว element html

https://stackoverflow.com/questions/48226868/document-getelementbyid-replacement-in-angular4-typescript/48226924

### วิธีดู event ของ iframe

https://stackoverflow.com/questions/10781880/dynamically-created-iframe-triggers-onload-event-twice/15880489#15880489