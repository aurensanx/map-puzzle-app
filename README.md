# Map Puzzle

Ionic + Angular + D3

### Start Local Server

ionic serve --devapp

### Debug on device

- ionic cordova run android --device -l -c

### Build

- +1 version config.xml

- ionic cordova build android --prod --release

- keytool -genkey -v -keystore puzzle-map.keystore -alias puzzle-map -keyalg RSA -keysize 2048 -validity 10000 (first time)

- keytool -list -keystore puzzle-map.keystore

- jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore puzzle-map.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk puzzle-map

- rm puzzle-map.apk && zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk puzzle-map.apk





