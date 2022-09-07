import AsyncStorage from '@react-native-async-storage/async-storage';
class DeviceStorage {
  static get(key) {
    return AsyncStorage.getItem(key).then(function (value) {
      return JSON.parse(value);
    });
  }

  static save(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

   static async delete(key) {
    return await AsyncStorage.removeItem(key);
  }
}

export default DeviceStorage;
