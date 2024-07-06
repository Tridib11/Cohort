import { atom, selector } from "recoil";

export const notifications=atom({
  key:"notifications",
  default:{
    network:4,
    jobs:5,
    messaging:3,
    notifications:2
  }
})

export const totalNotificationSelector=selector({
  key:"totalNotificationSelector",
  get:({get})=>{
    const allNotifications=get(notifications)
    return allNotifications.network+allNotifications.jobs+allNotifications.messaging+allNotifications.notifications
  }
})