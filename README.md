#Debug on device

- ionic cordova run android --device -l -c

#Build

- ionic cordova build android --prod --release

- keytool -genkey -v -keystore calculos-app.keystore -alias calculos -keyalg RSA -keysize 2048 -validity 10000 (first time)

- keytool -list -keystore ritmo-app-key.keystore

- jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore calculos-app.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk calculos

- rm calculo-mental.apk && zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk calculo-mental.apk





