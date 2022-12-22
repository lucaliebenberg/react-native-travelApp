import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Constants } from "expo-constants";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import colors from "../assets/colors/colors";

import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

const EditProfile = ({ navigation }) => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [image, setImage] = useState(null);

  // camera useEffect
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  // camera permissions check
  // if (hasCameraPermission === undefined) {
  //   return <Text>Requesting Permission...</Text>;
  // } else if (!hasCameraPermission) {
  //   return (
  //     <Text>
  //       Permission for camera not granted. Please change this in settings.
  //     </Text>
  //   );
  // }

  // take picture function
  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  // image picker useEffect
  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    }
  }, []);

  // image picker
  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.image);
    }
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePic}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={PickImage}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <SafeAreaView
      style={styles.container}
      options={{
        headerShown: false,
      }}
    >
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Icon name="chevron-left" size={35} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <ImageBackground
                source={{
                  uri: image,
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="white"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground> */}
              {image && (
                <ImageBackground
                  source={{ uri: image }}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                />
              )}

              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="camera"
                  size={35}
                  color="grey"
                  style={{
                    opacity: 0.7,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#fff",
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            Luca Liebenberg
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor={"#666666"}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={"#666666"}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor={"#666666"}
            keyboardType="number-pad"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor={"#666666"}
            keyboardType="email-address"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor={"#666666"}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="map-marker" size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor={"#666666"}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: colors.orange,
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
