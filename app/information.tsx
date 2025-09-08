import { MyColors } from '@/constants/Colors'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const information = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')


    // State that will handle the option selection
    const [singleAnswer, setSingleAnswer] = useState('')

    const questions = [
        {
            text: 'AGE',
            options: ['15-21 years', '22-34 years', '35 and above']
        },

        {
            text: 'HOW MUCH OF TECH DO YOU KNOW?',
            options: [' Very well', 'Well', 'Not very', 'Neutral']
        }
    ]


    const handleSelect = (option: any) => {
        setSingleAnswer(option)
    }



    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/tecky-logo.png')} />

            <Text style={styles.topText}>Kindly input the following</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.questionText}>NAME</Text>

                <TextInput
                    placeholder='Enter full name'
                    style={styles.input}
                    keyboardType='default'
                    value={fullName}
                    onChangeText={setFullName}
                />

                <Text style={styles.questionText}>EMAIL</Text>

                <TextInput
                    placeholder='Enter email address'
                    style={styles.input}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {questions.map((data, index) => (
                <View key={index} style={styles.mainOptionContainer}>
                    <Text>{index + 1}. {data.text}</Text>
                    {data.options.map((option, j) => {
                        const selected = singleAnswer === option;

                        return (
                            <TouchableOpacity key={j} onPress={() => handleSelect(option)} style={styles.optionContainer}>
                                <View style={[styles.radioButton, selected && styles.radioButtonSelected]} />
                                <Text>{option}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            ))}
        </View>
    )
}

export default information

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        padding: 20
    },
    topText: {
        fontSize: 16,
        fontWeight: 'regular',
        color: MyColors.textColor3,
        marginTop: 20
    },
    questionText: {
        fontSize: 14,
        fontWeight: 'regular',
        color: MyColors.textColor,
        marginTop: 4
    },
    inputContainer: {
        marginTop: 16
    },
    input: {
        borderWidth: 1,
        borderColor: MyColors.inputBorderColor,
        borderRadius: 6,
        padding: 16,
        marginTop: 8,
        color: MyColors.textColor3
    },
    radioButton: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        marginRight: 10,
    },
    radioButtonSelected: {
        backgroundColor: 'blue'
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    mainOptionContainer: {
        marginTop: 12
    }
})