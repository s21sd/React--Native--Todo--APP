import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, ToastAndroid } from 'react-native';
import Tasks from '../Components/Tasks';
import { Entypo } from '@expo/vector-icons';

const MainScreen = () => {
    const [task, setTask] = useState('');
    const [taskitem, setTaskItem] = useState([]);

    const handleTask = () => {
        Keyboard.dismiss();
        setTaskItem([...taskitem, { text: task, completed: false }]); // Initialize completed as false
        setTask('');
        ToastAndroid.show("Task added successfully", ToastAndroid.SHORT)
    }

    const completeTask = (index) => {
        let itemCopy = [...taskitem];
        itemCopy.splice(index, 1);
        setTaskItem(itemCopy);
        ToastAndroid.show("Task deleted successfully", ToastAndroid.SHORT)
    }

    const toggleUnderline = (index) => {
        let itemCopy = [...taskitem];
        itemCopy[index].completed = !itemCopy[index].completed;
        setTaskItem(itemCopy);
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../SRC/img/leaves.jpg')} style={{ position: 'absolute', width: '100%', height: '100%' }} blurRadius={50} />
            <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Today's tasks</Text>
                <View style={{ marginTop: 30 }}>
                    {taskitem.map((item, index) => (
                        <Tasks key={index} task={item.text} completed={item.completed} onDelete={() => completeTask(index)} onToggle={() => toggleUnderline(index)} />
                    ))}
                </View>
            </View>
            <KeyboardAvoidingView
                behavior='height'
                style={{
                    position: 'absolute',
                    bottom: 60,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}
            >
                <TextInput
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 15,
                        width: 250,
                        borderRadius: 60,
                        borderWidth: 1,
                        backgroundColor: '#fff'
                    }}
                    placeholder='Write a task'
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity onPress={() => handleTask()}>
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            backgroundColor: '#fff',
                            borderRadius: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Entypo name="circle-with-plus" size={24} color="#328551" />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

export default MainScreen;
