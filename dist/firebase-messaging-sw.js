

// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

// ✅ Initialize Firebase app in service worker
firebase.initializeApp({
    apiKey: "AIzaSyBSr3j9k0NGoczVeqvdyLpGhiV36nEfUxE",
    authDomain: "collubi-d5840.firebaseapp.com",
    projectId: "collubi-d5840",
    storageBucket: "collubi-d5840.firebasestorage.app",
    messagingSenderId: "124496310739",
    appId: "1:124496310739:web:01e68874616f206fcb7f26",
    measurementId: "G-5M9BL47NFE"
  });

// ✅ Initialize Firebase Messaging
const messaging = firebase.messaging();

// ✅ Background notification handler
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification?.title || "New Message";
  const notificationOptions = {
    body: payload.notification?.body,
    icon: payload.data?.sender_image || "/logo192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

