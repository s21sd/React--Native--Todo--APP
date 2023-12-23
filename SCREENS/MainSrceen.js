import React, { useState, useEffect } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, ToastAndroid, ScrollView } from 'react-native';
import Tasks from '../Components/Tasks';
import { Entypo } from '@expo/vector-icons';

import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './FirebaseAuth';

const MainScreen = () => {
    const [task, setTask] = useState('');
    const [taskitem, setTaskItem] = useState([]);

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'todos'));
            const tasks = [];
            querySnapshot.forEach((doc) => {
                tasks.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setTaskItem(tasks);
        } catch (error) {
            console.error('Error fetching tasks: ', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [taskitem]);

    const handleTask = async () => {
        Keyboard.dismiss();
        if (task !== "") {
            await addDoc(collection(db, "todos"), {
                task,
                completed: false
            });
            setTask("");
            ToastAndroid.show('Task added successfully', ToastAndroid.SHORT);
        }
    };

    const completeTask = async (id) => {
        try {
            await deleteDoc(doc(db, 'todos', id));
            const updatedTasks = taskitem.filter((task) => task.id !== id);
            setTaskItem(updatedTasks);
            ToastAndroid.show('Task deleted successfully', ToastAndroid.SHORT);
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    const toggleUnderline = async (id) => {
        try {
            const taskToUpdate = taskitem.find((task) => task.id === id);
            if (!taskToUpdate) {
                return;
            }

            await updateDoc(doc(db, 'todos', id), {
                completed: !taskToUpdate.completed,
            });

            const updatedTasks = taskitem.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            );

            setTaskItem(updatedTasks);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>

            <Image source={require('../SRC/img/leaves.jpg')} style={{ position: 'absolute', width: '100%', height: '100%' }} blurRadius={50} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginLeft: 25 ,color:'white'}}>Today's tasks</Text>
            <KeyboardAvoidingView
                behavior='height'
                style={{
                    position: 'relative',
                    top: 10,
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
                        <Entypo name="circle-with-plus" size={40} color="#328551" />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>

                <View style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',

                }}>
                    {taskitem.map((item, index) => (
                        <Tasks key={index} task={item.task} completed={item.completed} onDelete={() => completeTask(item.id)} onToggle={() => toggleUnderline(item.id)} />
                    ))}
                </View>
            </ScrollView>

        </View>
    );
};

export default MainScreen;
