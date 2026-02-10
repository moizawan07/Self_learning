import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Add / Save value in AsyncStorage
 */
const addKeyToStorage = async (key, value) => {
  try {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);

    await AsyncStorage.setItem(key, stringValue);
  } catch (error) {
    console.error("Error storing data:", error);
    throw error;
  }
};

/**
 * Delete value from AsyncStorage
 */
const deleteKeyFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data:", error);
    throw error;
  }
};

/**
 * Update value in AsyncStorage
 * (same as setItem, overwrite karta hai)
 */
const updateKey = async (key, value) => {
  try {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);

    await AsyncStorage.setItem(key, stringValue);
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

/**
 * Get value from AsyncStorage
 */
const getValueFromStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value === null) return null;

    // JSON hai to parse karo, warna string hi return
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw error;
  }
};

export {
  addKeyToStorage,
  deleteKeyFromStorage,
  updateKey,
  getValueFromStorage,
};
