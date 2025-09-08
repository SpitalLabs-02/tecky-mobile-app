import { MyColors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const HowItWorks = () => {
  const router = useRouter();

  const ratingImageData = [
    {imgSrc: require('../assets/images/star1.png')},
    {imgSrc: require('../assets/images/star1.png')},
    {imgSrc: require('../assets/images/star1.png')},
    {imgSrc: require('../assets/images/star1.png')},
    {imgSrc: require('../assets/images/star2.png')},
  ]

  const pointerData = [
    {text: 'Start Assessment'},
    {text: 'Basic Information'},
    {text: 'Passion & Personal Interest'},
    {text: 'Skill & Competence Development'},
    {text: 'Your Results'},
  ]

// This function is to handle moving to the next screen
const handleContinue = () =>{
router.push('/information')
}

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>How it Works</Text>

      {/* Container for pointers -Parent */}
      <View style={styles.parentContainer}>
        {/* Children 1 */}
        <Image source={require('../assets/images/pointers.png')} />

        {/* Children 2 */}
        <View>
         {pointerData.map((data, index)=>(
           <Text  key={index} style={styles.pointerText}>{data.text}</Text>
         ))}
        </View>
      </View>
      {/* Pointers end here */}

      {/* Duration */}
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>Ratings</Text>
        <Text style={styles.durationText}>Duration</Text>
      </View>
      {/* Duration ends here */}


      {/* Rating container */}
      <View style={styles.durationContainer}>

        {/* Child 1 */}
        <View style={styles.starContainer}>
          {ratingImageData.map((data, index) => (
            <Image key={index} source={data.imgSrc} style={styles.starImage} />
          ))}
         
          <Text style={styles.durationText}>4.0</Text>
        </View>

        {/* Child 2 */}
        <Text style={[styles.durationText, {color: MyColors.textColor}]}>30 minutes</Text>
      </View>

      {/* Start Assessment button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Start Assessment</Text>
      </TouchableOpacity>

    </View>
  )
}

export default HowItWorks

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'regular',
    color: MyColors.textColor
  },
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 20
  },
  pointerText: {
    fontSize: 14,
    fontWeight: 'regular',
    color: MyColors.textColor,
    marginBottom: 29
  },
  durationContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  durationText: {
    fontSize: 16,
    fontWeight: 'regular',
    color: MyColors.textColor2
  },

  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  starImage: {
    width: 18,
    height: 18
  },
  button: {
    borderWidth: 1,
    borderColor: "#141B34",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    marginTop: 60,
  },

  buttonText: {
    color: "#141B34",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
})