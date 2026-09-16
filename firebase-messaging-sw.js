importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyC_YP_ZQ6aikiXwhdDTKgqeVKM3WPSnDn4",
  authDomain: "danktrust-growth.firebaseapp.com",
  projectId: "danktrust-growth",
  storageBucket: "danktrust-growth.firebasestorage.app",
  messagingSenderId: "549971041869",
  appId: "1:549971041869:web:9391e597e6200f4ef2c684"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon-192.png'
  });
});