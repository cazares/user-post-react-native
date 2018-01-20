react-native bundle --platform android --dev false --entry-file $1/$1.js --bundle-output android/app/src/main/assets/$1.jsbundle --assets-dest android/app/src/main/res/
#react-native bundle --entry-file $1/$1.js --platform ios --dev false --bundle-output ios/$1.jsbundle --assets-dest ./ios

