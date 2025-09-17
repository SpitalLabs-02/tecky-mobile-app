import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";

const Index = () => {
  const router = useRouter();

  const handleRoute = () =>{
    router.push('/how-it-works')
  }
  return (
    <View style={styles.container}>
      <Swiper
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.inActiveDot}
        activeDotStyle={styles.activeDot}
        activeDotColor="#141B34"
        dotColor="#E4E4E4"
        autoplay={true}
      >
        {/* Onboarding 1 */}
        <View style={styles.onboardingContainer}>
          <Image source={require("../assets/images/onboard1.png")} />

          <Text style={styles.title}>Career Discovery </Text>

          <Text style={styles.subtitle}>Discover your tech career path.</Text>
          <Text style={styles.description}>
            Take assessment to find your perfect fit in tech
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleRoute}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        {/* Onboarding 1 ends here */}

        {/* Onboarding 2 */}
        <View style={styles.onboardingContainer}>
          <Image source={require("../assets/images/onboard2.png")} />

          <Text style={styles.title}>Explore Tech Courses</Text>

          <Text style={styles.subtitle}>Unlock your potential in tech.</Text>
          <Text style={styles.description}>
            Explore courses in cyber security, Digital Marketing & Content
            Development and more.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleRoute}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        {/* Onboarding 2 ends here */}

        {/* Onboarding 3 */}
        <View style={styles.onboardingContainer}>
          <Image source={require("../assets/images/onboard3.png")} />

          <Text style={styles.title}>Personalized Learning</Text>

          <Text style={styles.subtitle}>Find your tech fit.</Text>
          <Text style={styles.description}>
            Get personalized tech recommendations based on your interest and
            skill.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleRoute}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        {/* Onboarding 3 ends here */}
      </Swiper>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "normal",
    color: "#141B34",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#141B34",
    marginTop: 16,
  },

  description: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#141B34",
  },

  button: {
    backgroundColor: "#141B34",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    marginTop: 100,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  onboardingContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  activeDot: {
    width: 25,
    height: 7,
    borderRadius: 4,
  },
  inActiveDot: {
    width: 25,
    height: 7,
    borderRadius: 4,
  },
  paginationStyle: {
    position: "absolute",
    top: 400,
  },
});
