import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert } from "react-native";

const useMediaPhone = () => {
  const [imageUri, setImage] = useState<string | null>(null);
  const [videoUri, setVideo] = useState<string | null>(null);

  const handleImageSelection = (uri: string) => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn chọn ảnh này?",
      [
        {
          text: "Không",
          style: "cancel",
        },
        {
          text: "Chắc chắn",
          onPress: () => {
            setImage(uri); 
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleVideoSelection = (uri: string) => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn chọn video này?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setVideo(uri);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const showImagePickerOptions = ({ title, describe }: { title: string; describe: string }) => {
    Alert.alert(
      title,
      describe,
      [
        {
          text: "Take a photo",
          onPress: () => uploadImageFromCamera(),
        },
        {
          text: "Choose from the library",
          onPress: () => uploadImageFromLibrary(),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const uploadImageFromCamera = async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted) {
        let result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          quality: 1,
        });
        if (result.assets && result.assets.length > 0) {
          handleImageSelection(result.assets[0].uri);
        }
      } else {
        Alert.alert("Không có quyền truy cập camera!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImageFromLibrary = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted) {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
        if (result.assets && result.assets.length > 0) {
          handleImageSelection(result.assets[0].uri);
        }
      } else {
        Alert.alert("Không có quyền truy cập thư viện ảnh!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showVideoPickerOptions = ({ title, describe }: { title: string; describe: string }) => {
    Alert.alert(
      title,
      describe,
      [
        {
          text: "Record a video",
          onPress: () => uploadVideoFromCamera(),
        },
        {
          text: "Choose from the library",
          onPress: () => uploadVideoFromLibrary(),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const uploadVideoFromCamera = async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted) {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsEditing: true,
          quality: 1,
        });
        if (result.assets && result.assets.length > 0) {
          handleVideoSelection(result.assets[0].uri);
        }
      } else {
        Alert.alert("Không có quyền truy cập camera!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadVideoFromLibrary = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted) {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsEditing: true,
          quality: 1,
        });
        if (result.assets && result.assets.length > 0) {
          handleVideoSelection(result.assets[0].uri);
        }
      } else {
        Alert.alert("Không có quyền truy cập thư viện ảnh!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { 
    videoUri, 
    showVideoPickerOptions, 
    imageUri, 
    showImagePickerOptions,
  };
};

export default useMediaPhone;
