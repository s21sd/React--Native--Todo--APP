import React, { useState } from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const Tasks = (props) => {

    const { task, onDelete, completed, onToggle } = props;

    return (
        <View style={{
            backgroundColor: '#fff',
            padding: 15,
            borderRadius: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20


        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap'

            }}>
                <TouchableOpacity style={{
                    width: 30,
                    height: 30,
                    backgroundColor: completed ? '#328551':'#122f2b',
                    opacity: 0.4,
                    borderRadius: 10,
                    marginRight: 10
                }} onPress={onToggle}></TouchableOpacity>

                <Text style={{
                    maxWidth: '80%',
                    textDecorationLine: completed ? 'line-through' : 'none',
                    fontSize: 30,
                    fontWeight: 'bold',

                }}>{task}</Text>
            </View>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={30} color="#328551" />
            </TouchableOpacity>

        </View>
    )
}

export default Tasks
