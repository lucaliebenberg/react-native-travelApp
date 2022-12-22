import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Title, Avatar, Caption, TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigationBuilder } from "@react-navigation/core";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 70 }}>
          <Avatar.Image
            source={{
              uri: "https://i.ibb.co/XkLwCJK/person.png",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              Luca Liebenberg
            </Title>
            <Caption style={styles.caption}>@l_liebenberg</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" size={20} color={colors.darkGray} />
          <Text style={{ color: colors.darkGray, marginLeft: 20 }}>
            Cape Town, South Africa
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" size={20} color={colors.darkGray} />
          <Text style={{ color: colors.darkGray, marginLeft: 20 }}>
            +27 61 645 8869
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" size={20} color={colors.darkGray} />
          <Text style={{ color: colors.darkGray, marginLeft: 20 }}>
            liebenbergluca@gmail.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: colors.gray,
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>R1180</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>15</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" size={25} color={colors.orange} />
            <TouchableRipple onPress={() => navigation.navigate("Liked")}>
              <Text style={styles.menuItemText}>Your favourites</Text>
            </TouchableRipple>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" size={25} color={colors.orange} />
            <Text style={styles.menuItemText}>Payments</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" size={25} color={colors.orange} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon
              name="account-check-outline"
              size={25}
              color={colors.orange}
            />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => navigation.navigate("EditProfile")}>
          <View style={styles.menuItem}>
            <Icon name="account-edit" size={25} color={colors.orange} />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
export default Profile;
